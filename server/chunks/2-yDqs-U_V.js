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
const component = async () => component_cache ??= (await import('./_layout.svelte-CKyYZ7mb.js')).default;
const server_id = "src/routes/(app)/+layout.server.ts";
const imports = ["_app/immutable/nodes/2.Yi2esUSa.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/7vUO3RyR.js","_app/immutable/chunks/CuFu-7Bj.js","_app/immutable/chunks/DlUQHRdJ.js","_app/immutable/chunks/4VAOku12.js","_app/immutable/chunks/Cn7woczV.js","_app/immutable/chunks/Dgsv8Pl-.js","_app/immutable/chunks/CeWhiPbY.js","_app/immutable/chunks/D3ORrAI7.js","_app/immutable/chunks/DuaHpsb3.js","_app/immutable/chunks/DGtL5vhV.js"];
const stylesheets = ["_app/immutable/assets/Navbar.BqoXehEq.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=2-yDqs-U_V.js.map
