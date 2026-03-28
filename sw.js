const CACHE_NAME = 'lorhels-cache-v1';
const urlsToCache = [
  './index.html',
  './manifest.json'
];

// Instala el Service Worker y guarda en caché lo básico
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Intercepta las peticiones (hace que cargue más rápido o funcione offline)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Si está en caché, lo devuelve. Si no, lo pide a internet.
        return response || fetch(event.request);
      })
  );
});
