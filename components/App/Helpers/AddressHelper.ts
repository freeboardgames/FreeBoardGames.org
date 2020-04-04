import SSRHelper from './SSRHelper';

export default class AddressHelper {
  /** Gets bgio host:port address. */
  public static getGameServerAddress() {
    if (!SSRHelper.isSSR()) {
      return process.env.BGIO_SERVER_URL || `http://${window.location.hostname}:8001`;
    }
  }
  public static getMatchServerAddress() {
    if (!SSRHelper.isSSR()) {
      return process.env.MATCH_SERVER_URL || `http://${window.location.hostname}:8002/api`;
    }
  }
}
