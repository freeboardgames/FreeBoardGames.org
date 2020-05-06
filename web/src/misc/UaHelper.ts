import MobileDetect from 'mobile-detect';

export function processUserAgent(userAgent: string) {
  const md = new MobileDetect(userAgent);
  const isMobile = !!md.mobile() && !md.tablet();
  return { userAgent, isMobile };
}
