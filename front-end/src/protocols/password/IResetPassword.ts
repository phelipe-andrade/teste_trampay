import { IUserLogin } from "../user/IUserLogin";

export interface IResetPasswordForm extends IUserLogin {
  password_new: string;
  password_repeat: string;
}

export interface IResetPassword {
  email: string;
  old_password: string;
  new_password: string;
}
