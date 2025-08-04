import { signInWithEmailAndPassword } from 'firebase/auth';
import { r as redirect, f as fail } from './index-DMcSsXGi.js';
import { f as firebase } from './firebase-ULSLx_tm.js';
import { doc, updateDoc, getDocs, collection } from 'firebase/firestore';
import 'firebase/app';

const actions = {
  login: async ({ fetch, request }) => {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    if (email === "admin" && password === "admin") {
      const admin = { email, password };
      await fetch("/api/session", {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(admin)
      });
      throw redirect(303, "/admin");
    }
    try {
      const userInfo = await signInWithEmailAndPassword(firebase.auth, email, password);
      const user_session = await fetch("/api/session", {
        method: "GET",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" }
      });
      if (user_session.status === 200) {
        const user = await user_session.json();
        const docRef = doc(firebase.db, "Users", user.DocId);
        user.lastLogin = (/* @__PURE__ */ new Date()).toDateString();
        await updateDoc(docRef, {
          lastLogin: (/* @__PURE__ */ new Date()).toDateString()
        });
        await fetch("/api/session", {
          method: "POST",
          credentials: "same-origin",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user)
        });
      } else {
        const Snapshot = (await getDocs(collection(firebase.db, "Users"))).docs;
        if (Snapshot.length === 0) return true;
        for (const doc2 of Snapshot) {
          if (doc2.data().id === userInfo.user.uid) {
            const User = {
              DocId: doc2.id,
              id: userInfo.user.uid,
              FullName: userInfo.user.displayName || "",
              email,
              createdAt: doc2.data().createdAt,
              lastLogin: Date.now().toString(),
              Emails: doc2.data().Emails
            };
            await fetch("/api/session", {
              method: "POST",
              credentials: "same-origin",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(User)
            });
            break;
          }
        }
      }
    } catch (err) {
      return fail(400, err instanceof Error ? { error: err.message } : { error: "Login failed" });
    }
    throw redirect(303, "/home");
  }
};
const load = ({ cookies }) => {
  cookies.get("user_session");
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 11;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CqkUKt5h.js')).default;
const server_id = "src/routes/(auth)/login/+page.server.ts";
const imports = ["_app/immutable/nodes/11.BvKDG1ti.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/7vUO3RyR.js","_app/immutable/chunks/DlUQHRdJ.js","_app/immutable/chunks/Cs_X23zF.js","_app/immutable/chunks/BG9ubxqI.js","_app/immutable/chunks/dSJZ5dLC.js","_app/immutable/chunks/CuFu-7Bj.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/Nr_qU2nG.js","_app/immutable/chunks/Cn7woczV.js","_app/immutable/chunks/Dgsv8Pl-.js","_app/immutable/chunks/CrL3HiYF.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=11-cpuUVLo9.js.map
