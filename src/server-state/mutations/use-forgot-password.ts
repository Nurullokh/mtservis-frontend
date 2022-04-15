/* eslint-disable camelcase */
import { useMutation } from "react-query";
import { request } from "../api";
import { showNotification } from "@mantine/notifications";

export {};

interface ForgotPasswordRequest {
  email: string;
}

interface ForgotPasswordResponse {
  email: string;
}

export const useForgotPassword = () =>
  useMutation(
    (data: ForgotPasswordRequest) =>
      request.public
        .post<ForgotPasswordResponse>("account/forgot-password/", data)
        .then((res) => res.data),
    {
      onSuccess() {
        showNotification({
          title: "Notification",
          message: "Verification code send successfully!",
          color: "green",
        });
      },
      onError() {
        showNotification({
          title: "Notification",
          message: "Email not registered!",
          color: "red",
        });
      },
      retry: false,
    }
  );
