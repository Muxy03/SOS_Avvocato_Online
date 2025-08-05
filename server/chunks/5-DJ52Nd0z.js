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
const imports = ["_app/immutable/nodes/5.DxxLOp0q.js","_app/immutable/chunks/CrL3HiYF.js","_app/immutable/chunks/KjYeVjkE.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/D50pdiVl.js","_app/immutable/chunks/BExVpiIy.js","_app/immutable/chunks/CIBJ9sE4.js","_app/immutable/chunks/Bvhg8_Rw.js","_app/immutable/chunks/C8jEXIQm.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=5-DJ52Nd0z.js.map
