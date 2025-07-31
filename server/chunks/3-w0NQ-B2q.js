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
const component = async () => component_cache ??= (await import('./_page.svelte-W7OQTNuq.js')).default;
const server_id = "src/routes/+page.server.ts";
const imports = ["_app/immutable/nodes/3.5eB24MdY.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/813Ht5r7.js","_app/immutable/chunks/CUznojAc.js","_app/immutable/chunks/DadSIK-R.js","_app/immutable/chunks/CRmmrOlb.js","_app/immutable/chunks/CgQPfSTX.js","_app/immutable/chunks/DbbzO-B6.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/D4VBDwzt.js","_app/immutable/chunks/KXhGhqBc.js","_app/immutable/chunks/BrdxJ9sT.js","_app/immutable/chunks/dkFZ6RT-.js"];
const stylesheets = ["_app/immutable/assets/3.CtS9xzIU.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=3-w0NQ-B2q.js.map
