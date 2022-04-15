import { useQuery } from "react-query";
import { request } from "../api";

interface SingleBrandType {
  id: number;
  name: string;
  service_type: {
    id: number;
    name: string;
  };
}

export const useBrandListType = () =>
  useQuery("suggested-users", () =>
    request.public.get<SingleBrandType[]>("/brand/").then((res) => res.data)
  );
