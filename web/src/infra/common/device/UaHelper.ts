import MobileDetect from 'mobile-detect';

export function uaIsMobile(userAgent: string) {
  const md = new MobileDetect(userAgent);
  const isMobile = !!md.mobile() && !md.tablet();
  return isMobile;
}

export function isMobileFromReq(req?: any) {
  let userAgent;
  if (req) {
    userAgent = req.headers['user-agent'];
  } else if (typeof window !== 'undefined') {
    userAgent = window.navigator.userAgent;
  }
  if (!userAgent) {
    return true;
  }
  const isMobile = uaIsMobile(userAgent);
  return isMobile;
}
