import { AuthModule } from "@/store/modules/authModule/index";
import { FakeLogin } from "@/types/auth";

const setOAuthToken = (state: AuthModule, data: string) =>
  (state.authToken = data);
const setFakeLogin = (state: AuthModule, data: FakeLogin) =>
  (state.fakeLogin = data);

export default {
  setOAuthToken,
  setFakeLogin
};
