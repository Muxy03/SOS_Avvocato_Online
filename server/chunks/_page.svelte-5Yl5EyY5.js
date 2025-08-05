import { O as push, X as escape_html, Q as pop, a0 as ensure_array_like, _ as attr_class } from './index-BaZFIA8u.js';

function Carousel($$payload, $$props) {
  push();
  let { data } = $$props;
  let currentIndex = 0;
  $$payload.out.push(`<div class="relative flex w-full max-w-3xl flex-col items-center justify-center gap-3 overflow-hidden">`);
  if (data.length > 0) {
    $$payload.out.push("<!--[-->");
    const each_array = ensure_array_like(data);
    $$payload.out.push(`<!--[-->`);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let cons = each_array[i];
      $$payload.out.push(`<div${attr_class("flex w-full flex-shrink-0 items-center justify-center", void 0, { "hidden": currentIndex !== i })}><button><div class="flex h-64 w-[250px] flex-col items-center justify-center gap-4 rounded-xl border-2 bg-white text-xl text-clip">${escape_html(cons.email.sender.name)}
						${escape_html(cons.email.sender.email)}
						${escape_html(cons.status)}</div></button></div>`);
    }
    $$payload.out.push(`<!--]--> <p>${escape_html(currentIndex + 1)}/${escape_html(data.length)}</p>`);
  } else {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`<p>No Consultation for this Account</p>`);
  }
  $$payload.out.push(`<!--]--></div>`);
  pop();
}
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  const user = data.user;
  $$payload.out.push(`<div class="flex w-full max-w-xs flex-col items-center justify-center overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-950/5"><div class="h-max w-full rounded text-center"><h6 class="font-sans text-base font-bold text-current antialiased md:text-lg lg:text-xl">${escape_html(user.FullName)}</h6> <p class="text-center font-sans text-slate-600 antialiased">${escape_html(user.email)}</p></div> <div class="w-full rounded px-3 pt-1.5 pb-3">`);
  Carousel($$payload, { data: user.Emails });
  $$payload.out.push(`<!----></div></div>`);
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-5Yl5EyY5.js.map
