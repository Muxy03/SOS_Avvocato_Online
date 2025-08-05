const load = async ({ fetch }) => {
  const user_session = await fetch("/api/session", {
    method: "GET",
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" }
  });
  if (user_session.status === 200) {
    const user = await user_session.json();
    return { user };
  }
  return {
    user: void 0
  };
};

var _layout_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 2;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-BaWw-6EA.js')).default;
const server_id = "src/routes/(app)/+layout.server.ts";
const imports = ["_app/immutable/nodes/2.BgZu6w_L.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CB0GAoS5.js","_app/immutable/chunks/B4cahDDo.js","_app/immutable/chunks/DuTLVp-_.js","_app/immutable/chunks/C6uoEf-H.js","_app/immutable/chunks/CH-7nw50.js","_app/immutable/chunks/BChRSR2T.js","_app/immutable/chunks/BTZEZ-Wa.js","_app/immutable/chunks/B6vS1P4H.js","_app/immutable/chunks/DuaHpsb3.js","_app/immutable/chunks/CaL4QoSf.js"];
const stylesheets = ["_app/immutable/assets/Modal.BqoXehEq.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=2-B4rNinUN.js.map
