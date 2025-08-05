import { O as push, Q as pop, W as copy_payload, X as assign_payload, Y as bind_props, Z as attr, V as escape_html, _ as attr_class } from './index-DwtfPoHx.js';
import { l as logo } from './LOGO-DgCD75WC.js';
import { M as Modal } from './Modal-DjPbsAjB.js';

const Lang = { value: "ITA" };
function Navbar($$payload, $$props) {
  push();
  let { user = void 0 } = $$props;
  let showModal = false;
  function Help($$payload2) {
    {
      let header = function($$payload3) {
        $$payload3.out.push(`<h2>modal <small><em>adjective</em> mod·al \\ˈmō-dəl\\</small></h2>`);
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
          $$payload3.out.push(`<ol class="definition-list"><li>of or relating to modality in logic</li> <li>containing provisions as to the mode of procedure or the manner of taking effect —used of a
				contract or legacy</li> <li>of or relating to a musical mode</li> <li>of or relating to structure as opposed to substance</li> <li>of, relating to, or constituting a grammatical form or category characteristically
				indicating predication</li> <li>of or relating to a statistical mode</li></ol> <a href="https://www.merriam-webster.com/dictionary/modal">merriam-webster.com</a>`);
        },
        $$slots: { header: true, default: true }
      });
    }
  }
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out.push(`<div class="fixed top-0 left-0 right-0 z-50 flex h-auto items-center justify-around pt-3" role="presentation"><nav class="flex h-full items-center justify-center gap-3 rounded-xl bg-white px-3 shadow-lg backdrop-blur-sm"><a href="/home" class="flex items-center justify-center"><img${attr("src", logo)} alt="Logo" class="h-20 w-20 rounded-lg"/></a> <div class="hidden md:lg:block"><h1 class="text-md text-wrap text-center font-semibold text-black drop-shadow-md">S.O.S Avvocato Online</h1></div> <div class="flex items-center gap-3"><div class="relative flex items-center gap-1"><button class="black/30 hover:black/50 flex h-8 min-w-[35px] items-center justify-center rounded-full border-2 bg-white/20 px-4 py-2 text-lg font-bold text-black backdrop-blur-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-white/30 hover:shadow-lg active:translate-y-0" title="Help">?</button> `);
    Help($$payload2);
    $$payload2.out.push(`<!----></div> <div class="relative"><button class="black/30 hover:black/50 flex h-8 min-w-[35px] items-center justify-center rounded-full border-2 bg-white/20 px-4 py-2 text-lg text-black backdrop-blur-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-white/30 hover:shadow-lg active:translate-y-0" title="Profile">👤</button></div> <div class="relative"><button class="black/30 hover:black/50 flex h-8 min-w-[35px] items-center justify-center rounded-full border-2 bg-white/20 px-4 py-2 text-sm font-semibold text-black backdrop-blur-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-white/30 hover:shadow-lg active:translate-y-0" title="Language">${escape_html(Lang.value)}</button></div> <div class="relative"><button aria-label="Online"${attr_class(`flex h-8 min-w-[35px] items-center justify-center rounded-full border-2 ${"bg-green-100"} px-4 py-2 text-lg backdrop-blur-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg active:translate-y-0`)}><div${attr_class(`h-3 w-3 rounded-full ${"bg-green-500"}`)}></div></button></div></div></nav></div>`);
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { user });
  pop();
}
function _layout($$payload, $$props) {
  push();
  let { data, children } = $$props;
  const user = { ...data.user };
  Navbar($$payload, { user });
  $$payload.out.push(`<!----> `);
  children($$payload);
  $$payload.out.push(`<!---->`);
  pop();
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-BaWw-6EA.js.map
