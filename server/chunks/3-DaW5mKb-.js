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
const component = async () => component_cache ??= (await import('./_page.svelte-DmrQhO1V.js')).default;
const server_id = "src/routes/+page.server.ts";
const imports = ["_app/immutable/nodes/3.CVRPmgD9.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/DL7c-2PW.js","_app/immutable/chunks/hMZFjhjB.js","_app/immutable/chunks/C3vF11sT.js","_app/immutable/chunks/DO9TSQkw.js","_app/immutable/chunks/CWuZaM_Z.js","_app/immutable/chunks/D3IBXPmk.js","_app/immutable/chunks/DkxlJsYr.js","_app/immutable/chunks/CMM3Q6sT.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/cmOnixpf.js","_app/immutable/chunks/2gOuTNXT.js","_app/immutable/chunks/DuaHpsb3.js","_app/immutable/chunks/CrL3HiYF.js","_app/immutable/chunks/Dchouehq.js","_app/immutable/chunks/THKFehzh.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=3-DaW5mKb-.js.map
