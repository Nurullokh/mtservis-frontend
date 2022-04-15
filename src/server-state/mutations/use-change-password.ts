import { showNotification } from "@mantine/notifications";
import { useMutation } from "react-query";
import { request } from "../api";

interface ChangePsswordRequest {
  password: string;
  confirm_password: string;
  current_password: string;
}

export const useChangePassword = () =>
  useMutation(
    (data: ChangePsswordRequest) =>
      request.private
        .post("/account/change-password/", data)
        .then((res) => res.data),
    {
      onSuccess() {
        showNotification({
          title: "Notification",
          message: "Password succesffully changed!",
          color: "green",
        });
      },
      onError(err: any) {
        showNotification({
          title: "Notification",
          message: err.response.data.errors[0].message,
          color: "red",
        });
      },
      retry: false,
    }
  );
