import { r as redirect } from './index-DMcSsXGi.js';

const load = async ({ cookies }) => {
  const cookie = cookies.get("user_session");
  if (cookie) {
    const user = JSON.parse(cookie);
    console.log("about", user);
    throw redirect(303, "/about/" + user.DocId);
  } else {
    throw redirect(307, "/register");
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 4;
const server_id = "src/routes/(app)/about/+page.server.ts";
const imports = [];
const stylesheets = [];
const fonts = [];

export { fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=4-Baev7RPM.js.map
