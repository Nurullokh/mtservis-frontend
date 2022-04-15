import { useQuery } from "react-query";
import { request } from "../api";
import { RegionInterface } from "../mutations/use-register";

export interface UserProfile extends RegionInterface {
  id: number;
  first_name: string;
  last_name: string;
  phone_number: string;
  city: string;
  street: string;
  zip_code: string;
  user_type: string;
  email: string;
  profile_image: {
    id: number;
    file: string;
    thumbnail_150: string;
  };
}

export const useGetProfile = () =>
  useQuery("profile", () =>
    request.private
      .get<UserProfile>("/account/user/get-profile/")
      .then((res) => res.data)
  );
