import { showNotification } from "@mantine/notifications";
import { useMutation } from "react-query";
import { request } from "../api";

interface EmailRequest {
  email: string;
  code: string;
}

export const useVerfication = () =>
  useMutation(
    (data: EmailRequest) =>
      request.public
        .post<{ status: string }>("account/confirm-registration/", data)
        .then((res) => res.data),
    {
      onSuccess() {
        showNotification({
          title: "Notification",
          message: "Profile succesfully created please login!",
          color: "green",
        });
      },
      retry: false,
    }
  );
