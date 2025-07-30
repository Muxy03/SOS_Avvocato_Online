import { j as json } from './index-DMcSsXGi.js';

const POST = async ({ request, cookies }) => {
  try {
    const { Id, Consultation } = await request.json();
    if (!Consultation) {
      return json({ success: false, message: "Consultation is required" }, { status: 400 });
    }
    cookies.set(Id, Consultation, {
      path: "/",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 30
      // 30 days in seconds
    });
    return json({ success: true, message: "Consultation saved successfully" });
  } catch (error) {
    console.error("Error saving Consultation:", error);
    return json({ success: false, message: "Failed to save Consultation" }, { status: 500 });
  }
};
const GET = async ({ request, cookies }) => {
  try {
    const { Id } = await request.json();
    if (!Id) {
      return json({ success: false, message: "Id is required" }, { status: 400 });
    }
    const cookie = cookies.getAll().find((cookie2) => cookie2.name === Id);
    if (!cookie) {
      return json({ success: false, message: "No consultations found" }, { status: 404 });
    }
    return json({ success: true, consultation: JSON.parse(cookie.value) });
  } catch (error) {
    console.error("Error retrieving consultations:", error);
    return json({ success: false, message: "Failed to retrieve consultations" }, { status: 500 });
  }
};
const DELETE = async ({ request, cookies }) => {
  try {
    const { userID } = await request.json();
    if (!userID) {
      return json({ success: false, message: "UserID is required" }, { status: 400 });
    }
    cookies.delete(userID, { path: "/" });
    return json({ success: true, message: "Consultation deleted successfully" });
  } catch (error) {
    console.error("Error deleting consultation:", error);
    return json({ success: false, message: "Failed to delete consultation" }, { status: 500 });
  }
};

export { DELETE, GET, POST };
//# sourceMappingURL=_server.ts-BtAPRY9W.js.map
