export type User = {
  name: string;
  loggedIn: boolean;
};

export enum DeviceType {
  LIGHT = 'action.devices.types.LIGHT',
  THERMOSTAT = 'action.devices.types.THERMOSTAT',
}

export enum TraitCommand {
  ON_OFF = 'action.devices.types.OnOff',
  TEMPERATURE_SETTING = 'action.devices.types.TemperatureSetting',
}

export type DeviceRef = {
  id: string;
  type: DeviceType;
  traits: TraitCommand[];
  name: string;
  room: string;
};

export type DeviceData = {
  on?: boolean;
  temperatureSetpoint?: number;
  online: boolean;
};

export type Devices = Record<string, DeviceData>;
