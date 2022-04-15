/* eslint-disable camelcase */
import { showNotification } from "@mantine/notifications";
import { useMutation } from "react-query";
import { useAuth } from "../../state/auth/auth.state";
import { request } from "../api";

export const useDeleteProfile = () => {
  const { logout } = useAuth();
  return useMutation(
    (smth: any) =>
      request.private
        .delete<{ detail: string }>("/account/user/delete-profile/")
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
