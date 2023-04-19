import { IRegisterMovement } from "./protocols/moviment/IResgisterMovement";
import { IResetPassword } from "./protocols/password/IResetPassword";
import { IUserLogin } from "./protocols/user/IUserLogin";
import { IUserRegister } from "./protocols/user/IUserRegister";
import { IUserRecover } from "./protocols/user/IUserRevocer";

const API_URL = process.env.APP_API_URL || 'http://localhost:3000';


const POST = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
}

const PUT = {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
}

export function USER_LOGIN(body: IUserLogin) {
  return {
    url: API_URL + '/user/login',
    options: {
      ...POST, 
      body: JSON.stringify(body)
    },
  };
}

export function USER_REGISTER(body: IUserRegister) {
  return {
    url: API_URL + '/user',
    options: {
      ...POST, 
      body: JSON.stringify(body)
    },
  };
}

export function USER_RECOVER(body: IUserRecover) {
  return {
    url: API_URL + '/password',
    options: {
      ...POST, 
      body: JSON.stringify(body)
    },
  };
}

export function MOVEMENT_REGISTER(body: IRegisterMovement[], token: string) {
  return {
    url: API_URL + '/movement',
    options: {
      ...POST, 
      body: JSON.stringify(body),
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

export function RESET_PASSWORD(body: IResetPassword) {
  return {
    url: API_URL + '/password',
    options: {
      ...PUT, 
      body: JSON.stringify(body)
    },
  };
}

export function GET_USER(token: string) {
  return {
    url: API_URL + '/user',
    options: {
      method:'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}


export function GET_LIST_MOVEMENT(token: string) {
  return {
    url: API_URL + '/movement',
    options: {
      method:'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}