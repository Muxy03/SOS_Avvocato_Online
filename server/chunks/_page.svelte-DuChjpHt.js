import { O as push, Z as attr, _ as attr_class, V as escape_html, Q as pop } from './index-Q41OkFP-.js';
import './exports-Cv9LZeD1.js';
import './state.svelte-DILCCdx_.js';
import './firebase-ULSLx_tm.js';
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
  let error = { value: "" };
  $$payload.out.push(`<div class="container relative flex flex-col items-center justify-center"><div class="auth-card flex flex-col items-center justify-center gap-3"><div class="auth-header"><h1>Registrati</h1></div> <form class="auth-form" method="POST" action="?/register"><div class="form-group"><label for="fullName">Nome Completo</label> <input id="fullName" type="text"${attr(
    "value",
    // let RememberMe: { value: boolean } | undefined = $state({ value: undefined });
    // onMount(() => {
    // 	const App: AppContext = getContext('App');
    // 	RememberMe = { ...App.RememberMe };
    // 	user = { ...App.user };
    // 	error = { ...App.error };
    // });
    // $effect(() => {
    // 	let tmp: AppContext = getContext('App');
    // 	if (user) {
    // 		tmp.user = user;
    // 	}
    // 	if (error) {
    // 		tmp.error = error;
    // 	}
    // 	if (RememberMe) {
    // 		tmp.RememberMe = RememberMe;
    // 	}
    // 	setContext('App', tmp);
    // });
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
  if (error !== void 0 && error.value !== void 0 && error.value.length > 0) {
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
  $$payload.out.push(`<!--]--></button></form> <div class="auth-switch flex w-full flex-col items-center justify-center gap-2"><div class="w-full border-t border-gray-600"></div> <p>Hai già un account? <a href="/login"><button type="button" class="link-btn">Accedi</button></a></p></div></div></div>`);
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-DuChjpHt.js.map
