import React from 'react';
import Layouts from './HOC/layout'
import { Switch, Route} from 'react-router-dom'

import Home from './Components/Home'

  
const Routes =(props) => {
  return(

 <Layouts>
      <Switch>
          <Route exact component={Home} path ="/"/>
      </Switch>
   </Layouts>

  )
}

export default Routes;
