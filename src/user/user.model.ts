export class UserModel {
  id?: number;
  name?: string;
  introduction?: string;
  password?: string;
  info?: {
    qq: string;
    wx: string;
    eMail: string;
    github: string;
  }
}