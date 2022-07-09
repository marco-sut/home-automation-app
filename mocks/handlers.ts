import { rest } from 'msw';
import { DeviceType, ExecutePayload, QueryPayload } from '../app/lib';
import { authConfig } from '../app/lib';
import { syncResponse } from './mockedResponses';

export const handlers = [
  rest.post(authConfig.tokenEndpoint, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2Fkb2JlLmhvbWUtY2VudHJhbC1odWIuY29tIiwic3ViIjoidXNlcl8xMjMiLCJpYXQiOjE0NTg3ODU3OTYsImV4cCI6MTQ1ODg3MjE5Nn0.yQn9tWvQN-RFK0tJcLARl3qrgUDejrqMnRwSwEF7Xb8",
        refresh_token: "GEbRxBNedjnXbL",
        id_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRXJpa2EgTXVzdGVybWFubiIsImxvZ2dlZEluIjp0cnVlfQ.lIHIK7J7NxBM9ZBMZOkMIcPBMAzvV-zdjj2Jc8Lcx8A",
        token_type: "Bearer",
        expires_in: 86400
      }),
    )
  }),
  rest.post('https://adobe.home-central-hub.com/v1/sync', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(syncResponse),
    );
  }),
  rest.post('https://adobe.home-central-hub.com/v1/query', (req, res, ctx) => {
    const devices = (req.body as QueryPayload).payload.devices.map((dev) => {
      const deviceType = syncResponse.payload.devices.find((syncDev) => syncDev.id === dev.id)?.type;

      return {
        id: dev.id,
        online: true,
        ...(deviceType === DeviceType.LIGHT ? { on: false } : {}),
        ...(deviceType === DeviceType.THERMOSTAT ? { temperatureSetpoint: 20 } : {}),
      }
    });

    return res(
      ctx.status(200),
      ctx.json({
        requestId: '123',
        payload: {
          devices
        }
      }),
    );
  }),
  rest.post('https://adobe.home-central-hub.com/v1/execute', (req, res, ctx) => {
    const params = (req.body as ExecutePayload).payload.params;

    return res(
      ctx.status(200),
      ctx.json({
        requestId: '123',
        payload: {
          status: 'SUCCESS',
          state: {
            ...(typeof params.on !== 'undefined' ? { on: params.on } : {}),
            ...(typeof params.temperatureSetpoint !== 'undefined' ? { on: params.temperatureSetpoint } : {}),
            online: true,
          }
        }
      }),
    );
  })
];
