import MobileDetect from 'mobile-detect';

function uaIsMobile(userAgent: string) {
  const md = new MobileDetect(userAgent);
  const isMobile = !!md.mobile() && !md.tablet();
  return isMobile;
}

export function detectIsMobile() {
  if (typeof window !== 'undefined') {
    return uaIsMobile(window.navigator.userAgent);
  } else {
    return true;
  }
}
