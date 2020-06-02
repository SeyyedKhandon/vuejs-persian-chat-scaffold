import { AppLoading } from "./index";
const setLoading = (state: AppLoading, flag: boolean) => (state.loading = flag);

export default {
  setLoading
};
