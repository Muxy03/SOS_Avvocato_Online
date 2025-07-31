import { u as push, F as attr, J as attr_class, w as pop } from './index-tKQS1tGf.js';
import './exports-BXJ_0DG8.js';
import './state.svelte-CjJfVXvW.js';
import './firebase-Bsqixs1C.js';
import './index-DMcSsXGi.js';
import 'firebase/auth';
import 'firebase/app';
import 'firebase/firestore';

function _page($$payload, $$props) {
  push();
  let email = "";
  let password = "";
  let fullName = "";
  const emailValid = email.includes("@") && email.includes(".");
  const passwordValid = password.length >= 6;
  const fullNameValid = fullName.length > 0;
  const formValid = emailValid && passwordValid && fullNameValid;
  $$payload.out.push(`<div class="relative container flex flex-col items-center justify-center"><div class="auth-card flex flex-col items-center justify-center gap-3"><div class="auth-header"><h1>Registrati</h1></div> <form class="auth-form" method="POST" action="?/register"><div class="form-group"><label for="fullName">Nome Completo</label> <input id="fullName" type="text"${attr(
    "value",
    // Add form data
    // TODO: Handle FIREBASE ERROR
    fullName
  )} placeholder="Inserisci Nome e Cognome"${attr_class("form-input", void 0, { "invalid": fullName })} required/> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></div> <div class="form-group"><label for="email">Indirizzo Email</label> <input id="email" type="email"${attr("value", email)} placeholder="Inserisci la tua email"${attr_class("form-input", void 0, { "invalid": email })} autocomplete="email" required/> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></div> <div class="form-group"><label for="password">Password</label> <input id="password" type="password"${attr("value", password)} placeholder="Inserisci la tua password"${attr_class("form-input", void 0, { "invalid": password })} autocomplete="new-password" required/> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></div> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> <button type="submit" class="btn btn-primary"${attr("disabled", !formValid, true)}>`);
  {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`Crea Account`);
  }
  $$payload.out.push(`<!--]--></button></form> <div class="w-full auth-switch flex flex-col items-center justify-center gap-2"><div class="w-full border-t border-gray-600"></div> <p>Hai già un account? <a href="/login"><button type="button" class="link-btn">Accedi</button></a></p></div></div></div>`);
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-BeovOD_8.js.map
