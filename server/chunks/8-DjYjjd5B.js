import { getDoc, doc } from 'firebase/firestore';
import { f as firebase } from './firebase-ULSLx_tm.js';
import { e as error } from './index-DMcSsXGi.js';
import 'firebase/app';
import 'firebase/auth';

const load = ({ params }) => {
  return (async () => {
    let cons = void 0;
    cons = (await getDoc(doc(firebase.db, `/Consultations/${params.id}`))).data();
    if (!cons) {
      error(404, "Consultation not found");
    }
    return {
      consultation: cons
    };
  })();
};

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 8;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-Yz0aRFYv.js')).default;
const universal_id = "src/routes/(app)/consultation/[id]/+page.ts";
const imports = ["_app/immutable/nodes/8.B2QFPIos.js","_app/immutable/chunks/CrL3HiYF.js","_app/immutable/chunks/KjYeVjkE.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/D50pdiVl.js","_app/immutable/chunks/BExVpiIy.js","_app/immutable/chunks/CIBJ9sE4.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=8-DjYjjd5B.js.map
