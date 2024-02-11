export interface AuthorizationCodeResponse {
  accessToken: string,
  refreshToken: string,
  tokenType: string,
  expiresIn: number
}
