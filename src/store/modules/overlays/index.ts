import getters from "./getters";
import mutations from "./mutations";

export interface AppOverlay {
  overlay: boolean;
  drawer: boolean;
  modal: boolean;
}

const state = {
  overlay: false,
  drawer: false,
  modal: false
};

export default {
  state,
  getters,
  mutations
};
