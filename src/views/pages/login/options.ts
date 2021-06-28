const rules = {
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

export { rules };
