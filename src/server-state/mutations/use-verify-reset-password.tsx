import { showNotification } from "@mantine/notifications";
import { useMutation } from "react-query";
import { request } from "../api";

interface EmailRequest {
  email: string;
  code: string;
}

export const useVerfyResetPassword = () =>
  useMutation(
    (data: EmailRequest) =>
      request.public
        .post<{ verification_key: string }>(
          "/account/verify-reset-password/",
          data
        )
        .then((res) => res.data),
    {
      onSuccess() {
        showNotification({
          title: "Notification",
          message: "Create New password",
          color: "green",
        });
      },
      retry: false,
    }
  );
