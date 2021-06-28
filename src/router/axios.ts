import axios from "axios";
import qs from "qs";
import { getUserToken } from "../utils/auth";
import { requestTimeout, requestBaseURL } from "./config";

const request = axios.create({
  timeout: requestTimeout,
  baseURL: requestBaseURL,
  withCredentials: true,
  validateStatus: status => {
    return status >= 200 && status <= 600; // 全部允许, 不会遇到错误就停止
  }
});

request.interceptors.request.use(
  config => {
    // 请求之前处理config
    const userToken = getUserToken();
    const isToken = (config.headers || {}).isToken === false;
    if (userToken.access_token && !isToken) {
      config.headers["Authorization"] = "Bearer " + userToken.access_token; // token
    }
    if (config.method === "get") {
      config.paramsSerializer = function (params) {
        return qs.stringify(params, { arrayFormat: "brackets" });
      };
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  res => {
    // 权限请求错误
    return res.data;
  },
  error => {
    // 处理其他异常
    return Promise.reject(new Error(error));
  }
);

export default request;
