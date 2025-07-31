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
const component = async () => component_cache ??= (await import('./_page.svelte-Bfie8pOl.js')).default;
const server_id = "src/routes/(app)/home/+page.server.ts";
const imports = ["_app/immutable/nodes/9.DrSYA95K.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/DbbzO-B6.js","_app/immutable/chunks/813Ht5r7.js","_app/immutable/chunks/CUznojAc.js","_app/immutable/chunks/CgQPfSTX.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/IXm2_R6c.js","_app/immutable/chunks/DadSIK-R.js","_app/immutable/chunks/KXhGhqBc.js","_app/immutable/chunks/DL-E3Ce0.js","_app/immutable/chunks/BIFpNwZY.js"];
const stylesheets = ["_app/immutable/assets/9.D9JPxnLK.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=9-CUqxqH7F.js.map
