import{h as F,i as r,j as o,b as $,n as C,q as w,a as k,y as I,t as a,e as q,k as f,S as M,r as z}from"./web-DScAkgcG.js";import{u as E}from"./routing-zmxRfIsI.js";import{A as S}from"./components-B-ztm8Ux.js";import"./ContextTitles-DK3A0sat.js";const B=[{label:["Quickstart","i-mingcute:safe-flash-fill"],items:[["Install","quickstart/install"],["Post Install","quickstart/post-install"],["Learn basic Lua","quickstart/learn-lua"]]},{label:["Custom config","i-mdi-cog"],items:[["Walkthrough","config/walkthrough"],["Snippets","config/snippets"],["Manage Plugins","config/plugins"],["Syntax highlighting","config/syntax"],["LSP Configuration","config/lsp"],["Format & Lint","config/format_lint"],["Mappings","config/mappings"],["UI Customization","config/nvchad_ui"],["Customize colors","config/theming"]]},["Features","features","i-tabler:server-cog"],["Api Functions","api","i-mdi:atom-variant"],["Contributing","contribute","i-mdi-github"],["Faq","faq","i-octicon:question-16"],["Credits","credits","i-line-md:heart"]];var j=a('<div class="grid pl-4 gap-3 rounded-none"border="0 l solid slate-2 dark:dark-4"ml-3 pl-5>'),R=a('<div class="grid gap-5"><button class="rounded-xl gap-20 bg-sky-1 text-slate-7 dark:bg-dark-3 dark:text-white-2 p-2 w-full"><div class=vertCentered font-medium><div></div> <!$><!/></div><div></div></button><!$><!/>'),H=a("<div i-octicon:chevron-down-12>"),Q=a("<div i-octicon:chevron-right-12>"),T=a('<aside class="h-fit fixed xl:sticky z-10 xl:top-24 xl:flex flex-col bg-white-1 dark:bg-dark-2 text-gray-600 dark:text-grey rounded-xl p-5 xl:p-0"><div h-full flex flex-col gap-5 class="[&amp;_*]:text-base dark:text-slate-4">'),U=a("<div>");function W(e){const i=e.labels.filter(n=>E().pathname==`/docs/${n[1]}`).length,[t,d]=q(i==1);return(()=>{var n=r(R),c=n.firstChild,h=c.firstChild,u=h.firstChild,s=u.nextSibling,x=s.nextSibling,[g,p]=f(x.nextSibling),m=h.nextSibling,N=c.nextSibling,[P,A]=f(N.nextSibling);return c.$$click=()=>d(!t()),o(h,()=>e.BtnLabel[0],g,p),o(m,(()=>{var l=k(()=>!!t());return()=>l()?r(H):r(Q)})()),o(n,$(M,{get when(){return t()},get children(){var l=r(j);return o(l,()=>e.labels.map(_=>$(S,{activeClass:"text-slate-7 dark:text-white-2 font-bold",get href(){return _[1]},get children(){return _[0]}}))),l}}),P,A),C(l=>{var _=e.BtnLabel[1],y=`text-xl bg-slate-6 text-slate-1 dark:bg-dark-4 p-1 rounded-full
                  ${t()?"dark:text-red-3":"dark:text-white-2"}`;return _!==l.e&&w(u,l.e=_),y!==l.t&&w(m,l.t=y),l},{e:void 0,t:void 0}),z(),n})()}function Z(){return(()=>{var e=r(T),i=e.firstChild;return o(i,()=>B.map(t=>t.label?$(W,{get BtnLabel(){return t.label},get labels(){return t.items}}):$(S,{get href(){return t[1]},class:"vertCentered",activeClass:"font-medium text-blue-5 dark:text-blue-3",get children(){return[(()=>{var d=r(U);return C(()=>w(d,t[2])),d})(),k(()=>t[0])]}}))),C(()=>I(e,"hidden",!K())),e})()}F(["click"]);var D=a("<div flex justify-between><!$><!/><!$><!/>"),G=a('<button border="1 solid slate-2"class="!bg-transparent text-blue-6 dark:text-blue-4 p-3 px-5 dark:border-dark-4"><div i-ph:arrow-left-bold></div><!$><!/>'),L=a("<div>"),J=a('<button border="1 solid slate-2"class="!bg-transparent text-blue-6 dark:text-blue-4 p-3 px-5 dark:border-dark-4"><!$><!/><div i-ph:arrow-right-bold>');let v=[];B.forEach(e=>{Array.isArray(e)?v.push(e):e.items.forEach(i=>{v.push(i)})});function b(e,i){let t="",d=E().pathname.replace(/^\/docs\//,"");return v.forEach((n,c)=>{d==n[1]&&v[c+e]&&(t=v[c+e][i?1:0])}),t}const ee=()=>(()=>{var e=r(D),i=e.firstChild,[t,d]=f(i.nextSibling),n=t.nextSibling,[c,h]=f(n.nextSibling);return o(e,(()=>{var u=k(()=>!!b(-1));return()=>u()?$(S,{get href(){return b(-1,!0)},get children(){var s=r(G),x=s.firstChild,g=x.nextSibling,[p,m]=f(g.nextSibling);return o(s,()=>b(-1),p,m),s}}):r(L)})(),t,d),o(e,(()=>{var u=k(()=>!!b(1));return()=>u()?$(S,{get href(){return b(1,!0)},get children(){var s=r(J),x=s.firstChild,[g,p]=f(x.nextSibling);return g.nextSibling,o(s,()=>b(1),g,p),s}}):r(L)})(),c,h),e})(),[K,te]=q(!1);export{ee as N,Z as S,K as a,te as s};