import { ILogin } from "@/store/user"
import { IUserRecover } from "./user/IUserRevocer"

export interface IRedux {
  user: {
    login: ILogin,
    email: string
  };
  theme: string;
  message: string[];
}