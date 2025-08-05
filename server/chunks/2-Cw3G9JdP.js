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
const component = async () => component_cache ??= (await import('./_layout.svelte-C89RWTA6.js')).default;
const server_id = "src/routes/(app)/+layout.server.ts";
const imports = ["_app/immutable/nodes/2.DwCwtNOA.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/BkzrqWM-.js","_app/immutable/chunks/D50pdiVl.js","_app/immutable/chunks/BExVpiIy.js","_app/immutable/chunks/BLU31J5i.js","_app/immutable/chunks/DGqZX-Fr.js","_app/immutable/chunks/BqnRJcZ7.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/Dbvaylpg.js","_app/immutable/chunks/C8jEXIQm.js","_app/immutable/chunks/CarLpTOU.js","_app/immutable/chunks/C0HL8xLh.js","_app/immutable/chunks/pAYp49zD.js","_app/immutable/chunks/BRRXS_64.js","_app/immutable/chunks/DuaHpsb3.js"];
const stylesheets = ["_app/immutable/assets/Modal.BqoXehEq.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=2-Cw3G9JdP.js.map
