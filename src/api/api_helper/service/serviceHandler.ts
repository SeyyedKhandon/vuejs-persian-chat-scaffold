import NProgress from "nprogress";
import * as Interceptor from "@/api/api_helper/service/serviceInterceptor";
// import store from "@/store";
// import { api_refreshToken } from "@/api/api_refreshToken";
// import { OAuthToken } from "@/types";
// import { retryFailedOn401Request } from "@/api/api_helper/base_apis/api_utility";
const onRequestFulfilled = async (config: any) => {
  NProgress.start();
  return Interceptor.onRequestFulfilled(config);
};
const onRequestRejected = (error: any) => Promise.reject(error);
const onResponseFulfilled = (response: any) => {
  NProgress.done();
  // store.commit("setLoading", false);
  return response;
};
const onResponseRejected = async (error: any) => {
  NProgress.done();
  // const { config, response } = error;
  // if (response && response.status === 401) {
  //   const token: OAuthToken = await api_refreshToken(
  //     Interceptor.onResponseRejected
  //   );
  //   if (token.access_token) {
  //     store.commit("setOAuthToken", JSON.stringify(token));
  //     return retryFailedOn401Request(
  //       token,
  //       config,
  //       () => {},
  //       Interceptor.onResponseRejected
  //     );
  //   }
  // }
  await Interceptor.onResponseRejected(error);
  return Promise.reject(error);
};

export {
  onRequestFulfilled,
  onRequestRejected,
  onResponseFulfilled,
  onResponseRejected
};
