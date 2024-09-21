const cacheName = 'calculator-cache-v1';
const assetsToCache = [
    '/',
    '/index.html',
    '/styles.css',
    '/script.js',
];

// Install the service worker and cache assets
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName).then(cache => {
            return cache.addAll(assetsToCache);
        })
    );
});

// Serve cached assets when offline
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
