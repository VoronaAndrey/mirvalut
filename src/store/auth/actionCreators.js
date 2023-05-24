import api from "../../api";
import {
  loginStart,
  loginFailure,
  loginSucess,
  logOutSucess,
} from "./authReducer";

export const loginAdmin = (data, onSuccess, onFailure) => async (dispatch) => {
  try {
    dispatch(loginStart());
    const res = await api.auth.loging(data);
    dispatch(loginSucess(res.data));
    onSuccess();
  } catch (error) {
    dispatch(loginFailure(error.massage));
    onFailure();
  }
};
export const logOutAdmin = () => async (dispatch) => {
  dispatch(logOutSucess());
};
