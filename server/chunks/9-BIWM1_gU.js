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
const imports = ["_app/immutable/nodes/9.C0hYCfme.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/BkzrqWM-.js","_app/immutable/chunks/D50pdiVl.js","_app/immutable/chunks/BExVpiIy.js","_app/immutable/chunks/DGqZX-Fr.js","_app/immutable/chunks/C0HL8xLh.js","_app/immutable/chunks/pAYp49zD.js","_app/immutable/chunks/C8jEXIQm.js","_app/immutable/chunks/CarLpTOU.js","_app/immutable/chunks/BRRXS_64.js","_app/immutable/chunks/DuaHpsb3.js","_app/immutable/chunks/Dbvaylpg.js"];
const stylesheets = ["_app/immutable/assets/Modal.BqoXehEq.css","_app/immutable/assets/9.D9JPxnLK.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=9-BIWM1_gU.js.map
