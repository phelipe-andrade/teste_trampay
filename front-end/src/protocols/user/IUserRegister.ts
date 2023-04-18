import { IUserLogin } from "./IUserLogin";

export interface IUserRegister extends IUserLogin{
  name: string;
}

export interface IUserRegisterForm extends IUserRegister {
  password_repeat: string;
}