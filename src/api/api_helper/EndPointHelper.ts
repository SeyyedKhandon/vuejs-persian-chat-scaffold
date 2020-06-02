import { EndPoints } from "@/types/auth";
const pathName = (): string => window.location.pathname;
const origin = (): string => window.location.origin;
const getEndPoints = (): EndPoints => ({
  apiServer: "", //process.env.VUE_APP_BASE_URI as string | any,
  testApiServer: "", //process.env.VUE_APP_TEST_BASE_URI as string | any,
  cdnServer: "", //process.env.VUE_APP_CDN_URI as string | any,
  oAuthServer: "", //process.env.VUE_APP_OAUTH_URI as string | any,
  origin: origin(),
  hostUri: origin(), //+ //process.env.VUE_APP_BASE_API like "/api/V0/panel/",
  login: origin() + "/login",
  authorizePath: "", //process.env.VUE_APP_ADFS_OAUTH2_AUTHORIZE
  authenticationPath: "", //process.env.VUE_APP_ADFS_OAUTH2_TOKEN,
  signOutPath: "", //process.env.VUE_APP_ADFS_LS_SIGN_OUT
  scope: "" //"", //process.env.VUE_APP_OPEN_ID_SCOPE
});

export { pathName, origin, getEndPoints };
