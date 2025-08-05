import { O as push, T as copy_payload, V as assign_payload, Q as pop, Z as attr, X as escape_html, a0 as ensure_array_like } from './index-BaZFIA8u.js';
import { p as page } from './index3-B4r8ZjVI.js';
import './exports-Cv9LZeD1.js';
import './state.svelte-BU61w6k3.js';
import 'firebase/firestore';
import './firebase-ULSLx_tm.js';
import { M as Modal } from './Modal-D3D3EQgk.js';
import './client-D07vpx2t.js';
import './index2-BIwi7_Gr.js';
import 'firebase/app';
import 'firebase/auth';

function EmailForm($$payload, $$props) {
  push();
  let to = "a.mussari@studenti.unipi.it";
  let subject = "TEST";
  let message = "TESTING";
  let attachments = [];
  let isSubmitting = false;
  let error = { value: "" };
  let showModal = error.value.length > 0;
  function formatFileSize(bytes) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  }
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out.push(`<div class="flex items-center justify-center"><div class="flex w-[300px] flex-col items-center justify-center"><form class="flex flex-col items-center gap-1 rounded-lg bg-white p-5 shadow-lg" method="POST" action="?/sendEmail"><div class="flex items-center justify-between gap-4"><label for="sender-mail" class="block text-sm font-medium text-gray-700">To</label> <input id="sender-mail" type="email"${attr("value", to)} placeholder="recipient@example.com" class="w-full rounded-md border border-gray-300 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"/></div> `);
    {
      $$payload2.out.push("<!--[-->");
      $$payload2.out.push(`<button type="button" class="text-sm font-medium text-blue-600 hover:text-blue-800">+ Add CC/BCC</button>`);
    }
    $$payload2.out.push(`<!--]--> `);
    {
      $$payload2.out.push("<!--[!-->");
    }
    $$payload2.out.push(`<!--]--> <div><label for="subject" class="mb-2 block text-sm font-medium text-gray-700">Subject <span class="text-red-500">*</span></label> <input id="subject" type="text"${attr("value", subject)} placeholder="Enter email subject" class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"/></div> <div><label for="message" class="mb-2 block text-sm font-medium text-gray-700">Message <span class="text-red-500">*</span></label> <textarea id="message" rows="6" placeholder="Enter your message here..." class="w-full resize-y rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none">`);
    const $$body = escape_html(message);
    if ($$body) {
      $$payload2.out.push(`${$$body}`);
    }
    $$payload2.out.push(`</textarea></div> <div class="flex flex-col items-center gap-2"><label for="files" class="mb-2 block text-sm font-medium text-gray-700">Attachments</label> <input id="files" type="file" multiple class="hidden"/> `);
    if (attachments.length > 0) {
      $$payload2.out.push("<!--[-->");
      const each_array = ensure_array_like(attachments);
      $$payload2.out.push(`<div class="space-y-2"><!--[-->`);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let attachment = each_array[$$index];
        $$payload2.out.push(`<div class="file-item flex items-center justify-between rounded-lg bg-gray-50 svelte-1qutyk1"><div class="flex items-center justify-center gap-1"><div><p class="font-medium text-gray-900">${escape_html(attachment.name)}</p> <p class="text-sm text-gray-500">${escape_html(formatFileSize(attachment.size))}</p></div></div> <button type="button" class="font-medium text-red-500 hover:text-red-700">✕</button></div>`);
      }
      $$payload2.out.push(`<!--]--></div>`);
    } else {
      $$payload2.out.push("<!--[!-->");
    }
    $$payload2.out.push(`<!--]--> <div class="text-sm text-gray-500">${escape_html(attachments.length)} file(s) attached</div></div> <div class="flex flex-col items-center justify-between"><div class="flex gap-3"><button type="button" class="rounded-md border border-gray-300 font-medium text-gray-700 transition-colors hover:bg-gray-50">Cancel</button> <button type="submit"${attr("disabled", isSubmitting, true)} class="h-[30px] w-[100px] transform rounded-md bg-blue-600 font-medium text-white transition-all hover:scale-105 hover:from-blue-700 hover:to-purple-700 disabled:transform-none disabled:cursor-not-allowed disabled:opacity-50">${escape_html("Send Email")}</button></div></div></form></div></div> `);
    if (error.value.length > 0) {
      $$payload2.out.push("<!--[-->");
      {
        let header = function($$payload3) {
          $$payload3.out.push(`<h2>ERROR</h2>`);
        };
        Modal($$payload2, {
          get showModal() {
            return showModal;
          },
          set showModal($$value) {
            showModal = $$value;
            $$settled = false;
          },
          header,
          children: ($$payload3) => {
            $$payload3.out.push(`<!---->${escape_html(error.value)}`);
          },
          $$slots: { header: true, default: true }
        });
      }
    } else {
      $$payload2.out.push("<!--[!-->");
    }
    $$payload2.out.push(`<!--]-->`);
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  pop();
}
function _page($$payload, $$props) {
  push();
  let showModal = false;
  let error = page.error !== null || page.form && page.form.error;
  if (error) {
    showModal = true;
  }
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    EmailForm($$payload2);
    $$payload2.out.push(`<!----> `);
    if (error) {
      $$payload2.out.push("<!--[-->");
      {
        let header = function($$payload3) {
          $$payload3.out.push(`<h2>ERROR</h2>`);
        };
        Modal($$payload2, {
          get showModal() {
            return showModal;
          },
          set showModal($$value) {
            showModal = $$value;
            $$settled = false;
          },
          header,
          children: ($$payload3) => {
            $$payload3.out.push(`<!---->${escape_html(page.error?.message || page.form.error.message)}`);
          },
          $$slots: { header: true, default: true }
        });
      }
    } else {
      $$payload2.out.push("<!--[!-->");
    }
    $$payload2.out.push(`<!--]-->`);
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-DEBtNSnJ.js.map
