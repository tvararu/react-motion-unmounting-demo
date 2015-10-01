import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from 'App'
import Test from 'components/Test'

ReactRouterSSR.Run(
  <Route path='/' component={ App }>
    <IndexRoute component={ Test } />
  </Route>
)
