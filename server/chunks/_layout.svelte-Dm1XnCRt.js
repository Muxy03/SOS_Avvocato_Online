import { O as push, P as setContext, Q as pop, T as current_component } from './index-Q41OkFP-.js';
import 'firebase/auth';
import './firebase-ULSLx_tm.js';
import './index3-CFAbty_v.js';
import 'firebase/app';
import 'firebase/firestore';
import './state.svelte-DILCCdx_.js';
import './exports-Cv9LZeD1.js';
import './index2-fOYOpeUp.js';

function onDestroy(fn) {
  var context = (
    /** @type {Component} */
    current_component
  );
  (context.d ??= []).push(fn);
}
function _layout($$payload, $$props) {
  push();
  let { children } = $$props;
  const error = { value: "" };
  setContext("App", { error });
  onDestroy(() => {
  });
  $$payload.out.push(`<div class="flex h-screen w-screen flex-col gap-5"><main class="flex-1 bg-blue-900"><div class="flex h-full w-full items-center justify-center">`);
  children($$payload);
  $$payload.out.push(`<!----></div></main></div>`);
  pop();
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-Dm1XnCRt.js.map
