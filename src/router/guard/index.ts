import { router } from "/@/router";

import { createPermissionGuard } from "./permissionGuard";

export function setupRouterGuard() {
  createPermissionGuard(router);
}
