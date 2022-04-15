import { useQuery } from "react-query";
import { request } from "../api";

interface BlogImagesInterface {
  id: number;
  blog: number;
  image: {
    id: number;
    file: string;
    thumbnail_150: string;
  };
}

export const useGetBlogImages = () =>
  useQuery("profile", () =>
    request.private
      .get<BlogImagesInterface[]>("/blog-images/")
      .then((res) => res.data)
  );
