import React from 'react';
import Layouts from './HOC/layout'
import { Switch, Route} from 'react-router-dom'

import PrivateRoute from './Components/AuthRoutes/Private'
import PublicRoute from './Components/AuthRoutes/Public'

import Home from './Components/Home'
import SignIn from './Components/signin'

import Dashboard from './Components/Admin/Dashboard'

  
const Routes =(props) => {
  return(

 <Layouts>
      <Switch>

          <PrivateRoute {...props} path='/dashboard' exact component={Dashboard}/>
          <PublicRoute {...props} restricted={false} path ='/' exact component={Home} />
          <PublicRoute {...props} restricted={true} path ='/sign_in' exact component={SignIn} />
        
      </Switch>
   </Layouts>

  )
}

export default Routes;
