import api from "../../api";
import { userStart, userSucess, userFailure } from "./userReducer";

export const getUser = (id) => async (dispatch) => {
  try {
    dispatch(userStart());
    const res = await api.auth.getUser(id);
    dispatch(userSucess(res.data));
  } catch (error) {
    dispatch(userFailure(error.massage));
  }
};
