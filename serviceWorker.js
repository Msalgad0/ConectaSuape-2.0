self.addEventListener('install', e => {
  e.waitUntil(
     caches.open('airhorner').then(cache => {
         return cache.addAll([
          '/',
          './index.html',
          './manifest/icon-192x192.png',
          './manifest/icon-256x256.png',
          './manifest/icon-384x384.png',
          './manifest/icon-512x512.png'
         ])
             .then(() => self.skipWaiting());
     })
   )
 });
 
 self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
 });
 
 self.addEventListener('fetch', event => {
   event.respondWith(
     caches.match(event.request).then(response => {
         return response || fetch(event.request);
     })
   );
 });