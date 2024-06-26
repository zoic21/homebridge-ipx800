import { PlatformAccessory, CharacteristicValue} from 'homebridge';
import { IPXPlatform } from '../platform';

export abstract class IpxApiCaller {

  public abstract setOnRelay(value: CharacteristicValue, platform: IPXPlatform, accessory: PlatformAccessory): void;
  public abstract setOnDimmer(value: CharacteristicValue, platform: IPXPlatform, accessory: PlatformAccessory): void;
  //public abstract setAnaPosition(value: CharacteristicValue, platform: IPXPlatform, accessory: PlatformAccessory): void;
  public abstract setVRPosition(value: CharacteristicValue, platform: IPXPlatform, accessory: PlatformAccessory): void;
  public abstract setDimmerPosition(value: CharacteristicValue, platform: IPXPlatform, accessory: PlatformAccessory): void;
  public abstract getState(platform: IPXPlatform);

}