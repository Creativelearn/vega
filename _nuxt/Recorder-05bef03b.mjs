import{A as r,V as c}from"./useTimeline-26c79925.mjs";import{R as u}from"./entry-746bcc5f.mjs";class h{constructor(t){this.canvas=t,this.data=[],this.audioNodes=[],this.elNodeMap=new WeakMap,this.canvas=t,h.main=this}start(t){this.stream=this.canvas.captureStream(),this.audioCtx||(this.audioCtx=new AudioContext),this.dst||(this.dst=this.audioCtx.createMediaStreamDestination()),this.recorder=new MediaRecorder(this.stream,{mimeType:"video/webm;codecs=vp9",audioBitsPerSecond:16*1e3}),t.forEach(e=>{e.effects.forEach(n=>{var o;const i=u.effectObjectMap.get(n.id);if(i instanceof r||i instanceof c){let s=null;if(i instanceof r?s=i.audio:i instanceof c&&(s=i.video),!s)return;let a=this.elNodeMap.get(s);a||(a=(o=this.audioCtx)==null?void 0:o.createMediaElementSource(s)),a.connect(this.dst),this.audioNodes.push(a),this.elNodeMap.set(s,a),this.dst.stream.getAudioTracks().forEach(f=>{var d;(d=this.stream)==null||d.addTrack(f)})}})}),this.recorder.addEventListener("stop",()=>{var e;(e=this.onEnd)==null||e.call(this,new Blob(this.data))}),this.recorder.addEventListener("dataavailable",e=>{this.data.push(e.data)}),this.recorder.start(1e3)}stop(){var t,e;this.backAudio(),(t=this.recorder)==null||t.stop(),(e=this.dst)==null||e.disconnect(),delete this.stream,delete this.recorder}backAudio(){this.audioNodes.forEach(t=>{t.connect(this.audioCtx.destination)}),this.audioNodes=[]}}export{h as R};
