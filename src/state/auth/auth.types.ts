export interface Tokens {
  tokens: {
    access: string;
    refresh: string;
  };
}

export interface AuthCredentials extends Tokens {
  firstName: string | null;
  lastName: string;
  email: string;
}

export interface AuthContextInterface extends AuthCredentials {
  login: (
    data: { lastName: string; firstName: string; email: string } & Tokens
  ) => void;
  logout: () => void;
}

// Auth Action types
export type Login = {
  type: "LOGIN";
  payload: {
    accessToken: string;
    refreshToken: string;
    lastName: string;
    firstName: string;
    email: string;
  };
};

export type SetAuthCredentials = {
  type: "SET_AUTH_CREDENTIALS";
  payload: {
    firstName: string;
    lastName: string;
    email: string;
  };
};

export type Logout = {
  type: "LOGOUT";
};

export type AuthActions = Login | SetAuthCredentials | Logout;
