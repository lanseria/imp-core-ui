import { modulePrefix } from "../config";
const prefix = `${modulePrefix}/file`;

const api = {
  id: prefix,
  page: `${prefix}/page`,
  file: prefix,
  postFileUploadAvatar: `${prefix}/upload/avatar` // GET
};

export { api };
