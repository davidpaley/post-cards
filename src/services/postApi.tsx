import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Post } from "../models/post.model";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    posts: builder.query<{ apiResponse: Post[]; total: number }, void>({
      query: () => "/posts?_page=1&_limit=50",
      transformResponse(apiResponse: Post[], meta) {
        console.log({
          totalElements: meta?.response?.headers.get("x-total-count"),
        });
        return {
          apiResponse: apiResponse,
          total: parseInt(meta?.response?.headers.get("x-total-count") || ""),
        };
      },
    }),
  }),
});

export const { usePostsQuery } = postsApi;
