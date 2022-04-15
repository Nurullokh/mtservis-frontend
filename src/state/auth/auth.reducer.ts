import { AuthActions, AuthCredentials } from "./auth.types";
import { getStorage } from "../../utils/local-storage";

export const initialState = {
  firstName: getStorage("firstName") ?? "",
  lastName: getStorage("lastName") ?? "",
  email: getStorage("email") ?? "",
  tokens: {
    access: getStorage("accessToken") ?? "",
    refresh: getStorage("refreshToken") ?? "",
  },
};

export const authReducer = (state: AuthCredentials, action: AuthActions) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        tokens: {
          refresh: action.payload.refreshToken,
          access: action.payload.accessToken,
        },
        lastName: action.payload.lastName,
        firstName: action.payload.firstName,
        emaik: action.payload.email,
      };
    case "SET_AUTH_CREDENTIALS":
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
      };
    case "LOGOUT":
      window.location.reload();
      return {
        firstName: "",
        lastName: "",
        email: "",
        tokens: {
          access: "",
          refresh: "",
        },
      };
    default:
      return state;
  }
};
