import { injectReducer } from '../../store/reducers'
// import { MessageReducer } from './modules/message'

export default (store) => ({
  path: 'games/checker',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const CheckerGame = require('./containers/CheckerGameContainer').default
      const MessageReducer = require('../../TurnHUD/modules/message').default
      const CheckerGameReducer = require('./modules/checkerGameState').default
      const requireAuthentication = require('../../AuthenticatedComponent/AuthenticatedComponent').requireAuthentication

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'messages', reducer:  MessageReducer})
      injectReducer(store, { key: 'checkerGameState', reducer:  CheckerGameReducer})


      /*  Return getComponent   */
      cb(null, requireAuthentication(CheckerGame))

    /* Webpack named bundle   */
  }, 'checker')
  }
})
