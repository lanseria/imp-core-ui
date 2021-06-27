class PageOptionDTO implements PageOption {
  constructor(
    option: PageOption = {
      total: 0,
      size: 10,
      current: 1
    }
  ) {
    // 用于将字符串传化为数字
    this.total = +option.total;
    this.size = +option.size;
    this.current = +option.current;
  }
  total: number;
  size: number;
  current: number;
}

class PageParamDTO implements PageParam {
  [key: string]: string | number;
  size: number;
  current: number;
  constructor(option?: IObj) {
    // 用于将字符串传化为数字
    this.size = +(option?.size ?? 10);
    this.current = +(option?.current ?? 1);
  }
}

export { PageOptionDTO, PageParamDTO };
