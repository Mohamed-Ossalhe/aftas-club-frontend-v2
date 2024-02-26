/**
 * Interface representing the response for authentication.
 * Contains access and refresh tokens.
 */

export interface AuthenticationResponse {
  username?: string,
  email?: string,
  role?: string,
  token: string,
  refreshToken?: string
  // decodedToken: decodeTokenInterface
}
