import axios from "axios";
import qs from "qs";
import { getUserToken } from "/@/utils/auth";
import { requestTimeout, requestBaseURL } from "./config";
import { useUserStore } from "../store/modules/user";
import { router } from "./index";

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
    if (userToken?.access_token) {
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
    const userStore = useUserStore();
    const showNotification = (msg: string) => {
      try {
        window.$notification.warning({
          content: "提醒",
          meta: msg,
          duration: 2000
        });
      } catch (err) {
        console.warn(msg, err);
      }
    };
    const clearInfoToLogin = () => {
      userStore.logout(router.currentRoute.value.fullPath);
    };
    const build500ErrorMsg = (msg: string) => {
      if (msg === undefined) {
        console.log("发生空指针");
        return "服务器出了点小差";
      } else if (msg.includes("###")) {
        console.log(msg);
        return "数据库查询发生错误, 请查看控制台";
      } else {
        console.log(msg);
        return msg;
      }
    };
    const status = res.status.toString();
    const resData = res.data;
    const errorCode = {
      // 4dd
      "401": "当前操作没有权限或者登入过期",
      "403": "当前操作没有权限",
      "417": "未绑定登录账号，请使用密码登录后绑定",
      "426": "用户名不存在或密码错误",
      "428": "验证码错误,请重新输入",
      "429": "请求过频繁",
      // 5dd
      // "500": "服务器启动中",
      "501": "服务器启动中",
      "502": "服务器维护中",
      "503": "服务器维护中"
    };

    type ErrorCode = typeof errorCode;

    type ErrorCodeKey = keyof ErrorCode;

    function getErrorCode(name: string, msg = ""): string {
      return errorCode[name as ErrorCodeKey] || msg;
    }
    // debugger;
    if (/4\d\d/.test(status)) {
      const msg = getErrorCode(status);
      // 除了验证400以外的全部报错
      if (msg) {
        clearInfoToLogin();
        showNotification(msg);
        throw Error(msg);
      } else {
        if (status == "404") {
          showNotification("找不到资源");
        } else {
          // 显示验证错误信息
          showNotification(resData.msg);
        }
        return resData;
      }
    } else if (/5\d\d/.test(status)) {
      const msg = getErrorCode(status);
      // 除了验证500以外的全部报错
      if (msg) {
        showNotification(msg);
        if (process.env.NODE_ENV !== "development") {
          clearInfoToLogin();
        }
      } else {
        showNotification(build500ErrorMsg(resData.msg));
      }
      throw Error(msg);
    } else {
      return resData;
    }
  },
  error => {
    // 处理其他异常
    return Promise.reject(new Error(error));
  }
);

export default request;
