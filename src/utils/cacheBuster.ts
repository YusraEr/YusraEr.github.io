// Utility untuk menambahkan cache busting pada asset URLs
export const addCacheBuster = (url: string): string => {
  if (typeof window === 'undefined') return url;
  
  const buildVersion = (window as any).BUILD_VERSION || Date.now();
  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}v=${buildVersion}`;
};

// Hook untuk cache busting
export const useCacheBustedUrl = (url: string) => {
  return addCacheBuster(url);
};
