import store from "@/store";
import { computed } from "@vue/composition-api";

export const useLoading = () => {
  const setLoading = (state = true) => () => store.commit("setLoading", state);
  const showLoading = setLoading(true);
  const hideLoading = setLoading(false);
  const loadingState = computed(() => store.getters.getLoading);
  return { loadingState, setLoading, showLoading, hideLoading };
};
