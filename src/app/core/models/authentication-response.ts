/**
 * Interface representing the response for authentication.
 * Contains access and refresh tokens.
 */
export interface AuthenticationResponse {
  accessToken: string;
  refreshToken: string;
}
