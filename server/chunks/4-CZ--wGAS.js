const actions = {
  default: async (event) => {
    console.log(await event.request.formData());
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions
});

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-e9HelIzf.js')).default;
const server_id = "src/routes/home/+page.server.ts";
const imports = ["_app/immutable/nodes/4.DR9Nrkv2.js","_app/immutable/chunks/NZTpNUN0.js","_app/immutable/chunks/Dkbj-q8P.js","_app/immutable/chunks/cOdPvYl_.js","_app/immutable/chunks/BDGSsmot.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=4-CZ--wGAS.js.map
