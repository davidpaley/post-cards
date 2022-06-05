import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PAGE_SIZE } from "../constants";
import { Post } from "../models/post.model";
import { Response } from "../models/redux.model";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    posts: builder.query<Response, number>({
      query: (pageNumber: number) =>
        `/posts?_page=${pageNumber}&_limit=${PAGE_SIZE}`,
      transformResponse(apiResponse: Post[], meta) {
        return {
          apiResponse: apiResponse,
          total: parseInt(meta?.response?.headers.get("x-total-count") || ""),
        };
      },
    }),
  }),
});

export const { usePostsQuery } = postsApi;
