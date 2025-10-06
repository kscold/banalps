export function registerServiceWorker() {
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('[ServiceWorker] Registration successful:', registration.scope);
        })
        .catch((error) => {
          console.error('[ServiceWorker] Registration failed:', error);
        });
    });
  }
}
