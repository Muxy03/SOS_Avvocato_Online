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
const component = async () => component_cache ??= (await import('./_page.svelte-DINKp2we.js')).default;
const server_id = "src/routes/(app)/home/+page.server.ts";
const imports = ["_app/immutable/nodes/9.D08wDfFX.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/DL7c-2PW.js","_app/immutable/chunks/hMZFjhjB.js","_app/immutable/chunks/C3vF11sT.js","_app/immutable/chunks/DkxlJsYr.js","_app/immutable/chunks/CdROjXUm.js","_app/immutable/chunks/2gOuTNXT.js","_app/immutable/chunks/B5kwSbQw.js","_app/immutable/chunks/WF52vTBT.js","_app/immutable/chunks/THKFehzh.js","_app/immutable/chunks/DuaHpsb3.js","_app/immutable/chunks/6qdKIYlW.js"];
const stylesheets = ["_app/immutable/assets/Modal.BqoXehEq.css","_app/immutable/assets/9.D9JPxnLK.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=9-B7hXCUXX.js.map
