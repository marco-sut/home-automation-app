import { store } from "../store";
import { ActionTypes } from "../store/actions";
import { navigateTo } from "./router";
import { generateRandomString, parseJwt, pkceChallengeFromVerifier } from "./utils";

export const authConfig = {
  clientId: 'adobe-home',
  redirectUri: '/authenticate',
  authorizationEndpoint: '/login',
  tokenEndpoint: 'https://adobe.home-central-hub.com/v1/oauth/token',
  requestedScopes: 'openid'
};

export class AuthService {
  private state = '';
  private codeVerifier = '';
  private authUrl = '';

  codeChallenge = '';
  accessToken: string;

  async initPkce() {
    this.state = generateRandomString();
    this.codeVerifier = generateRandomString();
    this.codeChallenge = await pkceChallengeFromVerifier(this.codeVerifier);
    this.authUrl = `${authConfig.authorizationEndpoint}?response_type=code&client_id=${encodeURIComponent(authConfig.clientId)}&state=${encodeURIComponent(this.state)}&scope=${encodeURIComponent(authConfig.requestedScopes)}&redirect_uri=${encodeURIComponent(authConfig.redirectUri)}&code_challenge=${encodeURIComponent(this.codeChallenge)}&code_challenge_method=S256`;

    navigateTo({}, this.authUrl);
  }

  async fetchAccessAndIdToken() {
    const queryParams = new URLSearchParams(window.location.search);
    const error = queryParams.get('error');
    const code = queryParams.get('code');
    const state = queryParams.get('state');

    if (error) {
      throw new Error(`Error returned from authorization server: ${error}`);
    }

    if (code) {
      if (this.state !== state) {
        throw new Error('Invalid state');
      } else {
        try {
          const { access_token, id_token } = await fetch(authConfig.tokenEndpoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              grant_type: 'authorization_code',
              code,
              client_id: authConfig.clientId,
              redirect_uri: authConfig.redirectUri,
              code_verifier: this.codeVerifier
            }),
          }).then((response) => response.json());

          this.accessToken = access_token;
          store.dispatch(ActionTypes.SetUser, parseJwt(id_token))
        } catch (error) {
          throw new Error(`Error returned from token endpoint: ${error}`);
        }
      }
    }
  }
}

