import { Dictionary } from "lodash";

export const requestTimeout = 30000;
export const requestBaseURL = "/api";

export const noAuthMeta = {
  keepAlive: false,
  isAuth: false
};
export const hadAuthMeta = {
  keepAlive: false,
  isAuth: true
};

export const hadAuthMetaFunc = (
  obj: Dictionary<string | number | boolean>
) => ({
  keepAlive: false,
  isAuth: true,
  ...obj
});
