"use strict";(self.webpackChunkstardust=self.webpackChunkstardust||[]).push([[544],{544:(t,e,o)=>{o.d(e,{findYouTubePoster:()=>a,resolveYouTubeVideoId:()=>u});const n=/(?:youtu\.be|youtube|youtube\.com|youtube-nocookie\.com)\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|)((?:\w|-){11})/,c=new Map,s=new Map;function u(t){var e;return null===(e=t.match(n))||void 0===e?void 0:e[1]}async function a(t,e){if(c.has(t))return c.get(t);if(s.has(t))return s.get(t);const o=new Promise((async o=>{const n=["maxresdefault","sddefault","hqdefault"];for(const s of n)for(const n of[!0,!1]){const u=r(t,s,n);if((await fetch(u,{mode:"no-cors",signal:e.signal})).status<400)return c.set(t,u),void o(u)}})).catch((()=>"")).finally((()=>s.delete(t)));return s.set(t,o),o}function r(t,e,o){const n=o?"webp":"jpg";return"https://i.ytimg.com/".concat(o?"vi_webp":"vi","/").concat(t,"/").concat(e,".").concat(n)}}}]);
//# sourceMappingURL=544.99325cd5.chunk.js.map