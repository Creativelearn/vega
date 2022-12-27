import w from"./PreviewGizmo-96680ae7.mjs";import y from"./VInput-3028ced9.mjs";import{u as x}from"./useUpdate-2c1dbfb4.mjs";import{a as S}from"./useTimeline-26c79925.mjs";import{a as b,r as u,G as R,a3 as k,R as n,b as $,o as P,f as z,h as o,i as h,t as B,u as F}from"./entry-746bcc5f.mjs";import{R as D}from"./Recorder-05bef03b.mjs";import"./index-55743cb0.mjs";import"./onDragStart-b67a33ef.mjs";import"./setAnimation-30ab6762.mjs";import"./VIcons-740bdfe0.mjs";import"./mdi-646f06ee.mjs";function G(v){let e=v;e<0&&(e=-e);const m=e.toFixed(3).split(".")[1],t=new Date(e*1e3).toISOString().substr(11,8);let s="";return e<0&&(s="-"),`${s}${t}.${m}`}const I={style:{display:"flex",height:"calc(100% - 24px)",overflow:"hidden"}},M={style:{margin:"auto",position:"relative"}},N={style:{"line-height":"12px",height:"24px","text-align":"center",display:"flex","border-top":"1px solid white"}},U={style:{display:"flex","white-space":"nowrap",margin:"auto"}},V={style:{margin:"auto"}},K=b({__name:"PreviewPanel",setup(v){const e=u(null),d=u(null),{addUpdate:m}=x(),{timeline:t,selectStrip:s}=S(),l=u(.2),f=u(null);R(()=>{if(!e.value||!d.value)return;f.value=new D(e.value);const a=new k({canvas:e.value}),i=t.value.width,r=t.value.height;a.setSize(i,r),n.camera.left===0&&(n.camera.left=-i/2,n.camera.right=i/2,n.camera.top=r/2,n.camera.bottom=-r/2,n.camera.near=-100,n.camera.far=1e3),m(()=>{var c;!e.value||(a.setSize(i,r),e.value.style.margin="auto",e.value.style.width=`${i*l.value}px`,e.value.style.height="",n.camera.updateProjectionMatrix(),a.render(n.scene,n.camera),t.value.isRecording&&t.value.curent>t.value.length&&((c=f.value)==null||c.stop()))})});const _=$(()=>G(t.value.curent));function g(){for(const a of t.value.strips)if(a.start<t.value.curent&&a.start+a.length>t.value.curent){if(t.value.selectedStrips.find(r=>r.id===a.id))continue;s([a.id]);break}}return(a,i)=>{const r=w,c=y;return P(),z("div",{ref_key:"el",ref:d,style:{height:"100%",width:"100%",overflow:"hidden"}},[o("div",I,[o("div",M,[h(r,{scale:l.value},null,8,["scale"]),o("canvas",{ref_key:"canvas",ref:e,style:{width:"100%",height:"100%",margin:"auto"},onPointerdown:g},null,544)])]),o("div",N,[o("div",U,[h(c,{style:{height:"16px"},value:l.value,scale:.01,step:.01,min:.1,max:1,view:p=>p.toFixed(2),onInput:i[0]||(i[0]=p=>l.value=p)},null,8,["value","scale","step","min","view"])]),o("div",V,B(F(_)),1)])],512)}}});export{K as default};
