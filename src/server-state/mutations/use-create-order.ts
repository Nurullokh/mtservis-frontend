/* eslint-disable camelcase */
import { useMutation } from "react-query";
import { request } from "../api";
import { SingleOrderResponse } from "../queries/use-get-orders";

interface CreateOrdeRequest {
  brand?: number;
  date?: string;
  time?: number | string;
  address?: string;
  description?: string;
  status?: "new";
  service_type?: number;
}

export const useCreateOrder = () =>
  useMutation(
    (register: CreateOrdeRequest) =>
      request.private
        .post<SingleOrderResponse>("/order/", register)
        .then((res) => res.data),
    {
      retry: false,
    }
  );
