import { f as firebase } from './firebase-ULSLx_tm.js';
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
        error: ""
      };
    }
    return {
      consultations: [],
      error: "No consultations found"
    };
  } catch (err) {
    console.error("Error fetching consultations:", err);
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
const component = async () => component_cache ??= (await import('./_page.svelte-y7r6Y6x_.js')).default;
const server_id = "src/routes/(app)/admin/+page.server.ts";
const imports = ["_app/immutable/nodes/6.BJgsDlti.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CB0GAoS5.js","_app/immutable/chunks/DuTLVp-_.js","_app/immutable/chunks/BKAMBxZp.js","_app/immutable/chunks/CH-7nw50.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=6-C28B7GqW.js.map
