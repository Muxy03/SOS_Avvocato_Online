import { O as push, _ as attr_class, Y as bind_props, Q as pop } from './index-BaZFIA8u.js';

/* empty css                                    */
function Modal($$payload, $$props) {
  push();
  let { showModal = void 0, header, children } = $$props;
  $$payload.out.push(`<dialog${attr_class("flex min-h-full items-center justify-center bg-transparent svelte-19dligb", void 0, { "hidden": !showModal })}><div class="bg-white rounded-xl mx-5 svelte-19dligb">`);
  header?.($$payload);
  $$payload.out.push(`<!----> <hr/> `);
  children?.($$payload);
  $$payload.out.push(`<!----> <hr/> <button autofocus class="svelte-19dligb">close modal</button></div></dialog>`);
  bind_props($$props, { showModal });
  pop();
}

export { Modal as M };
//# sourceMappingURL=Modal-D3D3EQgk.js.map
