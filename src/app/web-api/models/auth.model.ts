export namespace AuthModel {
  export interface AuthToken {
    username: string;
    tokenType: string;
    accessToken: string;
    expiresIn: number;
  }
}
