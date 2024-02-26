export interface authStateInterface {
  user: AuthResponse | null | undefined,
  isLoggedIn: boolean,
  isSubmitting: boolean,
  isLoading: boolean,
  errors: {}
}

export interface AuthResponse {
  username?: string,
  email?: string,
  role?: string,
  token?: string,
  refreshToken?: string
  // decodedToken: decodeTokenInterface
}

interface decodeTokenInterface {
  "sub": string,
  "iat": number,
  "exp": number,
  "roles": []
}
