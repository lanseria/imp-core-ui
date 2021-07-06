interface DictBaseVO {
  id: number;
  name: string;
  code: string;
}

interface AdminDictPageItemVO extends DictBaseVO {
  createTime: string;
  system: string;
  updateTime: string;
}

interface DictVO {
  id: number;
  value: string;
  label: string;
  sort: number;
  createTime: string;
  updateTime: string;
  children: DictVO[];
  //
  disabled: boolean;
}

interface DictDirectory {
  [K: string]: DictVO[];
}
