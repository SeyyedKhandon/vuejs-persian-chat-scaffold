import getters from "./getters";
import mutations from "./mutations";

export interface AppConfig {
  language: string;
  theme: string;
}

const state = {
  language: "en-US",
  theme: "default"
};

export default {
  state,
  getters,
  mutations
};
