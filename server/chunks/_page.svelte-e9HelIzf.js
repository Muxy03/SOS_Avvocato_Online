import { e as escape_html } from './escaping-BQR1pbqy.js';
import { u as push, w as pop } from './index-C75zWgGl.js';

function _page($$payload, $$props) {
  push();
  let files = void 0;
  ({ ...files });
  let textEmail = "";
  $$payload.out += `<div class="flex items-center"><div class="min-w-[250px] max-w-full bg-white"><form class="flex flex-col items-center gap-6" method="POST"><div class="mb-5 flex flex-col gap-4"><div class="flex justify-between items-center gap-8"><label for="email" class="block text-base font-medium text-[#07074D]">Send Request:</label> <label for="file" class="mb-5 block text-xl font-semibold text-[#07074D]"><svg fill="#000000" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" data-darkreader-inline-fill="" style="--darkreader-inline-fill: var(--darkreader-background-000000, #000000);"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><g><g><path d="M359.784,103.784v262.919c0,57.226-46.557,103.784-103.784,103.784s-103.784-46.557-103.784-103.784V103.784 c0-34.336,27.934-62.27,62.27-62.27c34.336,0,62.27,27.934,62.27,62.27v262.919c0,11.445-9.312,20.757-20.757,20.757 s-20.757-9.311-20.757-20.757V103.784H193.73v262.919c0,34.336,27.934,62.27,62.27,62.27s62.27-27.934,62.27-62.27V103.784 C318.27,46.557,271.713,0,214.487,0S110.703,46.557,110.703,103.784v262.919C110.703,446.82,175.883,512,256,512 s145.297-65.18,145.297-145.297V103.784H359.784z"></path></g></g></g></svg></label> <input multiple type="file" name="file" id="file" class="sr-only"/></div> <textarea class="min-h-[200px] w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">`;
  const $$body = escape_html(textEmail);
  if ($$body) {
    $$payload.out += `${$$body}`;
  }
  $$payload.out += `</textarea></div> <div class="mx-auto flex w-full flex-col items-center gap-3.5">`;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> <div><button class="hover:shadow-form h-16 w-24 rounded-md bg-[#6A64F1] text-center text-base font-semibold text-white outline-none">Send File</button></div></form></div></div>`;
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-e9HelIzf.js.map
