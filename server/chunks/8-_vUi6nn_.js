import { getDocs, collection, updateDoc, doc, arrayUnion, addDoc } from 'firebase/firestore';
import { f as firebase } from './firebase-Bsqixs1C.js';
import 'firebase/app';
import 'firebase/auth';

async function sendTransactionalEmail(email, userUid, attachments) {
  const url = "https://api.brevo.com/v3/smtp/email";
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "api-key": void 0
  };
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
  } catch (err) {
    console.error("Failed to save email to Firestore:", err);
  }
  return { messageId };
}
const actions = {
  sendEmail: async (event) => {
    const Test = {
      sender: { email: "a.mussari@studenti.unipi.it", name: "Andrea Mussari" },
      to: [{ email: "a.mussari@studenti.unipi.it", name: "Andrea Mussari" }],
      textContent: "TESTING",
      subject: "TEST",
      htmlContent: "",
      attachment: []
    };
    Test.htmlContent = `<p>${Test.textContent}</p>`;
    const user_session = await event.fetch("/api/session", {
      method: "GET",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" }
    });
    if (user_session.ok) {
      const user = await user_session.json();
      await sendTransactionalEmail(Test, user.uid);
    } else {
      throw new Error("User is not authenticated");
    }
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions
});

const index = 8;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-Cp25xsoS.js')).default;
const server_id = "src/routes/(app)/write/+page.server.ts";
const imports = ["_app/immutable/nodes/8.C19kM4q4.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/ByMhJ1lq.js","_app/immutable/chunks/nGUMutCJ.js","_app/immutable/chunks/BeycMaZk.js","_app/immutable/chunks/CltT4Sjb.js","_app/immutable/chunks/BmhJr0QQ.js","_app/immutable/chunks/D6y1jbd9.js","_app/immutable/chunks/AhqUU1ts.js","_app/immutable/chunks/Bgbd2wj0.js","_app/immutable/chunks/CStty2jV.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/C9kSmRma.js"];
const stylesheets = ["_app/immutable/assets/8.CH85qEon.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=8-_vUi6nn_.js.map
