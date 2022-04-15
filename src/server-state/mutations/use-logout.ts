/* eslint-disable camelcase */
import { showNotification } from "@mantine/notifications";
import { useMutation } from "react-query";
import { useAuth } from "../../state/auth/auth.state";
import { request } from "../api";

interface LogoutRequest {
  refresh_token: string;
}

export const useLogout = () => {
  const { logout } = useAuth();
  return useMutation(
    (data: LogoutRequest) =>
      request.private
        .post<{ detail: "Successfully logged out!" | "Token Error" }>(
          "/account/logout/",
          data
        )
        .then((res) => res.data),
    {
      onSuccess() {
        logout();
      },
      onError() {
        showNotification({
          title: "Notification",
          message: "Ooops, Some unhandled error",
          color: "red",
        });
      },
      retry: false,
    }
  );
};
