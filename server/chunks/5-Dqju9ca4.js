import { getDoc, doc } from 'firebase/firestore';
import { f as firebase } from './firebase-ULSLx_tm.js';
import { r as redirect } from './index-DMcSsXGi.js';
import 'firebase/app';
import 'firebase/auth';

const load = ({ fetch, params }) => {
  return (async () => {
    const user = (await getDoc(doc(firebase.db, `/Users/${params.id}`))).data();
    if (!user) {
      await fetch("/api/session", {
        method: "DELETE",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: ""
      });
      throw redirect(307, "/register");
    }
    return {
      user
    };
  })();
};

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 5;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-5Yl5EyY5.js')).default;
const universal_id = "src/routes/(app)/about/[id]/+page.ts";
const imports = ["_app/immutable/nodes/5.CRfDKFMi.js","_app/immutable/chunks/CrL3HiYF.js","_app/immutable/chunks/KjYeVjkE.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/hMZFjhjB.js","_app/immutable/chunks/C3vF11sT.js","_app/immutable/chunks/DO9TSQkw.js","_app/immutable/chunks/DnkpmdWb.js","_app/immutable/chunks/B5kwSbQw.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=5-Dqju9ca4.js.map
