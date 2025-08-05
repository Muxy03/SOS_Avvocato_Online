import './state.svelte-T0sbFh94.js';
import './exports-Cv9LZeD1.js';
import { w as writable } from './index2-Ckd61VIf.js';
import { a2 as getContext } from './index-DwtfPoHx.js';

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
function context() {
  return getContext("__request__");
}
const page$1 = {
  get error() {
    return context().page.error;
  },
  get form() {
    return context().page.form;
  }
};
const navigating$1 = {
  complete: null
};
const page = page$1;
const navigating = navigating$1;

export { navigating as n, page as p };
//# sourceMappingURL=index3-D88g52U-.js.map
