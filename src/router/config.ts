import type { Dictionary } from "lodash";

export const requestTimeout = 30000;
export const requestBaseURL =
  (import.meta.env.VITE_USE_MOCK as unknown as string) === "true"
    ? "/basic-api"
    : "/api";

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
