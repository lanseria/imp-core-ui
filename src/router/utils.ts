import { loginRoutePath } from "/@/const/path";
import store from "/@/store";
import { ActionTypes } from "/@/store/modules/user/action-types";
import { ElNotification } from "element-plus";
import { router } from "./index";

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

const showNotification = (message: string) => {
  ElNotification({
    type: "warning",
    title: "错误",
    message
  });
};
/**
 * 清除用户信息并请用户去登录
 */
const clearInfoToLogin = async () => {
  await store.dispatch(ActionTypes.CLEAR_ALL_USER_INFORMATION);
  router.push({
    path: loginRoutePath
  });
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

export const processResponseData = (
  status: string,
  resData: R<IObj>,
  rTrue: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): any => {
  if (/4\d\d/.test(status)) {
    const msg = getErrorCode(status);
    // 除了验证400以外的全部报错
    if (msg) {
      showNotification(msg);
      clearInfoToLogin();
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
    if (rTrue) {
      clearInfoToLogin();
    }
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
};

export { getErrorCode, ErrorCodeKey };
