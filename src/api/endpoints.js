const api = "http://localhost:8080/api/";
const Endpoints = {
  POSTS: {
    GET_ALL_POST: (page, size) => `${api}newsposts?page=${page}&size=${size}`,
    GET_BY_ID_POST: (id) => `${api}newsposts/${id}`,
    CREATE_POST: `${api}newsposts/`,
    UPDATE_POST: (id) => `${api}newsposts/${id}`,
    DELETE_REVIEWS: (id) => `${api}reviews/delete/${id}`,
    REVIEWS: (page, limit) => `${api}reviews/${page}&${limit}`,
  },
  CURRENCY: {
    GET_CURRENCY:
      "https://mirvalut.com/%D0%B2%D1%81%D0%B5-%D0%B2%D0%B0%D0%BB%D1%8E%D1%82%D1%8B",
  },
};
export default Endpoints;
