import { getItem, postItem } from "@/api/api_helper/base_apis/base_api";
import {
  FakeLogin,
  OAuthProvider,
  OAuthToken,
  RegularLoginType
} from "@/types/auth";
import { getEndPoints, origin } from "@/api/api_helper/EndPointHelper";
import queryString from "query-string";
import { rawPostService } from "@/api/api_helper/base_apis/raw_api";
import { RoleAccessLevel } from "@/types/auth";
import { i18n_t } from "@/hooks/locales/useLocale";
//
// export const api_fetchOauthProviders = async () => {
//   let oauth_providers = ((await getItem(
//     getEndPoints().hostUri + "oauth-provider"
//   )) as unknown) as OAuthProvider[];
//   return oauth_providers;
// };
// export const api_fetchToken = async (
//   access_token_url: string,
//   authentication_info: string
// ) => {
//   let token: OAuthToken = await rawPostService(
//     access_token_url,
//     authentication_info
//   );
//   return token;
// };
//
// const api_login_byUsernameAndPassword = async (login: RegularLoginType) => {
//   const uri =
//     origin() +
//     getEndPoints().login;
//   const login_token: OAuthToken = await postItem(
//     uri,
//     queryString.stringify({
//       username: login.username,
//       password: login.password,
//       grant_type: "password",
//       scope: "any"
//     })
//   );
//   return login_token;
// };
export const api_fake_login = (username = "", password = "") =>
  new Promise<FakeLogin>((res, rej) => {
    if (username == "admin" && password == "admin") {
      return res({
        username: "admin",
        role: RoleAccessLevel.Admin,
        accessToken:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2V4YW1wbGUuYXV0aDAuY29tLyIsImF1ZCI6Imh0dHBzOi8vYXBpLmV4YW1wbGUuY29tL2NhbGFuZGFyL3YxLyIsInN1YiI6InVzcl8xMjMiLCJpYXQiOjE0NTg3ODU3OTYsImV4cCI6MTQ1ODg3MjE5Nn0.CA7eaHjIHz5NxeIJoFK9krqaeZrPLwmMmgI_XiQiIkQ"
      });
    }
    rej({ error: i18n_t("data.login.errors.wrong_username_or_pass") });
  });
// export { api_login_byUsernameAndPassword };
