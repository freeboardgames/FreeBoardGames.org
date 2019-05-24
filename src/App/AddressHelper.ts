export default class AddressHelper {
  /** Gets bgio host:port address. */
  public static getServerAddress() {
    if (typeof window !== 'undefined') {
      return process.env.BGIO_SERVER_URL || `http://${window.location.hostname}:8001`;
    }
  }
}
