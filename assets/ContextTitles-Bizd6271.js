import{ssr as a,ssrHydrationKey as d,escape as l,createComponent as n}from"solid-js/web";import{createSignal as o}from"solid-js";import{c as s,s as i,d as b}from"./utils-D83bQgqL.js";import{u as g}from"./routing-BRsGL1iy.js";import{A as c}from"./components-BSOh2_Bn.js";var p=["<div",' h-fit mt-6 xl="sticky top-30"><button class="rounded-lg text-lg bg-blue-1 dark:bg-dark-3 mb-3 w-full" m="t-[-2rem]" xl="rounded-none pb-2 border-l-solid mb-0 pt-0 bg-transparent dark:bg-transparent">Page Contents<div class="i-mdi-chevron-down-circle text-2xl xl:hidden text-slate-7 dark:bg-blue-3"></div></button><div text="slate-5" class="','" mb-5>',"</div></div>"];function m(e){let r=`rounded-r-lg py-2  px-5 text-darkgrey xl:border-solid border-0 border-l-2 border-slate-2 dark:border-dark-3 ${b()==e[1]?"!border-blue-5 bg-slate-2 xl:bg-sky-1 !text-blue-7 font-medium dark:bg-dark-3 dark:!text-blue-3 dark:border-blue-4":""}`;return e[0]=="h3"?`pl-10 ${r}`:`${r}`}function y(){const[e,r]=o(!1);return a(p,d(),`grid xl:grid py-3 xl:py-0 bg-slate-1 dark:bg-dark-3 xl:bg-transparent xl:dark-bg-transparent ${e()?"":"hidden"}`,l(s.map(t=>n(c,{get href(){return`${g().pathname}#${t[1].replaceAll(/[ .&]/g,"_").toLowerCase()}`},get class(){return m(t)},onclick:()=>i(t[1]),get children(){return t[1]}}))))}export{y as C};