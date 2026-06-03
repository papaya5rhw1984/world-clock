const CACHE="world-clock-v-u-1-0";
const ASSETS=["./","./index.html","./manifest.json","./icon.svg"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));self.skipWaiting();});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(n=>Promise.all(n.filter(x=>x!==CACHE).map(x=>caches.delete(x)))));self.clients.claim();});
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request).then(r=>{if(r.ok&&new URL(e.request.url).origin===self.location.origin){const cp=r.clone();caches.open(CACHE).then(ca=>ca.put(e.request,cp));}return r;}).catch(()=>c)));});
