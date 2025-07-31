const POST = async ({ request, cookies }) => {
  const userInfo = await request.json();
  cookies.set("user_session", JSON.stringify(userInfo), {
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7
    // 7 days
  });
  return new Response(null, { status: 200 });
};
const GET = async ({ cookies }) => {
  const userSession = cookies.get("user_session");
  if (userSession) {
    return new Response(userSession, { status: 200 });
  }
  return new Response(null, { status: 204 });
};
const DELETE = async ({ cookies }) => {
  cookies.set("user_session", "", {
    path: "/",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 0
  });
  return new Response(null, { status: 200 });
};

export { DELETE, GET, POST };
//# sourceMappingURL=_server.ts-BMQqWKYT.js.map
