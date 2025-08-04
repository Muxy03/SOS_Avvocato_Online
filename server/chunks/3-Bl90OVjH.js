import { r as redirect } from './index-DMcSsXGi.js';

const load = ({ cookies }) => {
  const cookie = cookies.get("user_session");
  if (!cookie) {
    throw redirect(303, "/register");
  } else {
    return JSON.parse(cookie);
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 3;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-B2_RwoPw.js')).default;
const server_id = "src/routes/+page.server.ts";
const imports = ["_app/immutable/nodes/3.Db4UZbGo.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/7vUO3RyR.js","_app/immutable/chunks/DlUQHRdJ.js","_app/immutable/chunks/Cs_X23zF.js","_app/immutable/chunks/DTi2sDqs.js","_app/immutable/chunks/Nr_qU2nG.js","_app/immutable/chunks/CuFu-7Bj.js","_app/immutable/chunks/dSJZ5dLC.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/BYxMzdyx.js","_app/immutable/chunks/Cn7woczV.js","_app/immutable/chunks/DuaHpsb3.js","_app/immutable/chunks/CrL3HiYF.js","_app/immutable/chunks/Dchouehq.js","_app/immutable/chunks/D3ORrAI7.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=3-Bl90OVjH.js.map
