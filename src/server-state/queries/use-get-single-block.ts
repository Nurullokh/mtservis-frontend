import { useQuery } from "react-query";
import { request } from "../api";

interface SingleBlockInterface {
  id: number;
  title: string;
  description: string;
  image: {
    file: string;
    id: number;
    thumbnail_150: string;
  };
  blog_images: [];
  share_url: string;
  created_at: string;
}

export const useGetSingleBlock = (id: string) =>
  useQuery(["blog", id], () =>
    request.private
      .get<SingleBlockInterface>(`/blog/${id}/`)
      .then((res) => res.data)
  );
