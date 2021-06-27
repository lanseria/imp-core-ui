import type { Router } from "vue-router";
// import { useStore } from "/@/store";
import { LoginRoute } from "../routes";
import { getToken } from "/@/utils/auth";
import { isNil } from "lodash";
import { useUserStore } from "/@/store/modules/user";

export function createPermissionGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    debugger;
    const meta = to.meta || {};
    const token = getToken();
    if (token) {
      if (to.name === LoginRoute.name) {
        next("/");
      } else {
        // 0 进入获取用户基本信息 1 以上就跳过进入正常页面
        const userStore = useUserStore();
        if (isNil(userStore.getRoles) || userStore.getRoles.length === 0) {
          try {
            // 刷新页面不丢失token重新获取用户信息与菜单
            await userStore.userInfo();
            const redirect = decodeURIComponent(
              (from.query.redirect as string) || to.path
            );
            if (to.name === redirect) {
              // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
              next({ ...to, replace: true });
            } else {
              // 跳转到目的路由
              console.log("跳转到目的路由");
              next(redirect);
            }
          } catch (error) {
            console.log("跳出info错误");
            console.error(error);
            await userStore.logout();
            next();
          }
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
