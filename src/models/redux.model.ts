import { Post } from "./post.model";

export interface Response {
  apiResponse: Post[];
  total: number;
}
