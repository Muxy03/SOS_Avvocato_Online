import { getDoc, doc } from 'firebase/firestore';
import { f as firebase } from './firebase-Bsqixs1C.js';
import { e as error } from './index-DMcSsXGi.js';
import 'firebase/app';
import 'firebase/auth';

const load = ({ params }) => {
  return (async () => {
    const user = (await getDoc(doc(firebase.db, `/Users/${params.id}`))).data();
    if (!user) {
      error(404, "user not found");
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

const index = 3;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-X9fr3rl-.js')).default;
const universal_id = "src/routes/(app)/about/[id]/+page.ts";
const imports = ["_app/immutable/nodes/3.BDgvldc4.js","_app/immutable/chunks/BrdxJ9sT.js","_app/immutable/chunks/PD1Wq3xD.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/nGUMutCJ.js","_app/immutable/chunks/BeycMaZk.js","_app/immutable/chunks/BmhJr0QQ.js","_app/immutable/chunks/Dzlaz3fn.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=3-PFow6Sg3.js.map
