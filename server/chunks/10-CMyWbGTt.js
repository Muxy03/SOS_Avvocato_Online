import { getDocs, collection, updateDoc, doc, arrayUnion, addDoc } from 'firebase/firestore';
import { f as firebase } from './firebase-ULSLx_tm.js';
import { f as fail } from './index-DMcSsXGi.js';
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
    return fail(resp.status, { message: "ERROR:" + JSON.stringify(errorBody) });
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
      return fail(404, { message: "user not found" });
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
    return fail(404, { message: "Failed to save email to Firestore" });
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
      try {
        const user = await user_session.json();
        await sendTransactionalEmail(Test, user.id, attachments, fetch);
      } catch (error) {
        console.error(error);
        return fail(123, { message: error.message });
      }
    } else {
      return fail(404, {
        message: "User not authenticated"
      });
    }
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions
});

const index = 10;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BMdaEFTp.js')).default;
const server_id = "src/routes/(app)/write/+page.server.ts";
const imports = ["_app/immutable/nodes/10.CVnDBXyG.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CB0GAoS5.js","_app/immutable/chunks/DuTLVp-_.js","_app/immutable/chunks/BKAMBxZp.js","_app/immutable/chunks/CXKqNFy3.js","_app/immutable/chunks/CZLX4HTG.js","_app/immutable/chunks/B4cahDDo.js","_app/immutable/chunks/Bu5Fj58j.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/CdrGPqyf.js","_app/immutable/chunks/B9xabBUp.js","_app/immutable/chunks/CH-7nw50.js","_app/immutable/chunks/BTZEZ-Wa.js","_app/immutable/chunks/CrL3HiYF.js","_app/immutable/chunks/KjYeVjkE.js","_app/immutable/chunks/CaL4QoSf.js","_app/immutable/chunks/BChRSR2T.js"];
const stylesheets = ["_app/immutable/assets/Modal.BqoXehEq.css","_app/immutable/assets/10.CH85qEon.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=10-CMyWbGTt.js.map
