import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";
import { AxiosError } from "axios";
export interface StoreAxiosError {
  latestErrors: AxiosError[];
}
const state = {
  latestErrors: []
};

export default {
  state,
  getters,
  mutations,
  actions
};
