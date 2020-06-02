import { StoreAxiosError } from "@/store/modules/axiosError/index";

const getLastPeriodErrorHistory = (state: StoreAxiosError) =>
  state.latestErrors;
const getLastPeriodErrorStatusHistory = (state: StoreAxiosError) =>
  state.latestErrors.map(err => err.response!.status);

export default {
  getLastPeriodErrorHistory,
  getLastPeriodErrorStatusHistory
};
