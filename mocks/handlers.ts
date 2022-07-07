import { rest } from 'msw';

export const handlers = [
  rest.get('https://adobe.homeautomation.com/v1/test', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        payload: 'test',
      }),
    )
  })
];
