import { i18n_t } from "./locales/useLocale";
import Swal, { SweetAlertIcon } from "sweetalert2";

export const notSavedChangesAlert = (message = "") => {
  return Swal.fire({
    title: i18n_t("data.toastMessages.notSavedChanges.title") as string,
    text: message || i18n_t("data.toastMessages.notSavedChanges.text"),
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: i18n_t("toastMessages.notSavedChanges.confirm"),
    cancelButtonText: i18n_t("data.toastMessages.notSavedChanges.cancel"),
    confirmButtonColor: "#d33",
    focusConfirm: true
  } as any);
};
export const deleteRequestAlert = (title: string, item_label: string) => {
  return Swal.fire({
    title: i18n_t("data.toastMessages.deleteRequest.title", {
      msg: title
    }),
    text: i18n_t("data.toastMessages.deleteRequest.text", {
      title,
      item_label
    }),
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: i18n_t("data.toastMessages.deleteRequest.confirm"),
    cancelButtonText: i18n_t("data.toastMessages.deleteRequest.cancel"),
    confirmButtonColor: "#d33",
    focusConfirm: true
  });
};
export const deleteResponseAlert = (
  title: string = i18n_t("data.toastMessages.deleteResponse.title"),
  text: string,
  icon: SweetAlertIcon,
  timer: number
) => {
  return Swal.fire({
    title,
    text,
    icon,
    timer,
    confirmButtonText: i18n_t("data.toastMessages.deleteResponse.confirm")
  });
};

export const useAlerts = () => ({
  notSavedChangesAlert,
  deleteRequestAlert,
  deleteResponseAlert
});
