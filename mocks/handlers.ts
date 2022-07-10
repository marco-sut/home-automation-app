import { rest } from 'msw';
import { ExecuteRequest, QueryRequest } from '../app/lib';
import { authConfig } from '../app/lib';
import { queryResponse, syncResponse } from './mockedResponses';

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
    const devices = (req.body as QueryRequest).payload.devices.reduce((map, obj) => {
      map[obj.id] = queryResponse.payload.devices[obj.id];

      return map;
    }, {});

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
    const payload = (req.body as ExecuteRequest).payload;
    const { params } = payload;
    const { deviceId } = payload;
    const devices = queryResponse.payload.devices;
    const newState = {
      ...(typeof params.on !== 'undefined' ? { on: params.on } : {}),
      ...(typeof params.temperatureSetpoint !== 'undefined' ? { temperatureSetpoint: params.temperatureSetpoint } : {}),
      online: true,
    };

    for (const key in devices) {
      if (key === deviceId) {
        devices[key] = newState;
      }
    }

    return res(
      ctx.status(200),
      ctx.json({
        requestId: '123',
        payload: {
          status: 'SUCCESS',
          state: newState,
        }
      }),
    );

    // return res(
    //   ctx.status(200),
    //   ctx.json({
    //     requestId: '123',
    //     payload: {
    //       status: 'ERROR',
    //       errorDesc: 'Device offline',
    //     }
    //   }),
    // );
    
    // return res(ctx.status(500));
  })
];
