if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let o={};const a=e=>i(e,l),f={module:{uri:l},exports:o,require:a};s[l]=Promise.all(n.map((e=>f[e]||a(e)))).then((e=>(r(...e),o)))}}define(["./workbox-6e5f154b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index--PHQOHd9.js",revision:null},{url:"assets/index-BCkT7mQV.css",revision:null},{url:"assets/Inter-italic.var-DhD-tpjY.woff2",revision:null},{url:"assets/Inter-roman.var-C-r5W2Hj.woff2",revision:null},{url:"assets/material-icons-Dr0goTwe.woff",revision:null},{url:"assets/material-icons-kAwBdRge.woff2",revision:null},{url:"assets/material-icons-outlined-BpWbwl2n.woff",revision:null},{url:"assets/material-icons-outlined-DZhiGvEA.woff2",revision:null},{url:"assets/material-icons-round-BDlwx-sv.woff",revision:null},{url:"assets/material-icons-round-DrirKXBx.woff2",revision:null},{url:"assets/material-icons-sharp-CH1KkVu7.woff",revision:null},{url:"assets/material-icons-sharp-gidztirS.woff2",revision:null},{url:"assets/material-icons-two-tone-B7wz7mED.woff",revision:null},{url:"assets/material-icons-two-tone-DuNIpaEj.woff2",revision:null},{url:"assets/primeicons-C6QP2o4f.woff2",revision:null},{url:"assets/primeicons-Dr5RGzOO.svg",revision:null},{url:"assets/primeicons-MpK4pl85.ttf",revision:null},{url:"assets/primeicons-WjwUDZjB.woff",revision:null},{url:"index.html",revision:"78f24cbddf156c372f64d9f5524195b6"},{url:"media/apple-touch-icon.png",revision:"cfb6bc5aef02192aa5ec4c0d0baaf0af"},{url:"media/favicon.png",revision:"c0af69bff0f17b58cbbffed617e86cd2"},{url:"media/pwa-192x192.png",revision:"8722f151e77fe8890a2dffb09eefc81c"},{url:"media/pwa-512x512.png",revision:"30024e9a23b858ab0e27f7f7343cc152"},{url:"media/pwa-maskable-192x192.png",revision:"7945b27e7f7f5d5f69b0504599436655"},{url:"media/pwa-maskable-512x512.png",revision:"5f913baa91414878e0602f091ececa12"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"setupsw.js",revision:"50bd461539bf6bd0f2d7b3ffb1b07503"},{url:"media/pwa-192x192.png",revision:"8722f151e77fe8890a2dffb09eefc81c"},{url:"media/pwa-512x512.png",revision:"30024e9a23b858ab0e27f7f7343cc152"},{url:"manifest.webmanifest",revision:"a9db21f598951dfa519b3945e5298d1d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/.*/i,new e.StaleWhileRevalidate({cacheName:"all-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200,201]})]}),"GET")}));
//# sourceMappingURL=sw.js.map
