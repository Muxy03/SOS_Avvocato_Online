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

const index = 9;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-Cph2oIof.js')).default;
const server_id = "src/routes/(app)/home/+page.server.ts";
const imports = ["_app/immutable/nodes/9.eB7uvCK4.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CuFu-7Bj.js","_app/immutable/chunks/7vUO3RyR.js","_app/immutable/chunks/DlUQHRdJ.js","_app/immutable/chunks/Nr_qU2nG.js","_app/immutable/chunks/4VAOku12.js","_app/immutable/chunks/Cn7woczV.js","_app/immutable/chunks/Dgsv8Pl-.js","_app/immutable/chunks/CeWhiPbY.js","_app/immutable/chunks/D3ORrAI7.js","_app/immutable/chunks/DuaHpsb3.js","_app/immutable/chunks/DGtL5vhV.js"];
const stylesheets = ["_app/immutable/assets/Navbar.BqoXehEq.css","_app/immutable/assets/9.D9JPxnLK.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=9-DpHAqSeo.js.map
