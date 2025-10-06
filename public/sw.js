// Empty Service Worker - Prevents 404 error
// This file is intentionally empty and does nothing

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', () => {
  self.clients.claim();
});
