import { O as push, Z as attr, V as escape_html, a2 as ensure_array_like, Q as pop } from './index-Q41OkFP-.js';
import './exports-Cv9LZeD1.js';
import './state.svelte-DILCCdx_.js';
import 'firebase/firestore';
import './firebase-ULSLx_tm.js';
import 'firebase/app';
import 'firebase/auth';

function EmailForm($$payload, $$props) {
  push();
  let to = "a.mussari@studenti.unipi.it";
  let subject = "TEST";
  let message = "TESTING";
  let attachments = [];
  let isSubmitting = false;
  function formatFileSize(bytes) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  }
  $$payload.out.push(`<div class="flex items-center justify-center"><div class="flex w-[300px] flex-col items-center justify-center"><form class="flex flex-col items-center gap-1 rounded-lg bg-white shadow-lg p-5" method="POST" action="?/sendEmail"><div class="flex items-center justify-between gap-4"><label for="sender-mail" class="block text-sm font-medium text-gray-700">To</label> <input id="sender-mail" type="email"${attr(
    "value",
    // Add form data
    // TODO: Handle FIREBASE ERROR
    //error.value = result.data?.code as string;
    to
  )} placeholder="recipient@example.com" class="w-full rounded-md border border-gray-300 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"/></div> `);
  {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<button type="button" class="text-sm font-medium text-blue-600 hover:text-blue-800">+ Add CC/BCC</button>`);
  }
  $$payload.out.push(`<!--]--> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> <div><label for="subject" class="mb-2 block text-sm font-medium text-gray-700">Subject <span class="text-red-500">*</span></label> <input id="subject" type="text"${attr("value", subject)} placeholder="Enter email subject" class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"/></div> <div><label for="message" class="mb-2 block text-sm font-medium text-gray-700">Message <span class="text-red-500">*</span></label> <textarea id="message" rows="6" placeholder="Enter your message here..." class="w-full resize-y rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500">`);
  const $$body = escape_html(message);
  if ($$body) {
    $$payload.out.push(`${$$body}`);
  }
  $$payload.out.push(`</textarea></div> <div class="flex flex-col items-center gap-2"><label for="files" class="mb-2 block text-sm font-medium text-gray-700">Attachments</label> <input id="files" type="file" multiple class="hidden"/> `);
  if (attachments.length > 0) {
    $$payload.out.push("<!--[-->");
    const each_array = ensure_array_like(attachments);
    $$payload.out.push(`<div class="space-y-2"><!--[-->`);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let attachment = each_array[$$index];
      $$payload.out.push(`<div class="file-item flex items-center justify-between rounded-lg bg-gray-50 svelte-1qutyk1"><div class="flex items-center justify-center gap-1"><div><p class="font-medium text-gray-900">${escape_html(attachment.name)}</p> <p class="text-sm text-gray-500">${escape_html(formatFileSize(attachment.size))}</p></div></div> <button type="button" class="font-medium text-red-500 hover:text-red-700">✕</button></div>`);
    }
    $$payload.out.push(`<!--]--></div>`);
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> <div class="text-sm text-gray-500">${escape_html(attachments.length)} file(s) attached</div></div> <div class="flex flex-col items-center justify-between"><div class="flex gap-3"><button type="button" class="rounded-md border border-gray-300 font-medium text-gray-700 transition-colors hover:bg-gray-50">Cancel</button> <button type="submit"${attr("disabled", isSubmitting, true)} class="h-[30px] w-[100px] transform rounded-md bg-blue-600 font-medium text-white transition-all hover:scale-105 hover:from-blue-700 hover:to-purple-700 disabled:transform-none disabled:cursor-not-allowed disabled:opacity-50">${escape_html("Send Email")}</button></div></div></form></div></div>`);
  pop();
}
function _page($$payload) {
  EmailForm($$payload);
}

export { _page as default };
//# sourceMappingURL=_page.svelte-CRDjj7WS.js.map
