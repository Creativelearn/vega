import{u as a}from"./useUpdate-2c1dbfb4.mjs";import{a as l,G as d,a6 as r,o as u,f}from"./entry-746bcc5f.mjs";const h=l({__name:"ShowStatsButton",setup(m){let t=null;const{updateState:o}=a();function s(){!t||(t.dom.style.visibility="visible")}function n(){!t||(t.dom.style.visibility="hidden")}function i(){!t||(t.dom.style.visibility==="hidden"?s():n())}return d(()=>{t=new r,t.showPanel(0),o.value.before=t.begin,o.value.after=t.end,document.body.append(t.dom),t.dom.style.left="",t.dom.style.right="0",t.dom.style.pointerEvents="none",t.dom.childNodes.forEach(e=>{e instanceof HTMLElement&&(e.style.display="")}),n()}),(e,c)=>(u(),f("button",{onClick:i}," stats "))}});export{h as default};
