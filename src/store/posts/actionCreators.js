import api from "../../api";
import {
  postsStart,
  postsSuccess,
  postsByIdStart,
  postsByIdSuccess,
  postUpdatetart,
  postUpdateSuccess,
  postUpdateFailure,
  postCreateStart,
  postCreateSuccess,
  postCreateFailure,
} from "./postsReducer";

export const getAllPosts = (page, size) => async (dispatch) => {
  try {
    dispatch(postsStart());
    const res = await api.posts.getAllPosts(page, size);
    dispatch(postsSuccess(res));
  } catch (error) {
    console.log(error);
  }
};
export const getByIdPost = (id) => async (dispatch) => {
  try {
    dispatch(postsByIdStart());
    const res = await api.posts.getByIdPost(id);
    dispatch(postsByIdSuccess(res));
  } catch (error) {
    console.log(error);
  }
};
export const updatePost = (data, onSuccess, onFailure) => async (dispatch) => {
  try {
    dispatch(postUpdatetart());
    const res = await api.posts.updatePost(data.id, data);
    dispatch(postUpdateSuccess(res));
    onSuccess();
  } catch (error) {
    onFailure(error);
    dispatch(postUpdateFailure(error.massage));
  }
};
export const createPost = (data, onSuccess, onFailure) => async (dispatch) => {
  console.log("Data", data);
  try {
    dispatch(postCreateStart());
    const res = await api.posts.createPost(data);
    dispatch(postCreateSuccess(res));
    onSuccess(res.data.id);
  } catch (error) {
    console.log(error);
    onFailure(error);
    dispatch(postCreateFailure(error.massage));
  }
};

// export const deleteReviews = (id, onSuccess, onFailure) => async (dispatch) => {
//   try {
//     dispatch(deleteReviewsSuccess());
//     const res = await api.auth.deleteReviews(id);
//     dispatch(deleteReviewsStart(res));
//     onSuccess();
//   } catch (error) {
//     onFailure(error.massage);
//     dispatch(deleteReviewsFailure(error.massage));
//   }
// };
