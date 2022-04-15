import { removeStorage, setStorage } from "../../utils/local-storage";
import { Login, Logout, Tokens } from "./auth.types";

export const login = (
  data: { lastName: string; firstName: string; email: string } & Tokens
): Login => {
  setStorage("accessToken", data.tokens.access);
  setStorage("refreshToken", data.tokens.refresh);
  setStorage("lastName", data.lastName);
  setStorage("firstName", data.firstName);
  return {
    type: "LOGIN",
    payload: {
      accessToken: data.tokens.access,
      refreshToken: data.tokens.refresh,
      lastName: data.lastName,
      firstName: data.firstName,
      email: data.email,
    },
  };
};

export const logout = (): Logout => {
  removeStorage("accessToken");
  removeStorage("refreshToken");
  removeStorage("lastName");
  removeStorage("email");
  return {
    type: "LOGOUT",
  };
};
