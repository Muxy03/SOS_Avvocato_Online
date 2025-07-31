import { u as push, z as getContext, y as escape_html, w as pop, F as attr } from './index-tKQS1tGf.js';
import { n as navigating } from './index3-CWF-UdUn.js';
import './firebase-Bsqixs1C.js';
import 'firebase/auth';
import './state.svelte-CjJfVXvW.js';
import './exports-BXJ_0DG8.js';
import './index2-kL9U-GfV.js';
import 'firebase/app';
import 'firebase/firestore';

function getInitials(name, email) {
  if (name && name.trim()) {
    return name.trim().split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
  }
  return email.charAt(0).toUpperCase();
}
const logo = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='107'%20height='128'%20viewBox='0%200%20107%20128'%3e%3ctitle%3esvelte-logo%3c/title%3e%3cpath%20d='M94.157%2022.819c-10.4-14.885-30.94-19.297-45.792-9.835L22.282%2029.608A29.92%2029.92%200%200%200%208.764%2049.65a31.5%2031.5%200%200%200%203.108%2020.231%2030%2030%200%200%200-4.477%2011.183%2031.9%2031.9%200%200%200%205.448%2024.116c10.402%2014.887%2030.942%2019.297%2045.791%209.835l26.083-16.624A29.92%2029.92%200%200%200%2098.235%2078.35a31.53%2031.53%200%200%200-3.105-20.232%2030%2030%200%200%200%204.474-11.182%2031.88%2031.88%200%200%200-5.447-24.116'%20style='fill:%23ff3e00'/%3e%3cpath%20d='M45.817%20106.582a20.72%2020.72%200%200%201-22.237-8.243%2019.17%2019.17%200%200%201-3.277-14.503%2018%2018%200%200%201%20.624-2.435l.49-1.498%201.337.981a33.6%2033.6%200%200%200%2010.203%205.098l.97.294-.09.968a5.85%205.85%200%200%200%201.052%203.878%206.24%206.24%200%200%200%206.695%202.485%205.8%205.8%200%200%200%201.603-.704L69.27%2076.28a5.43%205.43%200%200%200%202.45-3.631%205.8%205.8%200%200%200-.987-4.371%206.24%206.24%200%200%200-6.698-2.487%205.7%205.7%200%200%200-1.6.704l-9.953%206.345a19%2019%200%200%201-5.296%202.326%2020.72%2020.72%200%200%201-22.237-8.243%2019.17%2019.17%200%200%201-3.277-14.502%2017.99%2017.99%200%200%201%208.13-12.052l26.081-16.623a19%2019%200%200%201%205.3-2.329%2020.72%2020.72%200%200%201%2022.237%208.243%2019.17%2019.17%200%200%201%203.277%2014.503%2018%2018%200%200%201-.624%202.435l-.49%201.498-1.337-.98a33.6%2033.6%200%200%200-10.203-5.1l-.97-.294.09-.968a5.86%205.86%200%200%200-1.052-3.878%206.24%206.24%200%200%200-6.696-2.485%205.8%205.8%200%200%200-1.602.704L37.73%2051.72a5.42%205.42%200%200%200-2.449%203.63%205.79%205.79%200%200%200%20.986%204.372%206.24%206.24%200%200%200%206.698%202.486%205.8%205.8%200%200%200%201.602-.704l9.952-6.342a19%2019%200%200%201%205.295-2.328%2020.72%2020.72%200%200%201%2022.237%208.242%2019.17%2019.17%200%200%201%203.277%2014.503%2018%2018%200%200%201-8.13%2012.053l-26.081%2016.622a19%2019%200%200%201-5.3%202.328'%20style='fill:%23fff'/%3e%3c/svg%3e";
function LoadingPage($$payload) {
  $$payload.out.push(`<div class="min-w-screen imtes-center flex min-h-screen justify-center svelte-11yp5t4"><img${attr("src", logo)} alt="Logo" class="zoom-in-out-element svelte-11yp5t4" width="100" height="100"/></div>`);
}
function _page($$payload, $$props) {
  push();
  const { isOnline, isLoading, user, error } = getContext("App");
  let { data } = $$props;
  isLoading.value = navigating.complete !== null;
  user.value = data;
  const reload = () => {
    window.location.reload();
  };
  if (!isOnline.value) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<div class="offline-banner"><span class="offline-icon">📶</span> Modalità offline</div>`);
  } else {
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
      $$payload.out.push(`<div class="animate-slideUp mx-auto flex h-[250px] w-[300px] flex-col items-center justify-center gap-4 rounded-2xl bg-white p-6 text-gray-900 shadow-2xl dark:bg-gray-800 dark:text-gray-100"><h1 class="text-3xl font-extrabold tracking-tight text-gray-800 dark:text-gray-100">Bentornato!</h1> <div class="flex flex-col items-center justify-center gap-4"><div class="flex flex-col items-center gap-5 text-center">`);
      if (!isOnline.value) {
        $$payload.out.push("<!--[-->");
        $$payload.out.push(`<div class="flex items-center justify-center gap-2 rounded-xl bg-yellow-100 text-center text-sm text-yellow-800"><span class="rounded bg-yellow-500 text-xs font-semibold text-white">Offline</span> Dati memorizzati localmente</div>`);
      } else {
        $$payload.out.push("<!--[!-->");
      }
      $$payload.out.push(`<!--]--> <a href="/home" target="_self" rel="noopener noreferrer" aria-label="/home" class="w-full"><div class="flex h-[60px] w-[280px] items-center gap-1 rounded-2xl bg-gray-100 dark:bg-gray-700"><div class="flex h-10 w-10 flex-1/4 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-sm font-bold text-white">${escape_html(getInitials(user.value.FullName ?? "", user.value.email ?? ""))}</div> <div class="w-full flex-3/4 text-center"><h2 class="text-xl font-bold break-words text-gray-800 dark:text-gray-100">${escape_html(user.value.FullName ?? "JD")}</h2> <p class="text-sm break-all text-gray-500 dark:text-gray-400">${escape_html(user.value.email)}</p></div></div></a></div></div> <div class="flex flex-col gap-4"><button type="button" class="rounded-xl border-2 border-gray-200 bg-gray-100 px-6 py-4 text-base font-semibold text-slate-600 transition hover:border-gray-300 hover:bg-gray-200">Disconnetti</button></div></div>`);
    } else {
      $$payload.out.push("<!--[!-->");
      $$payload.out.push(`${escape_html(reload())}`);
    }
    $$payload.out.push(`<!--]-->`);
  }
  $$payload.out.push(`<!--]-->`);
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-W7OQTNuq.js.map
