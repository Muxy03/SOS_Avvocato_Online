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
const component = async () => component_cache ??= (await import('./_layout.svelte-C5GCju33.js')).default;
const server_id = "src/routes/(app)/+layout.server.ts";
const imports = ["_app/immutable/nodes/2.CHiRXSXc.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/813Ht5r7.js","_app/immutable/chunks/DbbzO-B6.js","_app/immutable/chunks/CUznojAc.js","_app/immutable/chunks/IXm2_R6c.js","_app/immutable/chunks/DadSIK-R.js","_app/immutable/chunks/KXhGhqBc.js","_app/immutable/chunks/DL-E3Ce0.js","_app/immutable/chunks/BIFpNwZY.js","_app/immutable/chunks/CgQPfSTX.js","_app/immutable/chunks/CYgJF_JY.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=2-BRMNNzsC.js.map
