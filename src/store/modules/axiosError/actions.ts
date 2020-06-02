import { AxiosError } from "axios";
import { ActionContext } from "vuex";

const updateErrorHistory = (
  context: ActionContext<string, AxiosError>,
  error: AxiosError
) => {
  context.commit("addErrorToHistory", error);
  setTimeout(() => {
    context.commit("removeErrorHistory");
  }, 1500);
};
export default {
  updateErrorHistory
};
