import { u as push, v as setContext, w as pop, x as current_component } from './index-tKQS1tGf.js';
import 'firebase/auth';
import './firebase-Bsqixs1C.js';
import { n as navigating } from './index3-CWF-UdUn.js';
import 'firebase/app';
import 'firebase/firestore';
import './state.svelte-CjJfVXvW.js';
import './exports-BXJ_0DG8.js';
import './index2-kL9U-GfV.js';

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
  const isOnline = { value: true };
  const rememberMe = { value: true };
  let user = { value: void 0 };
  const error = { value: "" };
  const isLoading = { value: navigating.complete !== null };
  setContext("App", { isOnline, isLoading, rememberMe, user, error });
  onDestroy(() => {
    if (!rememberMe.value) {
      (async () => {
        await fetch("/api/session", {
          method: "DELETE",
          credentials: "same-origin",
          headers: { "Content-Type": "application/json" },
          body: ""
        });
      })();
    }
  });
  $$payload.out.push(`<div class="flex h-screen w-screen flex-col gap-5"><main class="flex-1 bg-blue-900"><div class="flex h-full w-full items-center justify-center">`);
  children($$payload);
  $$payload.out.push(`<!----></div></main></div>`);
  pop();
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-jdUbanvT.js.map
