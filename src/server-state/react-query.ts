/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { QueryClient } from "react-query";
import { logout } from "../state/auth/auth.actions";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError(err: any) {
        if (err?.response?.status === 401) {
          logout();
        }
      },
      refetchOnWindowFocus: false,
      retry: 1,
    },
    mutations: {
      onError(err: any) {
        if (err?.response?.status === 401) {
          logout();
        }
      },
      retry: 1,
    },
  },
});
