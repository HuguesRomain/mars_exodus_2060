import { TokenStorage } from "exodus/utils/accessStorage";

export type userConnectionData = {
  username: string;
  password: string;
};

export type TokenTypeResponse = {
  token: string;
  code: number;
  message: string;
};

export type ErrorType = {
  code: number;
  message: string;
};

export type NewPasswordDataType = {
  newPassword: string;
  oldPassword: string;
};

export const connect = (
  connectData: userConnectionData
): Promise<TokenTypeResponse> => {
  return fetch("https://symfony-xmt3.frb.io/api/login_check", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(connectData),
  })
    .then((resp) => {
      return resp.json();
    })
    .catch((err) => {
      return err;
    });
};

export const ChangePassword = (NewPasswordData: NewPasswordDataType) => {
  return fetch(
    "https://symfony-xmt3.frb.io/api/users/%7Bid%7D/reset-password",
    {
      headers: {
        Authorization: `Bearer ${TokenStorage()}`,
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify(NewPasswordData),
    }
  )
    .then((resp) => {
      return resp.json();
    })
    .catch((err) => {
      return err;
    });
};
