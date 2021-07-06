import { modulePrefix } from "../config";
const prefix = `${modulePrefix}/dict`;

const api = {
  dict: `${prefix}`,
  dictPage: `${prefix}/page`,
  createDict: `${prefix}/create`,
  updateDict: `${prefix}/update`,
  deleteDict: `${prefix}/delete`,
  getChild: `${prefix}/child`,
  delChild: `${prefix}/child/delete`,
  createChild: `${prefix}/child/create`,
  updateChild: `${prefix}/child/update`,
  getDictAllMap: `${prefix}/get_all_map` // GET
};

export { api };
