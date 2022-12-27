import{a as P,e as m,T as V,c,f as k,V as B,b as j,I as N,s as z}from"./useTimeline-26c79925.mjs";import{s as E}from"./index-55743cb0.mjs";import{k as R,a as q,b as d,r as x,G as D,w as U,o as I,f as T,u as y,I as H,j as J,R as g}from"./entry-746bcc5f.mjs";import{o as K}from"./onDragStart-b67a33ef.mjs";import{s as O}from"./setAnimation-30ab6762.mjs";const L=["value"],Q=q({__name:"PreviewGizmo",props:{scale:null},setup(W){const n=W,{timeline:s,updateEffect:_,setFocusStripId:h}=P(),l=d(()=>s.value.selectedStrips[0]),e=d(()=>{var a;return((a=l.value)==null?void 0:a.effects.length)>0?l.value.effects[0]:null}),r=x({}),v=x(!1),$=d(()=>e.value&&m(e.value)),C=d(()=>{if(e.value&&m(e.value))return e.value.text}),F=d(()=>{var a,i;return e.value&&m(e.value)?{fontSize:`${e.value.size*n.scale}px`,fontFamily:e.value.family,width:`calc(${r.value.width} + 10px)`,color:e.value.color,height:`${r.value.height}`,lineHeight:`${(Number.parseFloat(((i=(a=r.value)==null?void 0:a.height)==null?void 0:i.toString())||"0")||0)/e.value.text.split(`
`).length}px`,letterSpacing:`${e.value.characterSpace*n.scale}px`,visibility:v.value?"visible":"hidden"}:{}});function M(a){const i=a.target;_(l.value.id,{...e.value,text:i.value||""})}function b(){if(!e.value)return{display:"none"};const a=s.value.width,i=s.value.height;if(m(e.value)){const t=g.effectObjectMap.get(e.value.id);if(!(t instanceof V))return{display:"none"};const o=c(e.value.animations,s.value.curent-l.value.start,"position.x",e.value.position.x),u=c(e.value.animations,s.value.curent-l.value.start,"position.y",e.value.position.y);return{left:(a/2+o-t.mesureWidth/2)*n.scale+"px",bottom:(i/2+u-t.mesureHeight/2)*n.scale+"px",width:t.mesureWidth*n.scale+"px",height:t.mesureHeight*n.scale+"px"}}else if(k(e.value)){const t=g.effectObjectMap.get(e.value.id);if(!(t instanceof B))return{display:"none"};const o=c(e.value.animations,s.value.curent,"position.x",e.value.position.x),u=c(e.value.animations,s.value.curent,"position.y",e.value.position.y),p=t.video.videoWidth*e.value.scale.x,f=t.video.videoHeight*e.value.scale.y;return{left:(a/2+o-p/2)*n.scale-1+"px",bottom:(i/2+u-f/2)*n.scale+2+"px",width:p*n.scale+"px",height:f*n.scale+"px"}}else if(j(e.value)){const t=g.effectObjectMap.get(e.value.id);if(!(t instanceof N))return{display:"none"};const o=c(e.value.animations,s.value.curent,"position.x",e.value.position.x),u=c(e.value.animations,s.value.curent,"position.y",e.value.position.y),p=t.width*e.value.scale.x,f=t.height*e.value.scale.y;return{left:(a/2+o-p/2)*n.scale+"px",bottom:(i/2+u-f/2)*n.scale+"px",width:p*n.scale+"px",height:f*n.scale+"px"}}return{display:"none"}}D(()=>{const a=()=>{r.value=b(),window.requestAnimationFrame(a)};a()});const w=x(0),S=x(null);U(e,(a,i)=>{a&&i&&a.id!==i.id&&(v.value=!1,h(""))});function A(a){a.timeStamp-w.value<500&&(v.value=!0),w.value=a.timeStamp,v.value?(h(l.value.id),b(),setTimeout(()=>{var i;(i=S.value)==null||i.focus()})):h("")}function G(a){!e.value||v.value||K(a,i=>{if(!!e.value&&(m(e.value)||k(e.value)||j(e.value))){const t={...e.value,animations:[...e.value.animations]},o={x:t.position.x+i.x/n.scale,y:t.position.y-i.y/n.scale,z:t.position.z};e.value.animations.filter(u=>u.key==="position.x").length===0?t.position=o:(o.x=c(t.animations,s.value.curent-l.value.start,"position.x")+i.x/n.scale,t.animations=O(t.animations,{id:E.uuid(),key:"position.x",value:o.x,time:z(s.value.curent-l.value.start)})),e.value.animations.filter(u=>u.key==="position.y").length===0?t.position=o:(o.y=c(t.animations,s.value.curent-l.value.start,"position.y")+-i.y/n.scale,t.animations=O(t.animations,{id:E.uuid(),key:"position.y",value:o.y,time:z(s.value.curent-l.value.start)})),t.position=o,_(l.value.id,{...t})}})}return(a,i)=>(I(),T("div",{class:"gizmo",style:H(r.value),onClick:A,onPointerdown:G},[y($)?(I(),T("textarea",{key:0,ref_key:"textarea",ref:S,value:y(C),class:"text-gizmo",style:H(y(F)),onInput:M},null,44,L)):J("",!0)],36))}});var ae=R(Q,[["__scopeId","data-v-469227b3"]]);export{ae as default};
