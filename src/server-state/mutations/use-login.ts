/* eslint-disable camelcase */
import { useSnackbar } from "notistack";
import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import { request } from "../api";
import { useAuth } from "../../state/auth/auth.state";
import { showNotification } from "@mantine/notifications";

export {};

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  email: string;
  first_name: string;
  last_name: string;
  tokens: {
    access: string;
    refresh: string;
  };
}

export const useLogin = () => {
  const { login } = useAuth();
  const history = useHistory();

  return useMutation(
    (data: LoginRequest) =>
      request.public
        .post<LoginResponse>("/account/login/", data)
        .then((res) => res.data),
    {
      onSuccess(data) {
        const {
          email,
          first_name,
          last_name,
          tokens: { access, refresh },
        } = data;
        login({
          email,
          firstName: first_name,
          lastName: last_name,
          tokens: {
            access: access,
            refresh: refresh,
          },
        });
        showNotification({
          title: "Notification",
          message: "Succesfully logged in",
          color: "green",
        });
        history.push("/");
      },
      onError() {
        showNotification({
          title: "Notification",
          message: "User not found!",
          color: "red",
        });
      },
      retry: false,
    }
  );
};
