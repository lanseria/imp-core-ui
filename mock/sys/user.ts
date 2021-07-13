import { MockMethod } from "vite-plugin-mock";
import {
  resultError,
  resultSuccess,
  getRequestToken,
  requestParams
} from "../_util";

export default [
  // mock user login
  {
    url: "/basic-api/auth/oauth/token",
    timeout: 200,
    method: "post",
    response: () => {
      return {
        access_token: "2e15a3dd-9c84-46a9-b5ce-d57b86f6a0df",
        token_type: "bearer",
        refresh_token: "f0e61b0e-3a59-445b-ac3a-829f04176963",
        expires_in: 83866,
        scope: "server",
        tenant_id: 1,
        license: "made by gds",
        user_id: 1,
        org_id: 1,
        active: true,
        real_name: "超级管理员",
        dept_id: 37,
        safe_password:
          "$2a$10$HWeZtshjw0JpzDGHDSH11u9mEjL6o/ZQcHdjVr1bFd5w63bCiEIkW",
        username: "admin"
      };
    }
  },
  {
    url: "/basic-api/admin/user/info",
    method: "get",
    response: (request: requestParams) => {
      const token = getRequestToken(request);
      if (!token) return resultError("Invalid token");

      return resultSuccess({
        sysUser: {
          userId: 1,
          username: "admin",
          realName: "超级管理员",
          password:
            "$2a$10$XUIezvf0xItYKMBiRYlWxOHy28juoce0gmNlXf6otMeLn6tKRKhTS",
          safePassword:
            "$2a$10$HWeZtshjw0JpzDGHDSH11u9mEjL6o/ZQcHdjVr1bFd5w63bCiEIkW",
          createTime: "2018-04-24 11:15:18",
          updateTime: "2021-01-28 14:53:51",
          delFlag: "0",
          lockFlag: "0",
          avatar:
            "http://183.131.134.242:1889/files/20210423/8f36c71800d347f1991472d8e8ca3883.jpg",
          phone: "15858832226",
          orgId: 1,
          orgName: "智慧赋能体验中心",
          orgLogo:
            "http://183.131.134.242:1889/files/20210423/511c625bfc95434890cd191ba15108f9.jpeg",
          deptId: 37,
          tenantId: 1,
          wxUnionid: "",
          qqOpenid: "",
          assetOrg: 1,
          weCanSecret:
            "9d696a8ba5c0473c8792d7d4fc707581d9287dc930da419d8f995c938d34d96f",
          isAdmin: 1,
          handle: "0"
        },
        permissions: [
          "products/product_modules:aut",
          "platforms/roles:del",
          "operation_team/role:edit",
          "products/technology_applications:edit",
          "projects/old/registration:aud",
          "team_management/roles:aut",
          "system_operation/key:del",
          "system_operation/key:edit",
          "system_operation/terminal:add",
          "system_operation/system_log:del",
          "manpower/manpower_pages/dept:del",
          "products/product_modules:aud",
          "products/combination_system:add",
          "permission_system/user:del",
          "system_operation/terminal:del",
          "team_management/members:add",
          "manpower/team_management/roles:aut",
          "system_operation/token:del",
          "products/combination_system:edit",
          "permission_system/role:del",
          "products/combination_system:aud",
          "organization/permission/role:edit",
          "platforms/roles:add",
          "operation_team/role:per",
          "team_management/roles:edit",
          "platforms/roles:per",
          "system_operation/token:page",
          "operation_team/role:add",
          "organization/permission/role:del",
          "manpower/team_management/roles:del",
          "system_operation/param:add",
          "products/combination_system:aut",
          "permission_system/user:page",
          "system_operation/param:del",
          "system_operation/terminal:edit",
          "permission_system/user:add",
          "operation_team/role:del",
          "organization/permission/role:per",
          "manpower/team_management/members:add",
          "products/product_modules:edit",
          "permission_system/user:edit",
          "manpower/manpower_pages/dept:edit",
          "permission_system/role:edit",
          "manpower/team_management/roles:edit",
          "manpower/team_management/roles:per",
          "organization/permission/role:add",
          "permission_system/menu:add",
          "operation_team/role:aut",
          "permission_system/menu:edit",
          "products/product_modules:del",
          "permission_system/role:add",
          "permission_system/role:per",
          "products/technology_applications:add",
          "permission_system/menu:del",
          "products/product_modules:add",
          "organization/permission/role:aut",
          "team_management/roles:per",
          "platforms/roles:edit",
          "products/technology_applications:del",
          "system_operation/key:add",
          "team_management/roles:del",
          "system_operation/param:edit",
          "permission_system/role:aut",
          "products/combination_system:del",
          "system_operation/key:page"
        ],
        roles: [1, 2, 3, 15],
        orgs: [
          { orgId: 1, name: "智慧赋能体验中心" },
          { orgId: 2, name: "上海康泰商贸有限公司" },
          { orgId: 3, name: "广州博康电子设备有限公司" },
          { orgId: 4, name: "香港捷达进出口有限公司" },
          { orgId: 5, name: "深圳十达通讯客户服务中心" },
          { orgId: 17, name: "大数据实践组织" },
          { orgId: 24, name: "衡阳爱消费数据科技有限责任公司" },
          { orgId: 25, name: "仙桃大数据学院" },
          { orgId: 27, name: "中通服建设研究院" },
          { orgId: 28, name: "飞花" }
        ],
        identity: "管理员",
        authentication: false
      });
    }
  },
  {
    url: "/basic-api/auth/token/logout",
    timeout: 200,
    method: "DELETE",
    response: (request: requestParams) => {
      const token = getRequestToken(request);
      if (!token) return resultError("Invalid token");
      return resultSuccess(true, { message: "Token has been destroyed" });
    }
  }
] as MockMethod[];
