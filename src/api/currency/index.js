import Endpoints from "../endpoints";
import { axiosInstance } from "../instance";

export const getCurrency = () =>
  axiosInstance.get(Endpoints.CURRENCY.GET_CURRENCY);
