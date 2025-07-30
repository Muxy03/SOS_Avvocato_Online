import { u as push, v as setContext, w as pop, x as current_component } from './index-CJFxRk-N.js';
import 'firebase/auth';
import './firebase-Bsqixs1C.js';
import { n as navigating } from './index3-BFbegTs1.js';
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
  let user = { value: null };
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
  $$payload.out.push(`<div class="flex min-h-screen min-w-screen flex-col items-center justify-center bg-blue-900">`);
  children($$payload);
  $$payload.out.push(`<!----></div>`);
  pop();
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-ChAhODyw.js.map
