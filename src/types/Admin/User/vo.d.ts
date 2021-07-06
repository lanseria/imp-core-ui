interface LoginVO {
  username: string;
  password: string;
  randomStr: string;
  code: string;
}

interface SmsLoginVO {
  mobile: string;
  code: string;
}

interface UserVO {
  userId: number;
  username: string;
  realName: string;
  avatar: string;
  phone: string;
  birthday: string;
  signature: string;
  sex: string;
  language: string;
  education: string;
  qq: string;
  wechat: string;
  email: string;
  emergencyName: string;
  emergencyPhone: string;
  externalTitle: string;
  home: string;
  abilityTag: string[];
  projectTag: string[];
  learningTag: string[];
  nationality: string;
  politics: string;
  marriage: string;
  bear: string;
  idCard: string;
  accountTypeId: string;
  university: string;
  profession: string;
  graduationTime: string;
  residenceCities: number[];
  residenceAddress: string;
  currentCities: number[];
  currentAddress: string;
  createTime: string;
  careerPlanning: string;
  referrer: string;
  bankAccountHolder: string;
  bankAccountNumber: string;
  workExperience: IObj[];
  eduSituation: IObj[];
  trainingSituation: IObj[];
  userCert: IObj[];
}

interface UserPageItemVO {
  createTime: string;
  orgNames: IdName[];
  phone: string;
  realName: string;
  roleList: IdName[];
  userId: number;
  username: string;
}

interface AdminUserPageItemVO extends UserPageItemVO {
  assetOrgId: number;
  avatar: string;
  orgId: number;
}
