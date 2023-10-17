var main=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let r,a;function l(t){return null==t?"":t}function u(t,e){t.appendChild(e)}function i(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function $(){return m(" ")}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function h(t){a=t}const g=[],v=[],x=[],b=[],y=Promise.resolve();let j=!1;function _(t){x.push(t)}const k=new Set;let w=0;function C(){const t=a;do{for(;w<g.length;){const t=g[w];w++,h(t),q(t.$$)}for(h(null),g.length=0,w=0;v.length;)v.pop()();for(let t=0;t<x.length;t+=1){const e=x[t];k.has(e)||(k.add(e),e())}x.length=0}while(g.length);for(;b.length;)b.pop()();j=!1,k.clear(),h(t)}function q(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(_)}}const E=new Set;function G(t,e){t&&t.i&&(E.delete(t),t.i(e))}function H(t,e,n,o){if(t&&t.o){if(E.has(t))return;E.add(t),undefined.c.push((()=>{E.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}else o&&o()}function T(t){t&&t.c()}function A(t,n,c,r){const{fragment:a,on_mount:l,on_destroy:u,after_update:i}=t.$$;a&&a.m(n,c),r||_((()=>{const n=l.map(e).filter(s);u?u.push(...n):o(n),t.$$.on_mount=[]})),i.forEach(_)}function I(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function M(t,e){-1===t.$$.dirty[0]&&(g.push(t),j||(j=!0,y.then(C)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function N(e,s,c,r,l,u,i,d=[-1]){const m=a;h(e);const $=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(m?m.$$.context:[])),callbacks:n(),dirty:d,skip_bound:!1,root:s.target||m.$$.root};i&&i($.root);let p=!1;if($.ctx=c?c(e,s.props||{},((t,n,...o)=>{const s=o.length?o[0]:n;return $.ctx&&l($.ctx[t],$.ctx[t]=s)&&(!$.skip_bound&&$.bound[t]&&$.bound[t](s),p&&M(e,t)),n})):[],$.update(),p=!0,o($.before_update),$.fragment=!!r&&r($.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);$.fragment&&$.fragment.l(t),t.forEach(f)}else $.fragment&&$.fragment.c();s.intro&&G(e.$$.fragment),A(e,s.target,s.anchor,s.customElement),C()}h(m)}class P{$destroy(){I(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function L(e){let n,o,s;return{c(){var t,e;n=d("div"),o=d("img"),t=o.src,e=s=O,r||(r=document.createElement("a")),r.href=e,t!==r.href&&p(o,"src",s),p(o,"alt","Company logo"),p(o,"class","svelte-16dwqx"),p(n,"class","svelte-16dwqx")},m(t,e){i(t,n,e),u(n,o)},p:t,i:t,o:t,d(t){t&&f(n)}}}let O="media/logo.png";class z extends P{constructor(t){super(),N(this,t,null,L,c,{})}}function S(t){let e,n,o,s,c,r,a,m,h,g,v,x,b,y,j,_,k,w,C;return n=new z({}),{c(){e=d("div"),T(n.$$.fragment),o=$(),s=d("nav"),c=d("a"),r=d("button"),a=d("h2"),a.textContent="Home",h=$(),g=d("a"),v=d("button"),x=d("h2"),x.textContent="Projects",y=$(),j=d("a"),_=d("button"),k=d("h2"),k.textContent="Contact",p(a,"class","svelte-1vsdjua"),p(r,"class",m=l("Inkblot Games"===t[0]?"selected":"")+" svelte-1vsdjua"),p(c,"href","./"),p(x,"class","svelte-1vsdjua"),p(v,"class",b=l("Projects"===t[0]?"selected":"")+" svelte-1vsdjua"),p(g,"href","./projects.html"),p(k,"class","svelte-1vsdjua"),p(_,"class",w=l("Contact"===t[0]?"selected":"")+" svelte-1vsdjua"),p(j,"href","./contact.html"),p(s,"class","svelte-1vsdjua"),p(e,"id","site-nav"),p(e,"class","svelte-1vsdjua")},m(t,l){i(t,e,l),A(n,e,null),u(e,o),u(e,s),u(s,c),u(c,r),u(r,a),u(s,h),u(s,g),u(g,v),u(v,x),u(s,y),u(s,j),u(j,_),u(_,k),C=!0},p(t,[e]){(!C||1&e&&m!==(m=l("Inkblot Games"===t[0]?"selected":"")+" svelte-1vsdjua"))&&p(r,"class",m),(!C||1&e&&b!==(b=l("Projects"===t[0]?"selected":"")+" svelte-1vsdjua"))&&p(v,"class",b),(!C||1&e&&w!==(w=l("Contact"===t[0]?"selected":"")+" svelte-1vsdjua"))&&p(_,"class",w)},i(t){C||(G(n.$$.fragment,t),C=!0)},o(t){H(n.$$.fragment,t),C=!1},d(t){t&&f(e),I(n)}}}function B(t,e,n){let{name:o}=e;return t.$$set=t=>{"name"in t&&n(0,o=t.name)},[o]}class D extends P{constructor(t){super(),N(this,t,B,S,c,{name:0})}}function F(e){let n,o,s;return{c(){n=d("header"),o=d("h1"),s=m(e[0]),p(o,"class","svelte-ixz9kc"),p(n,"class","svelte-ixz9kc")},m(t,e){i(t,n,e),u(n,o),u(o,s)},p(t,[e]){1&e&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(s,t[0])},i:t,o:t,d(t){t&&f(n)}}}function J(t,e,n){let{name:o}=e;return t.$$set=t=>{"name"in t&&n(0,o=t.name)},[o]}class K extends P{constructor(t){super(),N(this,t,J,F,c,{name:0})}}function Q(t){let e;return{c(){e=d("style"),e.textContent="section {clip-path: polygon(0 0, 0 calc(100% - 50px), 100% 100%, 100% 50px);}"},m(t,n){i(t,e,n)},d(t){t&&f(e)}}}function R(t){let e;return{c(){e=d("style"),e.textContent="section {clip-path: polygon(0 50px, 0 100%, 100% calc(100% - 50px), 100% 0);}"},m(t,n){i(t,e,n)},d(t){t&&f(e)}}}function U(e){let n,o,s;function c(t,e){return"left"==t[1]?R:Q}let r=c(e),a=r(e);return{c(){a.c(),n=$(),o=d("section"),s=d("div"),p(s,"class","svelte-rtcrgq"),p(o,"class","svelte-rtcrgq")},m(t,c){a.m(t,c),i(t,n,c),i(t,o,c),u(o,s),s.innerHTML=e[0]},p(t,[e]){r!==(r=c(t))&&(a.d(1),a=r(t),a&&(a.c(),a.m(n.parentNode,n))),1&e&&(s.innerHTML=t[0])},i:t,o:t,d(t){a.d(t),t&&f(n),t&&f(o)}}}function V(t,e,n){let{content:o}=e,{direction:s}=e;return t.$$set=t=>{"content"in t&&n(0,o=t.content),"direction"in t&&n(1,s=t.direction)},[o,s]}class W extends P{constructor(t){super(),N(this,t,V,U,c,{content:0,direction:1})}}function X(e){let n;return{c(){n=d("div"),n.innerHTML='<h5 class="svelte-1qj10te">© Inkblot Games 2022</h5>',p(n,"id","site-footer"),p(n,"class","svelte-1qj10te")},m(t,e){i(t,n,e)},p:t,i:t,o:t,d(t){t&&f(n)}}}class Y extends P{constructor(t){super(),N(this,t,null,X,c,{})}}function Z(t){let e,n,o,s,c,r,a,l,m,h,g,v;return c=new D({props:{name:t[0]}}),a=new K({props:{name:"Inkblot Games"}}),m=new W({props:{content:t[1],direction:"right"}}),g=new Y({}),{c(){e=d("link"),n=$(),o=d("main"),s=d("div"),T(c.$$.fragment),r=$(),T(a.$$.fragment),l=$(),T(m.$$.fragment),h=$(),T(g.$$.fragment),p(e,"rel","icon"),p(e,"type","image/x-icon"),p(e,"href","favicon.ico"),p(s,"class","flex-wrapper")},m(t,f){u(document.head,e),i(t,n,f),i(t,o,f),u(o,s),A(c,s,null),u(s,r),A(a,s,null),u(s,l),A(m,s,null),u(s,h),A(g,s,null),v=!0},p(t,[e]){const n={};1&e&&(n.name=t[0]),c.$set(n)},i(t){v||(G(c.$$.fragment,t),G(a.$$.fragment,t),G(m.$$.fragment,t),G(g.$$.fragment,t),v=!0)},o(t){H(c.$$.fragment,t),H(a.$$.fragment,t),H(m.$$.fragment,t),H(g.$$.fragment,t),v=!1},d(t){f(e),t&&f(n),t&&f(o),I(c),I(a),I(m),I(g)}}}function tt(t,e,n){let{name:o}=e;return t.$$set=t=>{"name"in t&&n(0,o=t.name)},[o,"\n  <h1>Great mobile games, coming soon.</h1>\n  "]}return new class extends P{constructor(t){super(),N(this,t,tt,Z,c,{name:0})}}({target:document.body,props:{name:"Home"}})}();
