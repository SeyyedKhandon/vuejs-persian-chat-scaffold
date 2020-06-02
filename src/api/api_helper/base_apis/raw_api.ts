import { rawService } from "@/api/api_helper/service/service";
import { getEndPoints } from "@/api/api_helper/EndPointHelper";

/*
 * raw Services which doesn't have any interceptor handler by default
 * */

export const rawGetServiceWithoutDefaultBaseURL = async (
  base_url: string,
  url: string
) => {
  let result = await rawService({
    method: "get",
    baseURL: base_url,
    url,
    data: {}
  });
  return result.data;
};
export const rawGetService = async (url: string) => {
  let result = await rawService({
    method: "get",
    baseURL: getEndPoints().hostUri,
    url,
    data: {}
  });
  return result.data;
};

export const rawPostService = async (url: string, data: any) => {
  let result = await rawService({
    method: "post",
    baseURL: getEndPoints().hostUri,
    url,
    data
  });
  return result.data;
};
