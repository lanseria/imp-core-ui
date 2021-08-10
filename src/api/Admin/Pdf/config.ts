import { modulePrefix } from "../config";
const prefix = `${modulePrefix}/pdf`;

const api = {
  pdfPage: `${prefix}/page`, // GET
  pdfDetail: `${prefix}/detail`, // GET
  pdfDelete: `${prefix}/delete`, // GET
  pdfAnnotationDelete: `${prefix}/delete/annotation`, // GET
  pdfContent: `${prefix}/page/content`, // GET
  pdfAnnotate: `${prefix}/my_endorsements`, // GET
  uploadAnnotation: `${prefix}/upload/annotation` // GET
};

export { api };
