const loginRules = {
  username: {
    required: true,
    message: "请输入账号",
    trigger: ["blur"]
  },
  password: {
    required: true,
    message: "请输入密码",
    trigger: ["blur"]
  },
  code: {
    required: true,
    message: "请输入验证码",
    trigger: ["blur"]
  }
};

const registerRules = {
  mobile: {
    required: true,
    message: "请输入手机号",
    trigger: ["blur"]
  },
  code: {
    required: true,
    message: "请输入验证码",
    trigger: ["blur"]
  }
};

export { loginRules, registerRules };
