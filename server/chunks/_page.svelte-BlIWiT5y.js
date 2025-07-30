import { u as push, z as getContext, F as attr, J as attr_class, y as escape_html, w as pop } from './index-CJFxRk-N.js';
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
  const { error } = getContext("App");
  const emailValid = email.includes("@") && email.includes(".");
  const passwordValid = password.length >= 6;
  const fullNameValid = fullName.length > 0;
  const formValid = emailValid && passwordValid && fullNameValid;
  $$payload.out.push(`<div class="relative container flex min-h-screen min-w-screen flex-col items-center justify-center p-4"><div class="auth-card"><div class="auth-header"><h1>Registrati</h1></div> <form class="auth-form" method="POST" action="?/register"><div class="form-group"><label for="fullName">Nome Completo</label> <input id="fullName" type="text"${attr(
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
  if (error.value.length > 0) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<div class="error-message max-w-full text-clip">${escape_html(error.value)}</div>`);
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> <button type="submit" class="btn btn-primary"${attr("disabled", !formValid, true)}>`);
  {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`Crea Account`);
  }
  $$payload.out.push(`<!--]--></button></form> <div class="auth-switch"><p>Hai già un account? <button type="button" class="link-btn">Accedi</button></p></div></div></div>`);
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-BlIWiT5y.js.map
