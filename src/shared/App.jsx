import React from 'react';
import Header from './Header'
import routes from './Routes'

import {renderRoutes} from 'react-router-config'

function App () {
  return <div>
    <Header/>
    {renderRoutes(routes)}
  </div>
}
export default App