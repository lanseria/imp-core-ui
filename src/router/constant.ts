export const REDIRECT_NAME = "Redirect";
export const ERROR_NAME = "ErrorPage";
export const LOGIN_NAME = "Login";
export const ROOT_NAME = "Root";
export const REGISTER_NAME = "Register";
export const DASHBOARD_NAME = "Dashboard";
export const CENTER_NAME = "Center";

export const PARENT_LAYOUT_NAME = "ParentLayout";

export const EXCEPTION_COMPONENT = () =>
  import("/@/views/pages/exception/Exception.vue");

/**
 * @description: default layout
 */
export const LAYOUT = () => import("/@/views/layouts/default/index.vue");

/**
 * @description: parent-layout
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getParentLayout = (_name?: string) => {
  return () =>
    new Promise(resolve => {
      resolve({
        name: PARENT_LAYOUT_NAME
      });
    });
};
