// import store from "@/store";
// import { OAuthProvider, OAuthToken } from "@/types/api";
// import axios from "axios";
// import queryString from "query-string";
//
// const makeRefreshTokenURL = (resource_id: string) =>
//   `/authentication-server/oauth/token?resourceId=${resource_id}`;
// const createRefreshTokenBody = (refresh_token: string) =>
//   queryString.stringify({
//     grant_type: "refresh_token",
//     scope: "any",
//     refresh_token
//   });
// const createRefreshTokenHeader = (provider: OAuthProvider) => ({
//   headers: {
//     "Content-Type": "application/x-www-form-urlencoded",
//     Authorization:
//       "Basic " + btoa(`${provider.clientId}:${provider.clientSecret}`)
//   }
// });
// export const api_refreshToken = async (errorHandler: Function) => {
//   // const old_tokenInfo = store.getters.getOAuthTokenAsObject as OAuthToken;
//   // if (!old_tokenInfo.access_token) return;
//   // const provider = JSON.parse(
//   //   store.getters.getSelectedProviderInfo
//   // ) as OAuthProvider;
//   // const uri = makeRefreshTokenURL(provider.resource);
//   // const body = makeRefreshTokenBody(old_tokenInfo.refresh_token);
//   // const header = makeRefreshTokenHeader(provider);
//   // const result: any = await axios.post(uri, body, header).catch(error => {
//   //   return new Promise((_resolve, reject) => {
//   //     errorHandler(error);
//   //     reject(error);
//   //   });
//   // });
//   // return result.data;
// };
