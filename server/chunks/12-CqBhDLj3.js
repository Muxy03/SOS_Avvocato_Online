import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { f as firebase } from './firebase-Bsqixs1C.js';
import { f as fail, r as redirect } from './index-DMcSsXGi.js';
import { addDoc, collection } from 'firebase/firestore';
import 'firebase/app';

const actions = {
  register: async ({ fetch, request }) => {
    const formData = await request.formData();
    const fullName = formData.get("fullName");
    const email = formData.get("email");
    const password = formData.get("password");
    try {
      const user = (await createUserWithEmailAndPassword(firebase.auth, email, password)).user;
      await updateProfile(user, {
        displayName: fullName
      });
      const DocRef = await addDoc(collection(firebase.db, "Users"), {
        id: user.uid,
        FullName: fullName,
        email: user.email,
        createdAt: Date.now().toString(),
        lastLogin: Date.now().toString(),
        Emails: []
      });
      const User = {
        DocId: DocRef.id,
        id: user.uid,
        FullName: fullName,
        email,
        createdAt: Date.now().toString(),
        lastLogin: Date.now().toString(),
        Emails: []
      };
      await fetch("/api/session", {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(User)
      });
    } catch (err) {
      console.error("Registration error:", err);
      await fetch("/api/session", {
        method: "DELETE",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: ""
      });
      return fail(400, {
        error: JSON.stringify(err)
      });
    }
  }
};
const load = ({ cookies }) => {
  if (cookies.get("user_session")) {
    throw redirect(303, "/home");
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 12;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BeovOD_8.js')).default;
const server_id = "src/routes/(auth)/register/+page.server.ts";
const imports = ["_app/immutable/nodes/12.DBs0SWyU.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/DbbzO-B6.js","_app/immutable/chunks/813Ht5r7.js","_app/immutable/chunks/CUznojAc.js","_app/immutable/chunks/DadSIK-R.js","_app/immutable/chunks/Bh_3nlJB.js","_app/immutable/chunks/KXhGhqBc.js","_app/immutable/chunks/CgQPfSTX.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/DL-E3Ce0.js","_app/immutable/chunks/BrdxJ9sT.js","_app/immutable/chunks/KjYeVjkE.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=12-CqBhDLj3.js.map
