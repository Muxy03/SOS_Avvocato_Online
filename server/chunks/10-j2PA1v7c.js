import { getDocs, collection, updateDoc, doc, arrayUnion, addDoc } from 'firebase/firestore';
import { f as firebase } from './firebase-ULSLx_tm.js';
import 'firebase/app';
import 'firebase/auth';

async function sendTransactionalEmail(email, userUid, attachments = [], fetch) {
  const url = "https://api.brevo.com/v3/smtp/email";
  const api = "/api/emails";
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "api-key": void 0
  };
  if (attachments.length > 0) {
    email.attachment = [...attachments];
  }
  const resp = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(email)
  });
  if (!resp.ok) {
    const errorBody = await resp.json().catch(() => null);
    throw new Error(`HTTP ${resp.status}: ${JSON.stringify(errorBody)}`);
  }
  const { messageId } = await resp.json();
  const Consultation = {
    userID: userUid,
    id: messageId,
    email,
    createdAt: (/* @__PURE__ */ new Date()).toDateString(),
    updatedAt: (/* @__PURE__ */ new Date()).toDateString(),
    status: "pending"
  };
  try {
    const Users = (await getDocs(collection(firebase.db, "Users"))).docs;
    const User = Users.find((dc) => dc.data().id === userUid);
    if (!User) {
      throw new Error("NO USER");
    }
    await updateDoc(doc(firebase.db, "Users", User.id), {
      Emails: arrayUnion(Consultation)
    });
    const newdoc = await addDoc(collection(firebase.db, "Consultations"), Consultation);
    console.log("Consultation saved successfully:", newdoc.id);
    await fetch(api, {
      method: "POST",
      headers,
      body: JSON.stringify({ Id: newdoc.id, Consultation })
    });
  } catch (err) {
    console.error("Failed to save email to Firestore:", err);
  }
  return { messageId };
}
const actions = {
  sendEmail: async ({ fetch, request }) => {
    const FormData = await request.formData();
    const attachments = FormData.getAll("attachments").map((x) => JSON.parse(x));
    const Test = {
      sender: { email: "a.mussari@studenti.unipi.it", name: "Andrea Mussari" },
      to: [{ email: "a.mussari@studenti.unipi.it", name: "Andrea Mussari" }],
      textContent: "TESTING",
      subject: "TEST",
      htmlContent: ""
    };
    Test.htmlContent = `<p>${Test.textContent}</p>`;
    const user_session = await fetch("/api/session", {
      method: "GET",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" }
    });
    if (user_session.ok) {
      const user = await user_session.json();
      await sendTransactionalEmail(Test, user.id, attachments, fetch);
    } else {
      throw new Error("User is not authenticated");
    }
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions
});

const index = 10;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CRDjj7WS.js')).default;
const server_id = "src/routes/(app)/write/+page.server.ts";
const imports = ["_app/immutable/nodes/10.BQeJtxz3.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/BYxMzdyx.js","_app/immutable/chunks/7vUO3RyR.js","_app/immutable/chunks/DlUQHRdJ.js","_app/immutable/chunks/Cs_X23zF.js","_app/immutable/chunks/QqMZMdb7.js","_app/immutable/chunks/BG9ubxqI.js","_app/immutable/chunks/dSJZ5dLC.js","_app/immutable/chunks/CuFu-7Bj.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/Nr_qU2nG.js","_app/immutable/chunks/Cn7woczV.js","_app/immutable/chunks/DGtL5vhV.js","_app/immutable/chunks/CrL3HiYF.js"];
const stylesheets = ["_app/immutable/assets/10.CH85qEon.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=10-j2PA1v7c.js.map
