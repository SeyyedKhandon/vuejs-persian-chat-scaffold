import Vue from "vue";
export const showToast = (
  status: string,
  message: string,
  title = "x",
  timeout = 3000
) => {
  Vue.prototype.$snotify[status](message, title, {
    timeout: timeout,
    pauseOnHover: true
  });
};
export const showSuccessToast = (message: string) => {
  showToast("success", message);
};
export const showWarningToast = (message: string) => {
  showToast("warning", message);
};
export const showErrorToast = (message: string) => {
  showToast("error", message);
};
