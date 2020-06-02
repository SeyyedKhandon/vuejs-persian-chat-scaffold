import getters from "./getters";
import mutations from "./mutations";

export interface AppLoading {
  loading: boolean;
}

const state = {
  loading: false
};

export default {
  state,
  getters,
  mutations
};
