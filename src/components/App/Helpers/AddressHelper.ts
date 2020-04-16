export default class AddressHelper {
  /** Gets bgio host:port address. */
  public static getServerAddress() {
    return process.env.BGIO_SERVER_URL || `http://${window.location.hostname}:8001`;
  }
}
