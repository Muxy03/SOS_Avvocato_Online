import { O as push, V as escape_html, Q as pop } from './index-DwtfPoHx.js';

function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  console.log("data.Consultation:", data.consultation);
  if (data.consultation === void 0) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<p>Loading...</p>`);
  } else {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`<div class="flex-flex-col items-center justify-center gap-10"><div class="flex w-full flex-col items-center justify-center border-2 bg-white"><h1 class="text-2xl font-bold">Consultation Details</h1> <p><strong>Subject:</strong> ${escape_html(data.consultation.email.subject)}</p> <p><strong>Status:</strong> ${escape_html(data.consultation.status)}</p> ${html(data.consultation.email.htmlContent)}</div> <div class="flex w-full items-center justify-center"><button class="btn btn-primary">Edit Consultation</button></div></div>`);
  }
  $$payload.out.push(`<!--]-->`);
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-CMOPPPxo.js.map
