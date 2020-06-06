export default class AddressHelper {
  /** Gets bgio host:port address. */
  public static getBgioServerAddress() {
    return process.env.BGIO_SERVER_URL || `http://${window.location.hostname}:8001`;
  }

  public static getFbgServerAddress() {
    return process.env.FBG_SERVER_URL || `/api`;
  }

  public static getGraphQLServerAddress() {
    return process.env.GQL_SERVER_URL || `/graphql`;
  }

  public static getWSServerAddress() {
    return process.env.GQL_SERVER_URL || `ws://${window.location.hostname}:3001/graphql`;
  }
}
