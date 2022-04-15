import { useInfiniteQuery } from "react-query";
import { request } from "../api";

interface OrderlistResponse {
  count: 3;
  next: null;
  previous: null;
  results: SingleOrderResponse[];
}

export interface SingleOrderResponse {
  id: number;
  user: number;
  time: string;
  date: string;
  address: string;
  description: string;
  brand: string;
  status: string;
  service_type: string;
  service: string;
}

const fetchOrders = async ({ pageParam = 1 }) => {
  const data = await request.private
    .get<OrderlistResponse>(`/order/?limit=3&page=${pageParam}`)
    .then((res) => res.data);
  return {
    results: data.results,
    nextPage: pageParam + 1,
    totalPages: Math.ceil(Number(data?.count) / 3),
  };
};

export const useOrders = () =>
  useInfiniteQuery("orders", fetchOrders, {
    getNextPageParam(lastPage) {
      if (lastPage.nextPage <= lastPage.totalPages) return lastPage.nextPage;
      return undefined;
    },
  });
