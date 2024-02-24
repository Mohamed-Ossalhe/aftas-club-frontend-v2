export interface authStateInterface {
  authentication: authenticationInterface | null,
  i18n: i18nInterface | null,
  _persist: persistInterface | null,
  submitting: boolean,
  loading: boolean
}

interface authenticationInterface {
  token: string | null,
  decodedToken: decodeTokenInterface | null,
  refreshToken: string | null
}

interface decodeTokenInterface {
  "iat": number,
  "exp": number,
  "sub": string,
  "roles": string[],
  "username": string,
  "locale": string
}

interface i18nInterface {
  locale: string
}

interface persistInterface {
  "version": number,
  "rehydrated": boolean
}
