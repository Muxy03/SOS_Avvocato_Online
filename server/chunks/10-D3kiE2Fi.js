import { createUserWithEmailAndPassword } from 'firebase/auth';
import { f as firebase } from './firebase-Bsqixs1C.js';
import { f as fail } from './index-DMcSsXGi.js';
import { addDoc, collection } from 'firebase/firestore';
import 'firebase/app';

const actions = {
  register: async ({ fetch, request }) => {
    const formData = await request.formData();
    const fullName = formData.get("fullName");
    const email = formData.get("email");
    const password = formData.get("password");
    try {
      const User = (await createUserWithEmailAndPassword(firebase.auth, email, password)).user;
      await fetch("/api/session", {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(User)
      });
      await addDoc(collection(firebase.db, "Users"), {
        id: User.uid,
        FullName: fullName,
        email: User.email,
        createdAt: Date.now().toString(),
        lastLogin: Date.now().toString(),
        Emails: []
      });
    } catch (err) {
      console.error("Registration error:", err);
      return fail(400, {
        error: JSON.stringify(err)
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
const component = async () => component_cache ??= (await import('./_page.svelte-BlIWiT5y.js')).default;
const server_id = "src/routes/(auth)/register/+page.server.ts";
const imports = ["_app/immutable/nodes/10.CGRrviuM.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/nGUMutCJ.js","_app/immutable/chunks/BeycMaZk.js","_app/immutable/chunks/CltT4Sjb.js","_app/immutable/chunks/D6y1jbd9.js","_app/immutable/chunks/AhqUU1ts.js","_app/immutable/chunks/Bgbd2wj0.js","_app/immutable/chunks/CStty2jV.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/Dzlaz3fn.js","_app/immutable/chunks/BrdxJ9sT.js","_app/immutable/chunks/PD1Wq3xD.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=10-D3kiE2Fi.js.map
