import { signInWithEmailAndPassword } from 'firebase/auth';
import { r as redirect, f as fail } from './index-DMcSsXGi.js';
import { f as firebase } from './firebase-Bsqixs1C.js';
import { getDocs, collection, doc, updateDoc } from 'firebase/firestore';
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
      const Users = (await getDocs(collection(firebase.db, "Users"))).docs;
      const User = Users.find((dc) => dc.data().id === userInfo.user.uid);
      if (!User) {
        throw new Error("NO USER");
      }
      const docRef = doc(firebase.db, "Users", User.id);
      await updateDoc(docRef, {
        lastLogin: (/* @__PURE__ */ new Date()).toDateString()
      });
      await fetch("/api/session", {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userInfo)
      });
    } catch (err) {
      return fail(400, err instanceof Error ? { error: err.message } : { error: "Login failed" });
    }
    throw redirect(303, "/home");
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions
});

const index = 9;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CCLJadgL.js')).default;
const server_id = "src/routes/(auth)/login/+page.server.ts";
const imports = ["_app/immutable/nodes/9.BP0T3OGO.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/nGUMutCJ.js","_app/immutable/chunks/BeycMaZk.js","_app/immutable/chunks/CltT4Sjb.js","_app/immutable/chunks/D6y1jbd9.js","_app/immutable/chunks/AhqUU1ts.js","_app/immutable/chunks/Bgbd2wj0.js","_app/immutable/chunks/CStty2jV.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/Dzlaz3fn.js","_app/immutable/chunks/BrdxJ9sT.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=9-BBmgVYYs.js.map
