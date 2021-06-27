const prefix = "/auth";

const api = {
  login: `${prefix}/oauth/token`, // POST
  smsLogin: `${prefix}/mobile/token/sms`, // POST
  logout: `${prefix}/token/logout`
};

const initalHeader = {
  Authorization: "Basic Z2RzOmdkcw=="
};

/**
 * 登录初始其他数据
 * @param grantType default: password, mobile
 * @param scope default: server
 */
type GrantType = "password" | "mobile";
const initalAppendForm = (
  grantType: GrantType = "password"
  // scope = "server"
) => {
  return {
    grant_type: grantType
    // scope
  };
};

export { api, initalHeader, initalAppendForm };
