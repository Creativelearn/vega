import{a as B}from"./useTimeline-26c79925.mjs";import{k as $,a as b,r as e,G as C,b as k,U as I,Y,o as L,f as M,I as X,u as D}from"./entry-746bcc5f.mjs";const z=b({__name:"SelectRect",props:{element:null},setup(x){const v=x,{timeline:g,selectStrip:y}=B(),c=e(!1),p=e(0),d=e(0),f=e(0),m=e(0),u=e(0),i=e(0),_=e([]),h=e(null);C(()=>{v.element.addEventListener("mousedown",t=>{_.value=[],g.value.strips.forEach(a=>{const l=document.getElementById(`strip-${a.id}`);l&&_.value.push(l)}),c.value=!0;const n=v.element.getBoundingClientRect();u.value=t.clientX-n.left,i.value=t.clientY-n.top}),window.addEventListener("mousemove",t=>{var R;if(!c.value)return;const n=v.element.getBoundingClientRect(),a=t.clientX-n.left,l=t.clientY-n.top;p.value=a<u.value?a:u.value,d.value=l<i.value?l:i.value,f.value=Math.abs(a-u.value),m.value=Math.abs(l-i.value);const o=(R=h.value)==null?void 0:R.getBoundingClientRect();if(!o)return;const w=[];_.value.forEach(s=>{const r=s.getBoundingClientRect();r.left<o.right&&r.right>o.left&&r.top<o.bottom&&r.bottom>o.top&&w.push(s.id)});const S=g.value.strips.filter(s=>w.includes(`strip-${s.id}`)).map(s=>s.id);y(S)}),window.addEventListener("mouseup",t=>{t.stopPropagation(),c.value=!1,p.value=0,d.value=0,f.value=0,m.value=0})});const E=k(()=>({left:`${p.value}px`,top:`${d.value}px`,width:`${f.value}px`,height:`${m.value}px`}));return(t,n)=>I((L(),M("div",{ref_key:"el",ref:h,class:"select-rect",style:X(D(E))},null,4)),[[Y,c.value]])}});var T=$(z,[["__scopeId","data-v-77a02e57"]]);export{T as default};
