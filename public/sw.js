// Service Worker for video caching
const CACHE_NAME = 'video-cache-v1';
const VIDEO_URLS = [
  'https://player.vimeo.com/video/1121422984',
  'https://player.vimeo.com/video/1121423051',
];

// Install event - cache videos
self.addEventListener('install', (event) => {
  console.log('[ServiceWorker] ✅ Install event triggered');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[ServiceWorker] 📦 Opening cache:', CACHE_NAME);
      // Note: Vimeo videos are embedded iframes, so we can't directly cache the video files
      // But we can cache the iframe documents
      return Promise.all(
        VIDEO_URLS.map(url => 
          fetch(url).then(response => {
            if (response.ok) {
              console.log('[ServiceWorker] ✅ Cached:', url);
              return cache.put(url, response);
            }
          }).catch(err => {
            console.warn('[ServiceWorker] ❌ Failed to cache:', url, err);
          })
        )
      );
    }).then(() => {
      console.log('[ServiceWorker] ✅ All videos cached successfully');
    })
  );
  self.skipWaiting();
});

// Activate event
self.addEventListener('activate', (event) => {
  console.log('[ServiceWorker] Activate');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[ServiceWorker] Removing old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache when possible
self.addEventListener('fetch', (event) => {
  const url = event.request.url;
  
  // Check if this is a Vimeo video request
  if (url.includes('player.vimeo.com')) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        if (response) {
          console.log('[ServiceWorker] 🎯 Cache hit! Serving from cache:', url.substring(0, 50) + '...');
          return response;
        }
        
        console.log('[ServiceWorker] 🌐 Cache miss. Fetching:', url.substring(0, 50) + '...');
        return fetch(event.request).then((response) => {
          // Cache the new response
          if (response && response.status === 200) {
            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
              console.log('[ServiceWorker] 💾 Cached new response:', url.substring(0, 50) + '...');
            });
          }
          return response;
        });
      })
    );
  }
});