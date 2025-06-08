// sw.js: 简单缓存首页和 manifest 来激活 PWA 状态
self.addEventListener('install', (event) => {
  console.log('[SW] 已安装');
  event.waitUntil(
    caches.open('pwa-cache-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/manifest.json',
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return cached || fetch(event.request);
    })
  );
});
