export default class AddressHelper {
  public static getFbgServerAddress() {
    return process.env.FBG_SERVER_URL || `/api`;
  }

  public static getGraphQLServerAddress() {
    return process.env.GQL_SERVER_URL || `/graphql`;
  }

  public static getWSServerAddress() {
    return process.env.GQL_WS_URL || `ws://${window.location.hostname}:3001/graphql`;
  }
}
