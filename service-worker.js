const CACHE_NAME = 'portfolio_template_v1';
const ASSETS_TO_CACHE = [
  'index.html',
  'styles.css',
  '/src/main.tsx',
  '/vite.svg',
  // add images, fonts, and any static assets
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS_TO_CACHE))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
