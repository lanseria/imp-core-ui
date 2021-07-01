export const authMetaFunc = (title: string, obj?: IObj) => ({
  isAuth: true,
  title,
  ...obj
});

export const noAuthMetaFunc = (title: string, obj?: IObj) => ({
  isAuth: false,
  title,
  ...obj
});
