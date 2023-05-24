import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  postsData: {
    data: [],
    currentPage: 1,
    prevPage: null,
    nextPage: 2,
    totalPages: 2,
    isLoading: false,
    error: null,
  },
  currentPost: {
    createDate: new Date(),
    id: "",
    text: "",
    title: "",
    updateDate: new Date(),
  },
};
export const postsReducer = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postsStart: (state) => {
      return {
        ...state,
        postsData: {
          ...state.postsData,
          isLoading: true,
        },
      };
    },
    postsSuccess: (state, action) => {
      return {
        ...state,
        postsData: {
          ...state.postsData,
          data: action.payload.data.data,
          currentPage: action.payload.data.currentPage,
          prevPage: action.payload.data.prevPage,
          nextPage: action.payload.data.nextPage,
          totalPages: action.payload.data.totalPages,
          isLoading: false,
          error: null,
        },
      };
    },
    postsByIdStart: (state) => {
      return {
        ...state,
        currentPost: {
          ...state.currentPost,
          isLoading: true,
        },
      };
    },
    postsByIdSuccess: (state, action) => {
      return {
        ...state,
        currentPost: {
          ...state.currentPost,
          createDate: action.payload.data.createDate,
          id: action.payload.data.id,
          text: action.payload.data.text,
          title: action.payload.data.title,
          updateDate: action.payload.data.updateDate,
          isLoading: false,
          error: null,
        },
      };
    },
    postUpdatetart: (state) => {
      return {
        ...state,
        currentPost: {
          ...state.currentPost,
          isLoading: true,
        },
      };
    },
    postUpdateSuccess: (state, action) => {
      return {
        ...state,
        currentPost: {
          ...state.currentPost,
          createDate: action.payload.data.createDate,
          id: action.payload.data.id,
          text: action.payload.data.text,
          title: action.payload.data.title,
          updateDate: action.payload.data.updateDate,
          isLoading: false,
          error: null,
        },
      };
    },
    postUpdateFailure: (state, action) => {
      return {
        ...state,
        currentPost: {
          ...state.currentPost,
          isLoading: false,
          error: action.payload,
        },
      };
    },
    postCreateStart: (state) => {
      return {
        ...state,
        currentPost: {
          ...state.currentPost,
          isLoading: true,
        },
      };
    },
    postCreateSuccess: (state, action) => {
      return {
        ...state,
        currentPost: {
          ...state.currentPost,
          createDate: action.payload.data.createDate,
          id: action.payload.data.id,
          text: action.payload.data.text,
          title: action.payload.data.title,
          updateDate: action.payload.data.updateDate,
          isLoading: false,
          error: null,
        },
      };
    },
    postCreateFailure: (state, action) => {
      return {
        ...state,
        currentPost: {
          ...state.currentPost,
          isLoading: false,
          error: action.payload,
        },
      };
    },
  },

  deleteReviewsStart: (state) => {
    return {
      ...state,
      postsData: {
        ...state.postsData,
        isLoading: true,
      },
    };
  },
  deleteReviewsSuccess: (state) => {
    return {
      ...state,
      postsData: {
        ...state.postsData,
        isLoading: false,
        error: null,
      },
    };
  },
  deleteReviewsFailure: (state, action) => {
    return {
      ...state,
      postsData: {
        ...state.postsData,
        isLoading: false,
        error: action.payload,
      },
    };
  },
});

export const {
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
  reviewsFailure,
  deleteReviewsFailure,
  deleteReviewsStart,
  deleteReviewsSuccess,
} = postsReducer.actions;
export default postsReducer.reducer;
