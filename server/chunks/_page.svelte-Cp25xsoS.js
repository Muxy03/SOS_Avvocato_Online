import { u as push, z as getContext, F as attr, y as escape_html, G as ensure_array_like, w as pop } from './index-CJFxRk-N.js';
import './exports-BXJ_0DG8.js';
import './state.svelte-CjJfVXvW.js';

function EmailForm($$payload, $$props) {
  push();
  let to = "a.mussari@studenti.unipi.it";
  let subject = "TEST";
  let message = "TESTING";
  let attachments = [];
  let isSubmitting = false;
  const { error } = getContext("App");
  function formatFileSize(bytes) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  }
  function getFileIcon(fileName) {
    return "📎";
  }
  $$payload.out.push(`<div class="flex min-h-screen items-center justify-center"><div class="flex h-[600px] w-[300px] flex-col items-center justify-center"><div class="flex flex-col items-center justify-around overflow-hidden rounded-lg bg-white shadow-lg"><div class="flex flex-col items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600"><h1 class="text-2xl font-bold text-white">Send Email</h1> <p class="text-center text-blue-100">Compose and send your message with attachments</p></div> <form class="flex flex-col" method="POST" action="?/sendEmail"><div class="flex items-center justify-between gap-4"><label for="sender-mail" class="block text-sm font-medium text-gray-700">To</label> <input id="sender-mail" type="email"${attr(
    "value",
    // Add form data
    // TODO: Handle FIREBASE ERROR
    to
  )} placeholder="recipient@example.com" class="w-full rounded-md border border-gray-300 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"/></div> `);
  {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<button type="button" class="text-sm font-medium text-blue-600 hover:text-blue-800">+ Add CC/BCC</button>`);
  }
  $$payload.out.push(`<!--]--> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> <div><label for="subject" class="mb-2 block text-sm font-medium text-gray-700">Subject <span class="text-red-500">*</span></label> <input id="subject" type="text"${attr("value", subject)} placeholder="Enter email subject" class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"/></div> <div><label for="message" class="mb-2 block text-sm font-medium text-gray-700">Message <span class="text-red-500">*</span></label> <textarea id="message" rows="6" placeholder="Enter your message here..." class="w-full resize-y rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none">`);
  const $$body = escape_html(message);
  if ($$body) {
    $$payload.out.push(`${$$body}`);
  }
  $$payload.out.push(`</textarea></div> <div><label for="files" class="mb-2 block text-sm font-medium text-gray-700">Attachments</label> <input id="files" type="file" multiple class="hidden"/> `);
  if (attachments.length > 0) {
    $$payload.out.push("<!--[-->");
    const each_array = ensure_array_like(attachments);
    $$payload.out.push(`<div class="mt-4 space-y-2"><!--[-->`);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let attachment = each_array[$$index];
      $$payload.out.push(`<div class="file-item flex items-center justify-between rounded-lg bg-gray-50 p-3 svelte-1qutyk1"><div class="flex items-center space-x-3"><span class="text-2xl">${escape_html(getFileIcon(attachment.name))}</span> <div><p class="font-medium text-gray-900">${escape_html(attachment.name)}</p> <p class="text-sm text-gray-500">${escape_html(formatFileSize(attachment.size))}</p></div></div> <button type="button" class="font-medium text-red-500 hover:text-red-700">✕</button></div>`);
    }
    $$payload.out.push(`<!--]--></div>`);
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></div> <div class="flex flex-col items-center justify-between space-y-3 border-t border-gray-200 pt-6 sm:flex-row sm:space-y-0"><div class="text-sm text-gray-500">${escape_html(attachments.length)} file(s) attached</div> <div class="flex gap-3"><button type="button" class="rounded-md border border-gray-300 font-medium text-gray-700 transition-colors hover:bg-gray-50">Cancel</button> <button type="submit"${attr("disabled", isSubmitting, true)} class="transform rounded-md bg-gradient-to-r from-blue-600 to-purple-600 font-medium text-white transition-all hover:scale-105 hover:from-blue-700 hover:to-purple-700 disabled:transform-none disabled:cursor-not-allowed disabled:opacity-50">${escape_html("Send Email")}</button></div></div></form></div></div></div>`);
  pop();
}
function _page($$payload) {
  EmailForm($$payload);
}

export { _page as default };
//# sourceMappingURL=_page.svelte-Cp25xsoS.js.map
