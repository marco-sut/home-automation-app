import { DeviceType, QueryResponse, SyncResponse, TraitCommand } from "../app/lib";

export const syncResponse: SyncResponse = {
  requestId: '123',
  payload: {
    agentUserId: 'user_123',
    devices: [{
      id: '1',
      type: DeviceType.LIGHT,
      traits: [
        TraitCommand.ON_OFF,
      ],
      name: 'Ceiling',
      room: 'Living room'
    },
    {
      id: '2',
      type: DeviceType.LIGHT,
      traits: [
        TraitCommand.ON_OFF,
      ],
      name: 'Lamp',
      room: 'Living room'
    },
    {
      id: '3',
      type: DeviceType.LIGHT,
      traits: [
        TraitCommand.ON_OFF,
      ],
      name: 'TV Lamp',
      room: 'Living room'
    },
    {
      id: '4',
      type: DeviceType.LIGHT,
      traits: [
        TraitCommand.ON_OFF,
      ],
      name: 'Service light',
      room: 'Living room'
    },
    {
      id: '5',
      type: DeviceType.LIGHT,
      traits: [
        TraitCommand.ON_OFF,
      ],
      name: 'Ceiling',
      room: 'Kitchen'
    },
    {
      id: '6',
      type: DeviceType.LIGHT,
      traits: [
        TraitCommand.ON_OFF,
      ],
      name: 'Lamp',
      room: 'Kitchen'
    },
    {
      id: '7',
      type: DeviceType.LIGHT,
      traits: [
        TraitCommand.ON_OFF,
      ],
      name: 'Sink Lamp',
      room: 'Kitchen'
    },
    {
      id: '8',
      type: DeviceType.LIGHT,
      traits: [
        TraitCommand.ON_OFF,
      ],
      name: 'Service light',
      room: 'Kitchen'
    },
    {
      id: '9',
      type: DeviceType.LIGHT,
      traits: [
        TraitCommand.ON_OFF,
      ],
      name: 'Ceiling',
      room: 'Master bedroom'
    },
    {
      id: '10',
      type: DeviceType.LIGHT,
      traits: [
        TraitCommand.ON_OFF,
      ],
      name: 'Lamp',
      room: 'Master bedroom'
    },
    {
      id: '11',
      type: DeviceType.LIGHT,
      traits: [
        TraitCommand.ON_OFF,
      ],
      name: 'Night light',
      room: 'Master bedroom'
    },
    {
      id: '12',
      type: DeviceType.LIGHT,
      traits: [
        TraitCommand.ON_OFF,
      ],
      name: 'Ceiling',
      room: 'Children bedroom'
    },
    {
      id: '13',
      type: DeviceType.LIGHT,
      traits: [
        TraitCommand.ON_OFF,
      ],
      name: 'Night light',
      room: 'Children bedroom'
    },
    {
      id: '14',
      type: DeviceType.THERMOSTAT,
      traits: [
        TraitCommand.TEMPERATURE_SETTING,
      ],
      name: 'Thermostat',
      room: 'ALL',
    }]
  }
};

export const queryResponse: QueryResponse = {
  requestId: '123',
  payload: {
    devices: {
      '1': {
        on: false,
        online: true,
      },
      '2': {
        on: true,
        online: true,
      },
      '3': {
        on: false,
        online: true,
      },
      '4': {
        on: false,
        online: true,
      },
      '5': {
        on: false,
        online: true,
      },
      '6': {
        on: false,
        online: true,
      },
      '7': {
        on: true,
        online: true,
      },
      '8': {
        on: false,
        online: true,
      },
      '9': {
        on: true,
        online: true,
      },
      '10': {
        on: false,
        online: true,
      },
      '11': {
        on: false,
        online: true,
      },
      '12': {
        on: false,
        online: true,
      },
      '13': {
        on: false,
        online: true,
      },
      '14': {
        temperatureSetpoint: 18,
        online: true,
      }
    }
  }
};
