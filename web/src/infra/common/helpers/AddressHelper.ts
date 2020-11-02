export default class AddressHelper {
  public static getGraphQLServerAddress() {
    return `/graphql`;
  }

  public static getWSServerAddress() {
    const hostname = window.location.hostname;
    if (hostname === 'localhost') {
      return 'ws://localhost:3001/graphql';
    } else {
      return `wss://${hostname}/graphql`;
    }
  }
}
