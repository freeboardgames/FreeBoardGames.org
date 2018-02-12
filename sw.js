importScripts('workbox-sw.prod.js');

// Create Workbox service worker instance
const workboxSW = new WorkboxSW({ clientsClaim: true });

workboxSW.precache([]);


self.addEventListener('install', function(event) {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', function(event) {
  event.waitUntil(self.clients.claim());
});
