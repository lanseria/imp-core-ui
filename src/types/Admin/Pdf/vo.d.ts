interface PdfAnnotateVO {
  id: number;
  content: string;
  createTime: string;
  isShared: string;
  pageNumber: number;
  relationId: number;
  remarks: string;
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
