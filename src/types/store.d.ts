interface UserTokenVO {
  access_token: string;
  active: boolean;
  expires_in: number;
  license: string;
  org_id: number;
  real_name: string;
  refresh_token: string;
  safe_password: string;
  scope: string;
  tenant_id: number;
  token_type: string;
  user_id: number;
  username: string;
}

interface OrgDictItemVO {
  orgId: number;
  name: string;
  abrName?: string;
  dueDate?: string;
  isMailList?: boolean;
  type?: number;
  userId?: number;
}

interface UserInfoVO {
  assetOrg: number;
  avatar: string;
  createTime: string;
  deptId: number;
  isAdmin: number;
  lockFlag: string;
  orgId: number;
  orgLogo: string;
  orgName: string;
  password: string;
  phone: string;
  qqOpenid: string;
  realName: string;
  safePassword: string;
  tenantId: number;
  updateTime: string;
  userId: number;
  username: string;
  weCanSecret: string;
  wxUnionid: string;
  // 0已办理人力入职 1未办理入职
  handle: string;
}

interface UserInfoLoginVO {
  authentication: boolean;
  identity: string;
  // TODO: 需要优化{id,name}
  orgs: OrgDictItemVO[];
  permissions: string[];
  roles: number[];
  // TODO: 改成 userInfo 字段更好
  sysUser: UserInfoVO;
}
