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
const component = async () => component_cache ??= (await import('./_page.svelte-CaIcKKs_.js')).default;
const server_id = "src/routes/+page.server.ts";
const imports = ["_app/immutable/nodes/3.C0S1VEr0.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/BkzrqWM-.js","_app/immutable/chunks/D50pdiVl.js","_app/immutable/chunks/BExVpiIy.js","_app/immutable/chunks/CIBJ9sE4.js","_app/immutable/chunks/CEylPTDC.js","_app/immutable/chunks/BLU31J5i.js","_app/immutable/chunks/DGqZX-Fr.js","_app/immutable/chunks/BqnRJcZ7.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/5M6kmaMY.js","_app/immutable/chunks/pAYp49zD.js","_app/immutable/chunks/DuaHpsb3.js","_app/immutable/chunks/CrL3HiYF.js","_app/immutable/chunks/Dchouehq.js","_app/immutable/chunks/BRRXS_64.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=3-DzT5bVmQ.js.map
