import { injectReducer } from '../../store/reducers';
// import { MessageReducer } from './modules/message'

export default (store) => ({
  path: 'g/colonizers/:id',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const ColonizersGame = require('./containers/ColonizersGameContainer').default;
      // const TurnHUDReducer = require('../../TurnHUD/modules/message').default;
      const ColonizersGameReducer = require('./modules/colonizersGameState').default;
      const requireAuthentication = require('../../AuthenticatedComponent/AuthenticatedComponent').requireAuthentication;

      /*  Add the reducer to the store on key 'counter'  */
      // injectReducer(store, { key: 'turnHUD', reducer: TurnHUDReducer});
      injectReducer(store, { key: 'colonizersGameState', reducer:  ColonizersGameReducer});


      /*  Return getComponent   */
      cb(null, requireAuthentication(ColonizersGame));

    /* Webpack named bundle   */
    }, 'colonizers');
  }
});
