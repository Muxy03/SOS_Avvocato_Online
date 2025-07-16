function _layout($$payload, $$props) {
  let { children } = $$props;
  $$payload.out += `<div class="min-w-screen flex min-h-screen items-center justify-center">`;
  children($$payload);
  $$payload.out += `<!----></div>`;
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-BNOI0x43.js.map
