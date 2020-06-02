import { AuthModule } from "./index";

const getOAuthToken = (state: AuthModule) => state.authToken;
const getFakeLogin = (state: AuthModule) => state.fakeLogin;

export default {
  getOAuthToken,
  getFakeLogin
};
