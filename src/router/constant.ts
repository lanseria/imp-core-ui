export const REDIRECT_NAME = "Redirect";

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
