// Interface data format used to return a unified format

export function resultSuccess<T = Recordable>(result: T) {
  return {
    code: 0,
    data: result
  };
}

export function resultError(
  message = "Request failed",
  { code = -1, result = null } = {}
) {
  return {
    code,
    result,
    message,
    type: "error"
  };
}

export interface requestParams {
  method: string;
  body: any;
  headers?: { authorization?: string };
  query: any;
}

/**
 * @description 本函数用于从request数据中获取token，请根据项目的实际情况修改
 *
 */
export function getRequestToken({
  headers
}: requestParams): string | undefined {
  return headers?.authorization;
}
