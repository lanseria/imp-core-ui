import { CommonDTO } from "../Common/dto";

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

export class UserDTO extends CommonDTO implements UserVO {
  userId = 0;
  username = "";
  realName = "";
  avatar = "";
  phone = "";
  birthday = "";
  signature = "";
  sex = "0";
  language = "";
  education = "";
  qq = "";
  wechat = "";
  email = "";
  emergencyName = "";
  emergencyPhone = "";
  externalTitle = "";
  home = "";
  abilityTag: string[] = [];
  projectTag: string[] = [];
  learningTag: string[] = [];
  nationality = "";
  politics = "";
  marriage = "";
  bear = "";
  idCard = "";
  accountTypeId = "";
  university = "";
  profession = "";
  graduationTime = "";
  residenceCities: number[] = [];
  residenceAddress = "";
  currentCities: number[] = [];
  currentAddress = "";
  createTime = "";
  careerPlanning = "";
  referrer = "";
  bankAccountHolder = "";
  bankAccountNumber = "";
  workExperience: IObj[] = [];
  eduSituation: IObj[] = [];
  trainingSituation: IObj[] = [];
  userCert: IObj[] = [];
}
