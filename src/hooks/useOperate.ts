interface OperateRequest {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (id: any): Promise<R<boolean>>;
}

interface LoadPage {
  (): Promise<void> | void;
}

export const useIepOperate = () => {
  /**
   * 单个操作函数
   * @param id 操作ID
   * @param reqFunction 操作函数
   * @param loadPage 回调函数
   * @param msg 操作名称
   * @param detailMsg 操作语重写
   * @param feedbackMsg 成功重写
   */
  const handleIepOperate = async (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    id: any,
    reqFunction: OperateRequest,
    loadPage: LoadPage,
    msg: string,
    detailMsg?: string,
    feedbackMsg?: string
  ) => {
    window.$dialog.warning({
      title: "提示",
      content: detailMsg || `是否${msg}`,
      positiveText: "确定",
      negativeText: "不确定",
      onPositiveClick: async () => {
        const { data, msg: message } = await reqFunction(id);
        if (data) {
          window.$message.success(feedbackMsg || `${msg}成功!`);
          loadPage();
        } else {
          window.$message.warning(message);
        }
      },
      onNegativeClick: () => {
        window.$message.error("不确定");
      }
    });
  };
  return {
    handleIepOperate
  };
};
