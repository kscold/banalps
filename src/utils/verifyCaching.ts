// Utility to verify video caching is working

export async function verifyCaching() {
  console.log("=====================================");
  console.log("🔍 VIDEO CACHING VERIFICATION REPORT");
  console.log("=====================================");

  // 1. Check Service Worker
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.ready;
      if (registration.active) {
        console.log("✅ Service Worker: ACTIVE");
        console.log("   State:", registration.active.state);
        console.log("   Scope:", registration.scope);
      } else {
        console.log("⚠️ Service Worker: NOT ACTIVE");
      }
    } catch (error) {
      console.log("❌ Service Worker: ERROR", error);
    }
  } else {
    console.log("❌ Service Worker: NOT SUPPORTED");
  }

  // 2. Check Cache Storage
  if ('caches' in window) {
    try {
      const cacheNames = await caches.keys();
      console.log("\n📦 Available Caches:", cacheNames);
      
      for (const cacheName of cacheNames) {
        const cache = await caches.open(cacheName);
        const requests = await cache.keys();
        console.log(`\n   Cache: ${cacheName}`);
        console.log(`   Items: ${requests.length}`);
        
        // List Vimeo URLs in cache
        const vimeoUrls = requests.filter(req => 
          req.url.includes('vimeo.com')
        );
        
        if (vimeoUrls.length > 0) {
          console.log("   Vimeo URLs cached:");
          vimeoUrls.forEach(req => {
            console.log(`     - ${req.url.substring(0, 60)}...`);
          });
        }
      }
    } catch (error) {
      console.log("❌ Cache Storage: ERROR", error);
    }
  } else {
    console.log("❌ Cache Storage: NOT SUPPORTED");
  }

  // 3. Check Prefetch Links
  const prefetchLinks = document.querySelectorAll('link[rel="prefetch"]');
  console.log(`\n🔗 Prefetch Links: ${prefetchLinks.length} found`);
  prefetchLinks.forEach((link: any) => {
    if (link.href.includes('vimeo')) {
      console.log(`   - ${link.href.substring(0, 60)}...`);
    }
  });

  // 4. Check Preconnect Links
  const preconnectLinks = document.querySelectorAll('link[rel="preconnect"]');
  console.log(`\n🌐 Preconnect Links: ${preconnectLinks.length} found`);
  preconnectLinks.forEach((link: any) => {
    if (link.href.includes('vimeo')) {
      console.log(`   - ${link.href}`);
    }
  });

  // 5. Performance check
  if (window.performance && window.performance.getEntriesByType) {
    const resources = window.performance.getEntriesByType('resource');
    const vimeoResources = resources.filter(res => 
      res.name.includes('vimeo')
    );
    
    console.log(`\n⚡ Performance Metrics (Vimeo resources): ${vimeoResources.length} found`);
    vimeoResources.forEach(res => {
      const duration = (res as any).duration;
      const cached = duration < 50 ? "🎯 CACHED" : "🌐 NETWORK";
      console.log(`   ${cached} (${duration.toFixed(2)}ms): ${res.name.substring(0, 50)}...`);
    });
  }

  console.log("\n=====================================");
  console.log("📊 VERIFICATION COMPLETE");
  console.log("=====================================");
}

// Auto-run verification after 3 seconds
if (typeof window !== 'undefined') {
  setTimeout(() => {
    verifyCaching();
  }, 3000);
}