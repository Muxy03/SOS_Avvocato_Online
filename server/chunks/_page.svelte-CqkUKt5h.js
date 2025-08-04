import { O as push, Z as attr, _ as attr_class, V as escape_html, Q as pop } from './index-Q41OkFP-.js';
import './firebase-ULSLx_tm.js';
import 'firebase/auth';
import './exports-Cv9LZeD1.js';
import './state.svelte-DILCCdx_.js';
import 'firebase/app';
import 'firebase/firestore';

function _page($$payload, $$props) {
  push();
  let email = "";
  let password = "";
  const emailValid = email.includes("@") && email.includes(".");
  const passwordValid = password.length >= 6;
  const formValid = emailValid && passwordValid;
  let error = { value: "" };
  $$payload.out.push(`<div class="min-w-screen container relative flex min-h-screen flex-col items-center justify-center p-4"><div class="auth-card flex flex-col items-center justify-center gap-3"><div class="auth-header"><h1>Accedi</h1></div> <form class="auth-form" method="POST" action="?/login"><div class="form-group"><label for="email">Indirizzo Email</label> <input id="email" type="email"${attr(
    "value",
    // let RememberMe: { value: boolean } | undefined = $state({ value: undefined });
    // onMount(() => {
    // 	const App: AppContext = getContext('App');
    // 	RememberMe = { ...App.RememberMe };
    // 	user = { ...App.user };
    // 	error = { ...App.error };
    // });
    // Set loading state
    // Add form data
    // TODO: HANDLE FIREBASE ERROR
    //error.value = result.data?.error as string;
    email
  )}${attr("placeholder", "Inserisci la tua email")}${attr_class("form-input", void 0, { "invalid": email })} autocomplete="email" required/> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></div> <div class="form-group"><label for="password">Password</label> <input id="password" type="password"${attr("value", password)} placeholder="Inserisci la tua password"${attr_class("form-input", void 0, { "invalid": password })} autocomplete="current-password" required/> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></div> <div class="form-options"><label class="checkbox-label"><input type="checkbox" class="checkbox"/> <span class="checkmark"></span> Ricordami</label></div> `);
  if (error !== void 0 && error.value !== void 0 && error.value.length > 0) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<div class="error-message">${escape_html(error?.value)}</div>`);
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> <button type="submit" class="btn btn-primary"${attr("disabled", !formValid, true)}>`);
  {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`Accedi`);
  }
  $$payload.out.push(`<!--]--></button></form> <div class="auth-switch flex w-full flex-col items-center justify-center gap-2"><div class="w-full border-t border-gray-600"></div> <p>Non hai un account? <a href="/register"><button type="button" class="link-btn">Registrati</button></a></p></div></div></div>`);
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-CqkUKt5h.js.map
