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
const imports = ["_app/immutable/nodes/2.hKeHaoXV.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/hMZFjhjB.js","_app/immutable/chunks/DL7c-2PW.js","_app/immutable/chunks/C3vF11sT.js","_app/immutable/chunks/D3IBXPmk.js","_app/immutable/chunks/DkxlJsYr.js","_app/immutable/chunks/CMM3Q6sT.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/6qdKIYlW.js","_app/immutable/chunks/B5kwSbQw.js","_app/immutable/chunks/WF52vTBT.js","_app/immutable/chunks/CdROjXUm.js","_app/immutable/chunks/2gOuTNXT.js","_app/immutable/chunks/THKFehzh.js","_app/immutable/chunks/DuaHpsb3.js"];
const stylesheets = ["_app/immutable/assets/Modal.BqoXehEq.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=2-CjDLiWid.js.map
