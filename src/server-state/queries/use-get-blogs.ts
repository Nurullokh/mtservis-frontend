import { useInfiniteQuery } from "react-query";
import { request } from "../api";

interface BloglistResponse {
  count: number;
  next: null;
  previous: null;
  results: SingleBlogResponse[];
}

export interface SingleBlogResponse {
  id: number;
  title: string;
  image: {
    file: string;
    id: number;
    thumbnail_150: null;
  };
  created_at: string;
}

const fetchBlogs = async ({ pageParam = 1 }) => {
  const data = await request.private
    .get<BloglistResponse>(`/blog/?limit=3&page=${pageParam}`)
    .then((res) => res.data);
  return {
    results: data.results,
    nextPage: pageParam + 1,
    totalPages: Math.ceil(Number(data?.count) / 3),
  };
};

export const useGetBlogs = () =>
  useInfiniteQuery("blogs", fetchBlogs, {
    getNextPageParam(lastPage) {
      if (lastPage.nextPage <= lastPage.totalPages) return lastPage.nextPage;
      return undefined;
    },
  });
