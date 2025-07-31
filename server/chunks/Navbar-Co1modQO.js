import { u as push, F as attr, y as escape_html, J as attr_class, N as bind_props, w as pop } from './index-tKQS1tGf.js';
import './exports-BXJ_0DG8.js';
import './state.svelte-CjJfVXvW.js';

function Navbar($$payload, $$props) {
  push();
  let { user = void 0 } = $$props;
  let logoSrc = "/logo.svg";
  let currentLang = "ENG";
  $$payload.out.push(`<div class="fixed top-0 right-0 left-0 z-50 h-15" role="presentation"><nav class="flex h-full items-center justify-between bg-white px-4 shadow-lg backdrop-blur-sm"><div class="flex items-center gap-4"><img${attr("src", logoSrc)} alt="Logo" class="h-10 w-10 rounded-lg shadow-md"/> <h1 class="text-center text-sm font-semibold text-black drop-shadow-md">SOS Avvocato Online</h1></div> <div class="flex items-center gap-3"><div class="relative flex items-center gap-1"><button class="black/30 hover:black/50 flex h-8 min-w-[35px] items-center justify-center rounded-full border-2 bg-white/20 px-4 py-2 text-lg font-bold text-black backdrop-blur-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-white/30 hover:shadow-lg active:translate-y-0" title="Help">?</button> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></div> <div class="relative"><button class="black/30 hover:black/50 flex h-8 min-w-[35px] items-center justify-center rounded-full border-2 bg-white/20 px-4 py-2 text-lg text-black backdrop-blur-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-white/30 hover:shadow-lg active:translate-y-0" title="Profile">👤</button> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></div> <div class="relative"><button class="black/30 hover:black/50 flex h-8 min-w-[35px] items-center justify-center rounded-full border-2 bg-white/20 px-4 py-2 text-sm font-semibold text-black backdrop-blur-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-white/30 hover:shadow-lg active:translate-y-0" title="Language">${escape_html(currentLang)}</button> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></div> <div class="relative"><button aria-label="Online"${attr_class(`flex h-8 min-w-[35px] items-center justify-center rounded-full border-2 ${"bg-green-100"} px-4 py-2 text-lg backdrop-blur-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg active:translate-y-0`)}><div${attr_class(`h-3 w-3 rounded-full ${"bg-green-500"}`)}></div></button></div></div></nav></div> <div class="h-20"></div>`);
  bind_props($$props, { user });
  pop();
}

export { Navbar as N };
//# sourceMappingURL=Navbar-Co1modQO.js.map
