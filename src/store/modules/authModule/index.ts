import getters from "./getters";
import mutations from "./mutations";
import { RoleAccessLevel } from "@/types/auth";
import { FakeLogin } from "@/types/auth";

export interface AuthModule {
  authToken: string;
  fakeLogin: FakeLogin;
}

const state = {
  authToken: "",
  fakeLogin: {
    username: "Viewer",
    role: RoleAccessLevel.Viewer,
    accessToken: ""
  }
};

export default {
  state,
  getters,
  mutations
};
