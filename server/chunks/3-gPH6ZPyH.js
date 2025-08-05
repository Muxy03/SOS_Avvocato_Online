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
const component = async () => component_cache ??= (await import('./_page.svelte-BQ3jQigL.js')).default;
const server_id = "src/routes/+page.server.ts";
const imports = ["_app/immutable/nodes/3.BDXFvnIg.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/B4cahDDo.js","_app/immutable/chunks/CB0GAoS5.js","_app/immutable/chunks/DuTLVp-_.js","_app/immutable/chunks/BKAMBxZp.js","_app/immutable/chunks/CXKqNFy3.js","_app/immutable/chunks/CZLX4HTG.js","_app/immutable/chunks/Bu5Fj58j.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/zen7sMON.js","_app/immutable/chunks/CH-7nw50.js","_app/immutable/chunks/DuaHpsb3.js","_app/immutable/chunks/CrL3HiYF.js","_app/immutable/chunks/Dchouehq.js","_app/immutable/chunks/B6vS1P4H.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=3-gPH6ZPyH.js.map
