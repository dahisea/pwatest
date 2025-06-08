// sw.js - 简易Service Worker
self.addEventListener('install', event => {
    console.log('Service Worker: 安装完成');
    self.skipWaiting(); // 立即激活
});

self.addEventListener('activate', event => {
    console.log('Service Worker: 已激活');
});

self.addEventListener('fetch', event => {
    // 不拦截请求，只记录
    console.log('Service Worker 监听 fetch：', event.request.url);
});
