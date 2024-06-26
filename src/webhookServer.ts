import http from 'http';
import { IPXPlatform } from './platform';

export class WebhookServer {

    public updateTimeout;

    start(platform: IPXPlatform){
        if(!platform.config['api'].webhookPath || platform.config['api'].webhookPath.trim() == '' || !platform.config['api'].webhookPort){
            platform.log.info("Webhook configuration invalid");
            return;
        }
        const server = http.createServer()
        server.listen(platform.config['api'].webhookPort)
        platform.log.info("Started server for webhooks on port "+platform.config['api'].webhookPort);
        server.on("request", (request, response) => {
            platform.log.info("Received request");
            const { method, url, headers } = request
            if (method === "GET" && url === "/"+platform.config['api'].webhookPath) {
                if(this.updateTimeout && this.updateTimeout != -1){
                    clearTimeout(this.updateTimeout);
                }
                this.updateTimeout = setTimeout(() => {
                    this.updateTimeout = -1
                    platform.log.info("Update state");
                    platform.updateDevices();
                },750)
            }
            response.statusCode = 200
            response.end()
        })
    }


}