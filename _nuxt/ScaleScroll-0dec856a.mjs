import{k as m,a as x,r as S,G as M,o as y,f as B,h as i,I as k,p as E}from"./entry-746bcc5f.mjs";import{o as c}from"./onDragStart-b67a33ef.mjs";const N=x({__name:"ScaleScroll",props:{start:null,end:null},emits:["start","end"],setup(h,{emit:s}){const t=h,r=S(null);function v(e){var o;e.stopPropagation();const n=((o=r.value)==null?void 0:o.getBoundingClientRect().width)||0,a=t.start;c(e,(l,u,d)=>{s("start",Math.max(a+d.x/n,0))})}function w(e){var o;e.stopPropagation();const n=((o=r.value)==null?void 0:o.getBoundingClientRect().width)||0,a=t.end;c(e,(l,u,d)=>{s("end",Math.min(a+d.x/n,1))})}function g(e){var l;e.stopPropagation();const n=((l=r.value)==null?void 0:l.getBoundingClientRect().width)||0,a=t.start,o=t.end;c(e,(u,d,p)=>{const _=a+p.x/n;if(_<0)return;const f=o+p.x/n;f>1||(s("start",Math.max(_,0)),s("end",Math.min(f,1)))})}return M(()=>{window.addEventListener("resize",()=>{s("start",t.start+Number.EPSILON),s("end",t.end+Number.EPSILON)})}),(e,n)=>(y(),B("div",{ref_key:"el",ref:r,style:{height:"12px",width:"100%",position:"relative",background:"#222"},onMousedown:n[0]||(n[0]=E(()=>{},["stop"]))},[i("div",{class:"bg",style:k({left:`calc(${t.start*100}% + 0px)`,width:`calc(${(t.end-t.start)*100}% - 0px)`}),onMousedown:g},[i("div",{class:"handle",onMousedown:v},null,32),i("div",{class:"handle",style:{right:"0px"},onMousedown:w},null,32)],36)],544))}});var C=m(N,[["__scopeId","data-v-26e13f5c"]]);export{C as default};
