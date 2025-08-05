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
const component = async () => component_cache ??= (await import('./_page.svelte-DMDkMlTU.js')).default;
const server_id = "src/routes/(app)/home/+page.server.ts";
const imports = ["_app/immutable/nodes/9.C_NFJiTY.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/B4cahDDo.js","_app/immutable/chunks/CB0GAoS5.js","_app/immutable/chunks/DuTLVp-_.js","_app/immutable/chunks/CZLX4HTG.js","_app/immutable/chunks/C6uoEf-H.js","_app/immutable/chunks/CH-7nw50.js","_app/immutable/chunks/BChRSR2T.js","_app/immutable/chunks/BTZEZ-Wa.js","_app/immutable/chunks/B6vS1P4H.js","_app/immutable/chunks/DuaHpsb3.js","_app/immutable/chunks/CaL4QoSf.js"];
const stylesheets = ["_app/immutable/assets/Modal.BqoXehEq.css","_app/immutable/assets/9.D9JPxnLK.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=9-CMiKAcqK.js.map
