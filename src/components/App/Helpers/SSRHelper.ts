// Returns true if SSR is rendering the page, else false.
export default class SSRHelper {
  public static isSSR() {
    return typeof window === 'undefined';
  }
}
