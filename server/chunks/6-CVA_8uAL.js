import { f as firebase } from './firebase-Bsqixs1C.js';
import { collection, getDocs } from 'firebase/firestore';
import 'firebase/app';
import 'firebase/auth';

const load = async () => {
  try {
    const consultationsRef = collection(firebase.db, "Consultations");
    const querySnapshot = await getDocs(consultationsRef);
    if (!querySnapshot.empty) {
      const consultations = querySnapshot.docs.map((doc) => {
        console.log("Consultations fetched successfully:", doc.data(), doc.id);
        return {
          id: doc.id,
          createdAt: doc.data().createdAt,
          updatedAt: doc.data().updatedAt,
          email: doc.data().email,
          status: doc.data().status,
          userID: doc.data().userID
        };
      });
      return {
        consultations,
        error: null
      };
    }
    return {
      consultations: [],
      error: "No consultations found"
    };
  } catch (error) {
    console.error("Error fetching consultations:", error);
    return {
      consultations: [],
      error: "Failed to fetch consultations"
    };
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 6;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-B5dn6JpS.js')).default;
const server_id = "src/routes/(app)/admin/+page.server.ts";
const imports = ["_app/immutable/nodes/6.B82Qivop.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/813Ht5r7.js","_app/immutable/chunks/CUznojAc.js","_app/immutable/chunks/DadSIK-R.js","_app/immutable/chunks/KXhGhqBc.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=6-CVA_8uAL.js.map
