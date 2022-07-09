export function generateRandomString() {
  const array = new Uint32Array(28);
  window.crypto.getRandomValues(array);
  return Array.from(array, dec => ('0' + dec.toString(16)).substring(-2)).join('');
}

// Calculate the SHA256 hash of the input text. 
// Returns a promise that resolves to an ArrayBuffer
export function sha256(verifier: string) {
  const encoder = new TextEncoder();
  const data = encoder.encode(verifier);
  return window.crypto.subtle.digest('SHA-256', data);
}

// Base64-urlencodes the input string
export function base64urlencode(str: ArrayBufferLike) {
  // Convert the ArrayBuffer to string using Uint8 array to conver to what btoa accepts.
  // btoa accepts chars only within ascii 0-255 and base64 encodes them.
  // Then convert the base64 encoded to base64url encoded
  //   (replace + with -, replace / with _, trim trailing =)
  return btoa(String.fromCharCode.apply(null, new Uint8Array(str)))
    .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

// Return the base64-urlencoded sha256 hash for the PKCE challenge
export async function pkceChallengeFromVerifier(verifier: string) {
  const hashed = await sha256(verifier);
  return base64urlencode(hashed);
}

export function parseJwt(token: string): object {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
}

export function distinct<T>(array: T[], key: string, exclude?: string) {
  return [...new Set(array.map(item => item[key] !== exclude ? item[key] : undefined).filter(Boolean))];
}