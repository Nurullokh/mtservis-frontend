import { useQuery } from "react-query";
import { request } from "../api";

interface SingleServiceType {
  id: number;
  name: string;
  logo: {
    file: string;
    id: number;
    thumbnail_150: any;
  };
}

export const useServicesListType = ({ id = 1 }: { id: number }) =>
  useQuery("suggested-users", () =>
    request.public
      .get<SingleServiceType[]>(`/service-type/?service=${id}`)
      .then((res) => res.data)
  );
