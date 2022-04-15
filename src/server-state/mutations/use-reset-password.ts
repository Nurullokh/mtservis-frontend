import { showNotification } from "@mantine/notifications";
import { useMutation } from "react-query";
import { request } from "../api";

interface EmailRequest {
  password: string;
  confirm_password: string;
  verification_key: string;
}

export const useResetPassword = () =>
  useMutation(
    (data: EmailRequest) =>
      request.public
        .post<{ verification_key: string }>("/account/reset-password/", data)
        .then((res) => res.data),
    {
      onSuccess() {
        showNotification({
          title: "Notification",
          message: "Password succesffully created",
          color: "green",
        });
      },
      retry: false,
    }
  );
