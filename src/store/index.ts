import Vue from "vue";
import Vuex from "vuex";
import appConfig from "./modules/appConfig";
import appLoading from "./modules/loading";
import apiErrorNotificationList from "./modules/axiosError";
import authModule from "./modules/authModule";
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";
import securityOptions from "@/store/securityOptions";

const ls = new SecureLS(securityOptions);
Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    appConfig,
    appLoading,
    apiErrorNotificationList,
    authModule
  },
  plugins: [
    createPersistedState({
      paths: ["authModule", "appConfig"],
      storage: {
        getItem: key => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: key => ls.remove(key)
      }
    })
  ]
});
