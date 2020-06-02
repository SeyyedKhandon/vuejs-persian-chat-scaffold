import store from "@/store/index";
import router from "@/router";
import { showErrorToast } from "@/hooks/useToastMessages";
// import { api_logout } from "@/api/api_logout";
import { AxiosError } from "axios";
import { OAuthProvider, OAuthToken } from "@/types/auth";
import { i18n } from "@/hooks/locales/useLocale";

// Axios onRequestFulfilled
export const onRequestFulfilled = (config: any) => {
  const addHeader = (key: string, value: string) =>
    (config.headers[key] = value);
  const addHeaders = (headers: any) =>
    (config.headers = { ...config.headers, ...headers });
  const addDefaultHeader = () =>
    addHeaders({
      "Accept-Language": store.getters.getLanguage,
      "Content-Type": "application/json"
    });
  const addLoginPageHeaders = () => {
    try {
      let provider = store.getters.getSelectedProviderInfo;
      if (provider) {
        provider = JSON.parse(provider) as OAuthProvider;
        const basic_authorization =
          "Basic " + btoa(`${provider.clientId}:${provider.clientSecret}`);
        addHeaders({
          Authorization: basic_authorization,
          "Content-Type": "application/x-www-form-urlencoded"
        });
      }
    } catch (e) {
      throw new Error(e);
    }
  };
  const getAccessToken = (token: string): string => {
    try {
      return "Bearer " + (JSON.parse(token) as OAuthToken).access_token;
    } catch (e) {
      console.log("token:" + token, "error:" + e);
      return "";
    }
  };
  const addAccessTokenToHeader = () => {
    const token = store.getters.getOAuthToken;
    if (token) {
      addHeader("Authorization", getAccessToken(token));
    }
  };
  const requestHandler = () => {
    addDefaultHeader();
    switch (location.pathname) {
      case "/login":
        addLoginPageHeaders();
        break;
      case "/init":
        break;
      default:
        addAccessTokenToHeader();
        break;
    }
    return config;
  };
  // run the handler
  return requestHandler();
};

// Error Handlers
const isItInLastPeriodErrorHistory = (error: AxiosError) => {
  const status = error.response!.status;
  const status_history = store.getters.getLastPeriodErrorStatusHistory;
  store.dispatch("updateErrorHistory", error);
  return status_history.includes(status);
};
const regularHttpErrorHandler = (error: AxiosError) => {
  const err_res = error.response!;
  const status = err_res.status || 0;
  const message = err_res.data
    ? err_res.data.error_description ||
      err_res.data.message ||
      err_res.statusText
    : "";
  switch (status) {
    case 510:
      router.push("/init");
      break;
    case 401:
    case 403:
      // api_logout();
      break;
    case 400:
    case 415:
    case 500:
    default:
      break;
  }
  return message;
};
const otherErrorHandler = (error: AxiosError) => {
  const isNetworkError = (current_message: string) =>
    error.message ? error.message : current_message;
  const message = i18n.t("data.defaultAPIErrorMessage") as string;
  return isNetworkError(message);
};

// Axios onResponseRejected
export const onResponseRejected = async (error: AxiosError) => {
  let message = "";
  if (error.response) {
    if (isItInLastPeriodErrorHistory(error)) throw error;
    message = regularHttpErrorHandler(error);
  } else {
    message = otherErrorHandler(error);
  }
  showErrorToast(message);
  throw error;
};
