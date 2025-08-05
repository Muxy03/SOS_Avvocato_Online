import { V as escape_html, Z as attr, a1 as stringify } from './index-DwtfPoHx.js';

function _page($$payload, $$props) {
  let { data } = $$props;
  const { consultations, error } = data;
  let current = 0;
  $$payload.out.push(`<div class="flex w-full flex-col items-center justify-center gap-3">`);
  if (consultations.length === 0) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<p class="text-center text-xl font-bold text-gray-900">Nessuna consultazione trovata</p>`);
  } else {
    $$payload.out.push("<!--[!-->");
    if (error) {
      $$payload.out.push("<!--[-->");
      $$payload.out.push(`<p class="text-center text-xl font-bold text-red-600">Errore: ${escape_html(error)}</p>`);
    } else {
      $$payload.out.push("<!--[!-->");
      $$payload.out.push(`<a${attr("href", `/consultation/${stringify(consultations[current].id)}`)}><div class="flex h-[100px] w-[200px] flex-col items-center justify-center rounded-lg border border-white bg-white"><h5 class="text-center text-xl font-bold tracking-tight text-wrap text-gray-900">${escape_html(consultations[current].email.sender.name)}</h5> <p class="text-center leading-tight font-normal text-gray-700">${escape_html(consultations[current].status)}</p></div></a> <div class="flex w-[60px] items-center justify-around gap-1 rounded-lg border bg-white">${escape_html(current + 1)} / ${escape_html(consultations.length)}</div> <div class="flex w-full items-center justify-around"><button type="button" class="rounded-lg border-2 border-white bg-white">Indietro</button> <button type="button" class="rounded-lg border-2 border-white bg-white">Avanti</button></div>`);
    }
    $$payload.out.push(`<!--]-->`);
  }
  $$payload.out.push(`<!--]--></div>`);
}

export { _page as default };
//# sourceMappingURL=_page.svelte-y7r6Y6x_.js.map
