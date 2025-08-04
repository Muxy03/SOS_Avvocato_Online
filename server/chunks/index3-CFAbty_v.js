import './state.svelte-DILCCdx_.js';
import './exports-Cv9LZeD1.js';
import { w as writable } from './index2-fOYOpeUp.js';
import { a0 as getContext } from './index-Q41OkFP-.js';

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
  get status() {
    return context().page.status;
  }
};
const navigating$1 = {
  complete: null
};
const page = page$1;
const navigating = navigating$1;

export { navigating as n, page as p };
//# sourceMappingURL=index3-CFAbty_v.js.map
