import axios, { AxiosError, AxiosRequestConfig, Method } from "axios";
import { getEndPoints } from "@/api/api_helper/EndPointHelper";
import { OAuthToken } from "@/types/auth";
import store from "@/store";

export const requestConfig = (method: Method, url: string, data: any = {}) => {
  return {
    method,
    url,
    data,
    baseURL: getEndPoints().hostUri
  };
};
export const getConfig = (url: string) => requestConfig("get", url, {});
export const deleteConfig = (url: string) => requestConfig("delete", url, {});
export const postConfig = (url: string, data: any) =>
  requestConfig("post", url, data);
export const retryFailedOn401Request = (
  token: OAuthToken,
  original_request: AxiosRequestConfig,
  onResponseFullFilled: Function,
  errorHandler: Function
) => {
  original_request.headers.Authorization = "Bearer " + token.access_token;
  original_request.headers["Accept-Language"] = store.getters.getLanguage;
  original_request.headers["Content-Type"] = "application/json";
  return new Promise((resolve, reject) => {
    axios
      .request(original_request)
      .then(response => {
        onResponseFullFilled();
        resolve(response);
      })
      .catch(error => {
        errorHandler(error);
        reject(error);
      });
  });
};
export const holdRequestUntilConditionIsMetAndRetryNTimesOnError = (
  request: Function,
  condition: Function,
  max_retry = 2,
  delay = 100
) => {
  let retried = 0;
  let last_error: AxiosError;
  const delayedRequest = async (...args: any): Promise<any> =>
    new Promise((resolve, reject) =>
      setTimeout(async () => {
        if (condition()) resolve(await delayedRequest(...args));
        else {
          try {
            if (retried < max_retry) {
              retried += 1;
              resolve(await request(...args));
            } else {
              reject(last_error);
            }
          } catch (e) {
            last_error = e;
            resolve(await delayedRequest(...args));
          }
        }
      }, delay)
    );
  return delayedRequest;
};
