import { reactive, SetupContext } from "@vue/composition-api";
import { i18n_t } from "@/hooks/locales/useLocale";
import { isEmpty } from "ramda";
import { api_fake_login } from "@/api/api_login";
import { showErrorToast, showSuccessToast } from "@/hooks/useToastMessages";
import { FakeLogin, RoleAccessLevel } from "@/types/auth";
import store from "@/store";

// helper
function initialState() {
  return {
    errors: [] as string[],
    username: "",
    password: ""
  };
}
// main
export const useLogin = (context: SetupContext) => {
  const state = reactive(initialState());
  const hasError = () => {
    state.errors = [];
    if (!state.username) {
      state.errors.push(i18n_t("data.login.errors.username"));
    }
    if (!state.password) {
      state.errors.push(i18n_t("data.login.errors.password"));
    }
    return isEmpty(state.errors);
  };
  const login = () => {
    if (hasError())
      api_fake_login(state.username, state.password)
        .then((res: FakeLogin) => {
          showSuccessToast(JSON.stringify(res));
          store.commit("setFakeLogin", res);
          // console.log(router);
          context.root.$router.push("/");
        })
        .catch((err: { error: string }) => {
          showErrorToast(err.error);
        });
  };
  const logout = () => {
    store.commit("setFakeLogin", {
      username: "Viewer",
      role: RoleAccessLevel.Viewer,
      accessToken: ""
    });
    context.root.$router.push("/login");
  };
  return { state, login, logout };
};
