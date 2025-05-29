self.addEventListener('install', e => {
  e.waitUntil(caches.open('gpsynth').then(cache => cache.addAll(['index.html', 'fm-synth.js'])));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(response => response || fetch(e.request)));
});