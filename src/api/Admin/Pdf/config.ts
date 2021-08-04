import { modulePrefix } from "../config";
const prefix = `${modulePrefix}/pdf`;

const api = {
  pdfPage: `${prefix}/page`, // GET
  pdfDetail: `${prefix}/detail`, // GET
  pdfContent: `${prefix}/page/content` // GET
};

export { api };
