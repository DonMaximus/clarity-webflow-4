System.register([],(function(e){"use strict";return{execute:function(){e({a:c,b:r,g:a,s:i});var t=Object.defineProperty,o=(e,o)=>t(e,"name",{value:o,configurable:!0});function r(){return n("dark")?"dark":n("light")?"light":void 0}function n(e){return window.matchMedia&&window.matchMedia(`(prefers-color-scheme: ${e})`).matches}function c(e){const t=document.querySelector("html[data-color-mode]");!t||t.setAttribute("data-color-mode",e)}function i(e,t){const o=document.querySelector("html[data-color-mode]");!o||o.setAttribute(`data-${t}-theme`,e)}function a(e){const t=document.querySelector("html[data-color-mode]");if(t)return t.getAttribute(`data-${e}-theme`)}o(r,"getPreferredColorMode"),o(n,"prefersColorScheme"),o(c,"setClientMode"),o(i,"setClientTheme"),o(a,"getClientTheme")}}}));