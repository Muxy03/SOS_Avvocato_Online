function _layout($$payload, $$props) {
  let { children } = $$props;
  $$payload.out += `<div class="min-w-screen min-h-screen place-content-center">`;
  children($$payload);
  $$payload.out += `<!----></div>`;
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-CGWaPilt.js.map
