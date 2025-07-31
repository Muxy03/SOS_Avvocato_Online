import { u as push, w as pop } from './index-tKQS1tGf.js';
import { N as Navbar } from './Navbar-Co1modQO.js';
import './exports-BXJ_0DG8.js';
import './state.svelte-CjJfVXvW.js';

function _layout($$payload, $$props) {
  push();
  let { data, children } = $$props;
  const user = { ...data.user };
  Navbar($$payload, { user });
  $$payload.out.push(`<!----> `);
  children($$payload);
  $$payload.out.push(`<!---->`);
  pop();
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-C5GCju33.js.map
