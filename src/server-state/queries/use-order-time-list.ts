import { useQuery } from "react-query";
import { request } from "../api";

interface OrderTimeListType {
  id: number;
  interval: string;
}

export const useGetOrderTimeList = () =>
  useQuery("suggested-users", () =>
    request.public
      .get<OrderTimeListType[]>("/order-time/")
      .then((res) => res.data)
  );
