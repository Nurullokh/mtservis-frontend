/* eslint-disable camelcase */
import { showNotification } from "@mantine/notifications";
import { useMutation } from "react-query";
import { request } from "../api";

export const regions = [
  "andijan",
  "bukhara",
  "djizzak",
  "fergana",
  "kashkadarya",
  "khorezm",
  "namangan",
  "navoi",
  "samarkand",
  "surkhandarya",
  "syrdarya",
  "tashkent_region",
  "tashkent_city",
  "karakalpakistan",
];

export interface RegionInterface {
  region:
    | "andijan"
    | "bukhara"
    | "djizzak"
    | "fergana"
    | "kashkadarya"
    | "khorezm"
    | "namangan"
    | "navoi"
    | "samarkand"
    | "surkhandarya"
    | "syrdarya"
    | "tashkent_region"
    | "tashkent_city"
    | "karakalpakistan";
}
interface SignUpRequest extends RegionInterface {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  user_type: string;
  phone_number: string;
  city: string;
  street: string;
  zip_code: string;
  profile_image: number | string;
}

interface SignUpResponse {
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

export const useSignUp = () =>
  useMutation(
    (register: SignUpRequest) =>
      request.public
        .post<SignUpResponse>("/account/register/", register)
        .then((res) => res.data),
    {
      onSuccess() {
        showNotification({
          title: "Notification",
          message: "Check gmail for verification code!",
          color: "green",
        });
      },
      retry: false,
    }
  );
