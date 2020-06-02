import axios from "axios";
import { getEndPoints } from "@/api/api_helper/EndPointHelper";
import {
  onRequestFulfilled,
  onRequestRejected,
  onResponseFulfilled,
  onResponseRejected
} from "@/api/api_helper/service/serviceHandler";

// create a raw axios instance which doesn't have any interceptor handler by default
export const rawService = axios.create({
  baseURL: getEndPoints().hostUri,
  headers: {
    get: {
      // can be common or any other method
      "Accept-Language": "fa-IR"
    },
    post: {
      "Accept-Language": "fa-IR"
    }
  }
  // timeout: 20000
});

// create an axios instance
const service = axios.create({
  baseURL: getEndPoints().hostUri
  // timeout: 10000
});
service.interceptors.request.use(onRequestFulfilled, onRequestRejected);
service.interceptors.response.use(onResponseFulfilled, onResponseRejected);

export default service;
