import { r as redirect } from './index-DMcSsXGi.js';

async function handle({ event, resolve }) {
  if (event.url.pathname.startsWith("/home")) {
    if (!event.cookies.get("user_session")) {
      throw redirect(303, "/login");
    }
  }
  if (event.url.pathname === "/login" || event.url.pathname === "/register") {
    if (event.cookies.get("user_session")) {
      throw redirect(303, "/home");
    }
  }
  const response = await resolve(event);
  return response;
}

export { handle };
//# sourceMappingURL=hooks.server-Bo2BbpPp.js.map
