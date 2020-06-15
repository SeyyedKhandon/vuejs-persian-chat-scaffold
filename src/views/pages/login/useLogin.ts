import { reactive } from "@vue/composition-api";
import { i18n_t } from "@/views/components/langSwitch/useLocale";
import { isEmpty } from "ramda";
import { api_fake_login } from "@/api/api_login";
import { showErrorToast, showSuccessToast } from "@/hooks/useToastMessages";
import { FakeLogin, RoleAccessLevel } from "@/types/auth";
import store from "@/store";
import router from "@/router";
import { useOverlay } from "@/views/components/overlay/useOverlay";

// helper
function initialState() {
  return {
    errors: [] as string[],
    username: "",
    password: ""
  };
}
// main
export const useLogin = () => {
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
          router.push("/");
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
    router.push("/login");
    const { closeOverlays } = useOverlay();
    closeOverlays();
  };
  return { state, login, logout };
};
