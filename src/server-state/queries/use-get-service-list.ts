import { useQuery } from "react-query";
import { request } from "../api";

export interface SingleService {
  id: number;
  name: string;
  icon: {
    file: string;
    id: number;
    thumbnail_150: string;
  };
}

export const useServicesList = () =>
  useQuery("suggested-users", () =>
    request.public.get<SingleService[]>("/service/").then((res) => res.data)
  );
