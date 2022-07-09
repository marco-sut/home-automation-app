import { authService } from "../core";

const getHeaders = (body?: unknown) => ({
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    authorization: `Bearer ${authService.accessToken}`
  },
  ...(body ? { body: JSON.stringify(body) } : {}),
});

const apiUrl = 'https://adobe.home-central-hub.com/v1';

export async function sync() {
  return fetch(`${apiUrl}/sync`, getHeaders()).then((resp) => resp.json());
}
