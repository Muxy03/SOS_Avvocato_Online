import { O as push, T as copy_payload, V as assign_payload, Q as pop, W as current_component, X as escape_html } from './index-BaZFIA8u.js';
import 'firebase/auth';
import './firebase-ULSLx_tm.js';
import { p as page } from './index3-KPB82_hg.js';
import { M as Modal } from './Modal-D3D3EQgk.js';
import 'firebase/app';
import 'firebase/firestore';
import './client-D07vpx2t.js';
import './state.svelte-BU61w6k3.js';
import './exports-Cv9LZeD1.js';
import './index2-BIwi7_Gr.js';

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
  let showModal = false;
  if (page.error) {
    showModal = true;
  }
  onDestroy(() => {
  });
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out.push(`<div class="flex h-screen w-screen flex-col gap-5"><main class="flex-1 bg-blue-900"><div class="flex h-full w-full items-center justify-center">`);
    children($$payload2);
    $$payload2.out.push(`<!----></div> `);
    {
      let header = function($$payload3) {
        $$payload3.out.push(`<h2>ERROR</h2>`);
      };
      Modal($$payload2, {
        get showModal() {
          return showModal;
        },
        set showModal($$value) {
          showModal = $$value;
          $$settled = false;
        },
        header,
        children: ($$payload3) => {
          $$payload3.out.push(`<!---->${escape_html(page.error?.message)}`);
        },
        $$slots: { header: true, default: true }
      });
    }
    $$payload2.out.push(`<!----></main></div>`);
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  pop();
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-DMaBmEiv.js.map
