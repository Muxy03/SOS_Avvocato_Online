import { O as push, $ as await_block, Q as pop, Z as attr, X as escape_html } from './index-BaZFIA8u.js';
import { n as navigating } from './index3-B4r8ZjVI.js';
import { l as logo } from './LOGO-DgCD75WC.js';
import './firebase-ULSLx_tm.js';
import 'firebase/auth';
import './client-D07vpx2t.js';
import './state.svelte-BU61w6k3.js';
import './exports-Cv9LZeD1.js';
import './index2-BIwi7_Gr.js';
import 'firebase/app';
import 'firebase/firestore';

function getInitials(name, email) {
  if (name && name.trim()) {
    return name.trim().split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
  }
  return email.charAt(0).toUpperCase();
}
function LoadingPage($$payload) {
  $$payload.out.push(`<div class="min-w-screen imtes-center flex min-h-screen justify-center"><img${attr("src", logo)} alt="Logo" class="animate-ping" width="100" height="100"/></div>`);
}
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  let user = { value: void 0 };
  const isLoading = { value: navigating.complete !== null };
  isLoading.value = navigating.complete !== null;
  user.value = data;
  async function setUser() {
    const response = await fetch("/api/session", { method: "GET", credentials: "same-origin" });
    if (response.status === 200) {
      const userSession = await response.json();
      user.value = userSession;
    }
  }
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> `);
  if (isLoading.value) {
    $$payload.out.push("<!--[-->");
    LoadingPage($$payload);
  } else {
    $$payload.out.push("<!--[!-->");
    if (user.value !== void 0) {
      $$payload.out.push("<!--[-->");
      $$payload.out.push(`<div class="animate-slideUp mx-auto flex h-[250px] w-[300px] flex-col items-center justify-center gap-4 rounded-2xl bg-white text-gray-900 shadow-2xl"><h1 class="text-3xl font-extrabold tracking-tight text-gray-800">Bentornato!</h1> <div class="flex flex-col items-center justify-center gap-4"><div class="flex flex-col items-center gap-5 text-center">`);
      {
        $$payload.out.push("<!--[!-->");
      }
      $$payload.out.push(`<!--]--> `);
      await_block(
        $$payload,
        setUser(),
        () => {
          $$payload.out.push(`<p>LOADING...</p>`);
        },
        (_) => {
          $$payload.out.push(`<a href="/home" target="_self" rel="noopener noreferrer" aria-label="/home" class="w-full"><div class="flex h-[60px] w-[280px] items-center gap-1 rounded-2xl bg-blue-500"><div class="flex-1/4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-sm font-bold text-white">${escape_html(getInitials(user.value.FullName, user.value.email))}</div> <div class="flex-3/4 w-full text-center"><h2 class="break-words text-xl font-bold text-white">${escape_html(user.value.FullName)}</h2> <p class="break-all text-sm text-white">${escape_html(user.value.email)}</p></div></div></a>`);
        }
      );
      $$payload.out.push(`<!--]--></div></div> <div class="flex flex-col gap-4"><button type="button" class="rounded-xl border-2 border-gray-200 bg-gray-100 px-6 py-4 text-base font-semibold text-slate-600 transition hover:border-gray-300 hover:bg-gray-200">Disconnetti</button></div></div>`);
    } else {
      $$payload.out.push("<!--[!-->");
    }
    $$payload.out.push(`<!--]-->`);
  }
  $$payload.out.push(`<!--]-->`);
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-CaIcKKs_.js.map
