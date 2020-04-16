import SSRHelper from './SSRHelper';

export default class AddressHelper {
  /** Gets bgio host:port address. */
  public static getGameServerAddress() {
    return process.env.BGIO_SERVER_URL || `http://${window.location.hostname}:8001`;
  }
  public static getMatchServerAddress() {
    if (!SSRHelper.isSSR()) {
      return process.env.MATCH_SERVER_URL || `${window.location.protocol}//${window.location.host}/api`;
    }
    return process.env.MATCH_SERVER_URL || `http://localhost:8002/api`;
  }
}
