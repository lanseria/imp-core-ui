interface PdfAnnotateVO {
  id: number;
  content: string;
  createTime: string;
  isShared: string;
  pageNumber: number;
  relationId: number;
  remarks: string;
  realName: string;
  reviewUrl: string;
  userId: number;
}

interface PdfPageVO {
  cover: string;
  createTime: string;
  delFlag: string;
  id: number;
  isComment: string;
  name: string;
  pageNumber: number;
  previewUrl: string;
  updateTime: string;
  url: string;
  userId: number;
}

interface PaintState {
  size: number;
  color: string;
}

interface TextState {
  size: number;
  color: string;
  family: string;
}

interface TextAreaItemVO {
  id: string;
  x: number;
  y: number;
  text: string;
}
