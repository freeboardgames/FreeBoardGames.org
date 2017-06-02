import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'newParty',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const NewParty = require('./containers/NewPartyContainer').default
      const requireAuthentication = require('../../AuthenticatedComponent/AuthenticatedComponent').requireAuthentication
      const reducer = require('./modules/newParty').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'newParty', reducer })

      /*  Return getComponent   */
      cb(null, requireAuthentication(NewParty))

    /* Webpack named bundle   */
  }, 'newParty')
  }
})
