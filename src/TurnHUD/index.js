import { injectReducer } from '../store/reducers'
// import { MessageReducer } from './modules/message'

export default (store) => ({
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const TurnHUD = require('./containers/TurnHUDContainer').default
      const reducer = require('./modules/message').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'messages', reducer })

      /*  Return getComponent   */
      cb(null, TurnHUD)

    /* Webpack named bundle   */
  }, 'home')
  }
})
