System.register(["./chunk-frameworks.js","./chunk-vendor.js"],(function(){"use strict";var e,t,o;return{setters:[function(t){e=t.e},function(e){t=e.a,o=e.r}],execute:function(){var s=Object.defineProperty,c=(e,t)=>s(e,"name",{value:t,configurable:!0});function n(e){const t=e.querySelector(".js-topic-suggestions-box");t.querySelector(".js-topic-suggestion")||t.remove()}function r(e){const t=e.closest(".js-topic-save-notice-container").querySelector(".js-repo-topics-save-notice");t.classList.remove("d-none"),t.classList.add("d-inline-block","anim-fade-in"),setTimeout((()=>{t.classList.remove("d-inline-block"),t.classList.add("d-none")}),1900)}async function i(t){const o=t.querySelector(".js-topic-suggestions-container");if(!o)return;const s=o.getAttribute("data-url");if(!s)throw new Error("could not get url");const c=await e(document,s);o.innerHTML="",o.appendChild(c)}t("click",".js-accept-topic-button",(function(e){const t=e.currentTarget,o=t.closest(".js-topic-form-area"),s=t.closest(".js-topic-suggestion"),c=o.querySelector(".js-template"),r=o.querySelector(".js-tag-input-selected-tags"),i=c.cloneNode(!0),a=t.getAttribute("data-topic-name")||"";i.querySelector("input").value=a,i.querySelector(".js-placeholder-tag-name").replaceWith(a),i.classList.remove("d-none","js-template"),r.appendChild(i),s.remove(),n(o)})),o(".js-accept-topic-form",(async function(e,t){await t.html();const o=e.closest(".js-topic-form-area"),s=e.closest(".js-topic-suggestion"),c=o.querySelector(".js-template"),a=o.querySelector(".js-tag-input-selected-tags"),l=c.cloneNode(!0),u=s.querySelector('input[name="input[name]"]').value;l.querySelector("input").value=u,l.querySelector(".js-placeholder-tag-name").replaceWith(u),l.classList.remove("d-none","js-template"),a.appendChild(l),s.remove(),i(o),n(o),r(e)})),t("click",".js-decline-topic-button",(function(e){const t=e.currentTarget,o=t.closest(".js-topic-form-area"),s=t.closest(".js-topic-suggestion");setTimeout((()=>{s.remove(),n(o)}),0)})),o(".js-decline-topic-form",(async function(e,t){await t.html(),r(e);const o=e.closest(".js-topic-form-area");e.closest(".js-topic-suggestion").remove(),i(o),n(o)})),c(n,"removeEmptySuggestionList"),c(r,"flashNotice"),c(i,"refreshSuggestions")}}}));