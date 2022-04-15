/* eslint-disable camelcase */
import { showNotification } from "@mantine/notifications";
import { useMutation } from "react-query";
import { request } from "../api";
import { RegionInterface } from "./use-register";

interface UpdateProfileRequest extends RegionInterface {
  first_name: string;
  last_name: string;
  phone_number: string;
  city: string;
  street: string;
  zip_code: string;
  profile_image: number;
}

interface UpdateProfileResponse {
  email: string;
  first_name: string;
  last_name: string;
  user_type: string;
  phone_number: string;
  region: string;
  city: string;
  street: string;
  zip_code: string;
  profile_image: {
    id: number;
    file: string;
    thumbnail_150: string;
  };
}

export const useUpdateProfile = () =>
  useMutation(
    (register: UpdateProfileRequest) =>
      request.private
        .patch<UpdateProfileResponse>("/account/user/update-profile/", register)
        .then((res) => res.data),
    {
      onSuccess() {
        showNotification({
          title: "Notification",
          message: "Profile updated successfully",
          color: "green",
        });
      },
      retry: false,
    }
  );
