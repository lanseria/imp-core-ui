export class LoginDTO implements LoginVO {
  username = "";
  password = "";
  randomStr = "";
  code = "";
}

export class SmsLoginDTO implements SmsLoginVO {
  constructor(data: SmsLoginDTO) {
    this.mobile = "SMS@" + data.mobile;
    this.code = data.code;
  }
  mobile: string;
  code: string;
}
