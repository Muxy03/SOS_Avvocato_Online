import { r as redirect } from './index-DMcSsXGi.js';

const load = ({ cookies }) => {
  if (!cookies.get("user_session")) {
    throw redirect(303, "/register");
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 2;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CuZfkyuX.js')).default;
const server_id = "src/routes/+page.server.ts";
const imports = ["_app/immutable/nodes/2.UdjRKS88.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/ByMhJ1lq.js","_app/immutable/chunks/nGUMutCJ.js","_app/immutable/chunks/BeycMaZk.js","_app/immutable/chunks/CltT4Sjb.js","_app/immutable/chunks/DjkyPSQU.js","_app/immutable/chunks/Ci16hXE_.js","_app/immutable/chunks/Bgbd2wj0.js","_app/immutable/chunks/CStty2jV.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/AhqUU1ts.js","_app/immutable/chunks/BrdxJ9sT.js","_app/immutable/chunks/Bou_iUIi.js"];
const stylesheets = ["_app/immutable/assets/2.CtS9xzIU.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=2-Fi2Selr4.js.map
