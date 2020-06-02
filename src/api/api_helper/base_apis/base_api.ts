import service from "@/api/api_helper/service/service";
import { Pagination } from "@/types/auth";
import querystring from "query-string";
import {
  deleteConfig,
  getConfig,
  postConfig
} from "@/api/api_helper/base_apis/api_utility";

/*
 * Get Services
 * */

export const getService = async (url: string) => {
  const result = await service(getConfig(url));
  return result.data;
};
export const getItem = getService;
export const getItems = (
  url: string,
  pagination: Pagination = { page: 1, size: 15 },
  sort_label = ""
) => {
  return getService(url + "?" + querystring.stringify(pagination) + sort_label);
};

/*
 * Post Services
 * */
export const postService = async (url: string, data: object | string = {}) => {
  const result = await service(postConfig(url, data));
  return result.data;
};
export const postItem = postService;

/*
 * Delete Services
 * */
export const deleteService = async (url: string) => {
  const result = await service(deleteConfig(url));
  return result.data;
};

export const deleteItem = deleteService;
