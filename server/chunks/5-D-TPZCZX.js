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
const component = async () => component_cache ??= (await import('./_page.svelte-CK8tWn5x.js')).default;
const universal_id = "src/routes/(app)/about/[id]/+page.ts";
const imports = ["_app/immutable/nodes/5.BTtBQ7ep.js","_app/immutable/chunks/CrL3HiYF.js","_app/immutable/chunks/KjYeVjkE.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CB0GAoS5.js","_app/immutable/chunks/DuTLVp-_.js","_app/immutable/chunks/BKAMBxZp.js","_app/immutable/chunks/CdrGPqyf.js","_app/immutable/chunks/BChRSR2T.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=5-D-TPZCZX.js.map
