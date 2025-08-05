import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { f as firebase } from './firebase-ULSLx_tm.js';
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
const component = async () => component_cache ??= (await import('./_page.svelte-VgR_nzNR.js')).default;
const server_id = "src/routes/(auth)/register/+page.server.ts";
const imports = ["_app/immutable/nodes/12.DzjEyQRG.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CB0GAoS5.js","_app/immutable/chunks/DuTLVp-_.js","_app/immutable/chunks/BKAMBxZp.js","_app/immutable/chunks/B9xabBUp.js","_app/immutable/chunks/Bu5Fj58j.js","_app/immutable/chunks/B4cahDDo.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/CZLX4HTG.js","_app/immutable/chunks/CH-7nw50.js","_app/immutable/chunks/BChRSR2T.js","_app/immutable/chunks/CrL3HiYF.js","_app/immutable/chunks/KjYeVjkE.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=12-CC6pUGVQ.js.map
