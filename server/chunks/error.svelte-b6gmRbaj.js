import { u as push, y as escape_html, w as pop } from './index-tKQS1tGf.js';
import { p as page } from './index3-CWF-UdUn.js';
import './state.svelte-CjJfVXvW.js';
import './exports-BXJ_0DG8.js';
import './index2-kL9U-GfV.js';

function Error($$payload, $$props) {
  push();
  $$payload.out.push(`<h1>${escape_html(page.status)}</h1> <p>${escape_html(page.error?.message)}</p>`);
  pop();
}

export { Error as default };
//# sourceMappingURL=error.svelte-b6gmRbaj.js.map
