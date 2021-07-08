import type { Router } from "vue-router";
import { LoginRoute } from "../routes";
import { getUserToken } from "/@/utils/auth";
import { useUserStore } from "/@/store/modules/user";

export function createPermissionGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    const userToken = getUserToken();
    if (userToken?.access_token) {
      // 0 进入获取用户基本信息 1 以上就跳过进入正常页面
      const userStore = useUserStore();
      if (!userStore.userLogin) {
        // 刷新页面不丢失token重新获取用户信息与菜单
        await userStore.getAll();
      }
      const redirect = to.query.redirect
        ? decodeURIComponent(to.query.redirect as string)
        : null;
      if (redirect) {
        // 跳转到目的路由
        console.log("跳转到目的路由", redirect);
        next({
          path: redirect
        });
      } else {
        next();
      }
    } else {
      const meta = to.meta || {};
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
