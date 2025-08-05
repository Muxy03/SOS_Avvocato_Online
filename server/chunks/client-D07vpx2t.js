import './state.svelte-BU61w6k3.js';
import './exports-Cv9LZeD1.js';
import { w as writable } from './index2-BIwi7_Gr.js';

function create_updated_store() {
  const { set, subscribe } = writable(false);
  {
    return {
      subscribe,
      // eslint-disable-next-line @typescript-eslint/require-await
      check: async () => false
    };
  }
}
const stores = {
  updated: /* @__PURE__ */ create_updated_store()
};
({
  check: stores.updated.check
});
//# sourceMappingURL=client-D07vpx2t.js.map
