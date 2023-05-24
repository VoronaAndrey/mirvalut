import Endpoints from "../endpoints";
import { axiosInstance } from "../instance";

export const getAllPosts = (page = 1, size = 6) =>
  axiosInstance.get(Endpoints.POSTS.GET_ALL_POST(page, size));

export const getByIdPost = (id) =>
  axiosInstance.get(Endpoints.POSTS.GET_BY_ID_POST(id));

export const updatePost = (id, data) =>
  axiosInstance.put(Endpoints.POSTS.GET_BY_ID_POST(id), { data: data });

export const createPost = (data) =>
  axiosInstance.post(Endpoints.POSTS.CREATE_POST, { data: data });

export const deleteReviews = (id) =>
  axiosInstance.delete(Endpoints.AUTH.DELETE_REVIEWS(id));
