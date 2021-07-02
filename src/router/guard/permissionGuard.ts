import type { Router } from "vue-router";
// import { useStore } from "/@/store";
import { LoginRoute } from "../routes";
import { getUserToken } from "/@/utils/auth";
import { useUserStore } from "/@/store/modules/user";
import { isNil } from "lodash-es";

export function createPermissionGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    const meta = to.meta || {};
    const userToken = getUserToken();
    if (userToken?.access_token) {
      if (to.name === LoginRoute.name) {
        next("/");
      } else {
        const redirect = to.query.redirect
          ? decodeURIComponent(to.query.redirect as string)
          : null;
        // 0 进入获取用户基本信息 1 以上就跳过进入正常页面
        const userStore = useUserStore();
        if (isNil(userStore.getRoles) || userStore.getRoles.length === 0) {
          try {
            // 刷新页面不丢失token重新获取用户信息与菜单
            await userStore.getAll();
          } catch (error) {
            console.log("跳出info错误");
            console.error(error);
            await userStore.logout();
          }
        }
        if (redirect) {
          // 跳转到目的路由
          console.log("跳转到目的路由", redirect);
          next({
            path: redirect
          });
        } else {
          next();
        }
      }
    } else {
      if (!meta.isAuth) {
        next();
      } else {
        const redirect = encodeURIComponent(to.fullPath);
        next({
          name: LoginRoute.name,
          query: {
            redirect
          }
        });
      }
    }
  });
}
