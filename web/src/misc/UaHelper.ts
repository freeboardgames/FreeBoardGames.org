import MobileDetect from 'mobile-detect';

export function processUserAgent(userAgent: string) {
  const md = new MobileDetect(userAgent);
  const isMobile = !!md.mobile() && !md.tablet();
  return { userAgent, isMobile };
}

export function isMobileFromReq(req: any) {
  let userAgent;
  if (req) {
    userAgent = req.headers['user-agent'];
  } else if (window) {
    userAgent = window.navigator.userAgent;
  }
  if (!userAgent) {
    return false;
  }
  const userAgentDetails = processUserAgent(userAgent);
  return userAgentDetails.isMobile;
}
