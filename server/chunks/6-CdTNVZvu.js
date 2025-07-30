import { getDoc, doc } from 'firebase/firestore';
import { f as firebase } from './firebase-Bsqixs1C.js';
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

const index = 6;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-Bb1tOv4N.js')).default;
const universal_id = "src/routes/(app)/consultation/[id]/+page.ts";
const imports = ["_app/immutable/nodes/6.BzJWthKl.js","_app/immutable/chunks/BrdxJ9sT.js","_app/immutable/chunks/PD1Wq3xD.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/nGUMutCJ.js","_app/immutable/chunks/BeycMaZk.js","_app/immutable/chunks/CltT4Sjb.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=6-CdTNVZvu.js.map
