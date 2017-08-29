import { injectReducer } from '../../store/reducers';

export default (store) => ({
    path: 'lobby/:game_code',
  /*  Async getComponent is only invoked when route matches   */
    getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
        require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
            const Lobby = require('./containers/LobbyViewContainer').default;
            const requireAuthentication = require('../../AuthenticatedComponent/AuthenticatedComponent').requireAuthentication;
            const reducer = require('./modules/lobby').default;

      /*  Add the reducer to the store on key 'counter'  */
            injectReducer(store, { key: 'lobby', reducer });

      /*  Return getComponent   */
            cb(null, requireAuthentication(Lobby));

    /* Webpack named bundle   */
        }, 'lobby');
    }
});
