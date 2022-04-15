import axios, { AxiosError } from "axios";
import { getStorage } from "../utils/local-storage";

// const request = axios.create({
//   baseURL: process.env.REACT_APP_BASE_URL,
// });

const request = {
  private: axios.create({ baseURL: process.env.REACT_APP_BASE_URL }),
  public: axios.create({ baseURL: process.env.REACT_APP_BASE_URL }),
};

request.private.interceptors.request.use(
  (config) => {
    const accessToken = getStorage("accessToken");
    const language = getStorage("i18nextLng");
    if (accessToken) {
      if (config.headers) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      config.headers = { ...config.headers, "Accept-Language": language };
    }

    return config;
  },
  (error) => Promise.reject(error)
);

request.private.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => Promise.reject(error)
);

request.public.interceptors.request.use(
  (config) => {
    const language = getStorage("i18nextLng");

    config.headers = { ...config.headers, "Accept-Language": language };

    return config;
  },

  (error) => Promise.reject(error)
);

request.public.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => Promise.reject(error)
);

export { request };
