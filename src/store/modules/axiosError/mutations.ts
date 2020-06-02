import { StoreAxiosError } from "@/store/modules/axiosError/index";
import { AxiosError } from "axios";

const addErrorToHistory = (state: StoreAxiosError, data: AxiosError) =>
  state.latestErrors.push(data);
const removeErrorHistory = (state: StoreAxiosError) =>
  (state.latestErrors = []);

export default {
  addErrorToHistory,
  removeErrorHistory
};
