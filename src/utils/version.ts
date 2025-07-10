// Utility untuk mengelola versioning dan cache busting
export const VERSION = process.env.NODE_ENV === 'production' 
  ? `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
  : 'dev';

export const CACHE_VERSION = `v${VERSION}`;

// Function untuk memaksa reload jika ada update
export const checkForUpdates = async () => {
  if (typeof window === 'undefined') return;
  
  try {
    const response = await fetch('/api/version', { 
      cache: 'no-cache',
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    });
    
    if (response.ok) {
      const data = await response.json();
      const currentVersion = localStorage.getItem('app-version');
      
      if (currentVersion && currentVersion !== data.version) {
        // Version changed, clear cache and reload
        if ('caches' in window) {
          const cacheNames = await caches.keys();
          await Promise.all(
            cacheNames.map(cacheName => caches.delete(cacheName))
          );
        }
        localStorage.setItem('app-version', data.version);
        window.location.reload();
      } else if (!currentVersion) {
        localStorage.setItem('app-version', data.version);
      }
    }
  } catch (error) {
    console.log('Version check failed:', error);
  }
};

// Auto-check for updates setiap 5 menit
export const startUpdateChecker = () => {
  if (typeof window === 'undefined') return;
  
  checkForUpdates();
  setInterval(checkForUpdates, 5 * 60 * 1000); // 5 minutes
};

// Force clear all caches
export const clearAllCaches = async () => {
  if ('caches' in window) {
    const cacheNames = await caches.keys();
    await Promise.all(
      cacheNames.map(cacheName => caches.delete(cacheName))
    );
  }
  localStorage.clear();
  sessionStorage.clear();
  window.location.reload();
};
