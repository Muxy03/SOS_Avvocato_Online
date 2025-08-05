import { O as push, Q as pop, T as current_component } from './index-DwtfPoHx.js';
import 'firebase/auth';
import './firebase-ULSLx_tm.js';
import { p as page } from './index3-D88g52U-.js';
import 'firebase/app';
import 'firebase/firestore';
import './state.svelte-T0sbFh94.js';
import './exports-Cv9LZeD1.js';
import './index2-Ckd61VIf.js';

/* empty css                                               */
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
  if (page.error) ;
  onDestroy(() => {
  });
  $$payload.out.push(`<div class="flex h-screen w-screen flex-col gap-5"><main class="flex-1 bg-blue-900"><div class="flex h-full w-full items-center justify-center">`);
  children($$payload);
  $$payload.out.push(`<!----></div></main></div>`);
  pop();
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-Buv-vN8P.js.map
