import React from 'react';
import Layouts from './HOC/layout'
import { Switch, Route} from 'react-router-dom'

import PrivateRoute from './Components/AuthRoutes/Private'
import PublicRoute from './Components/AuthRoutes/Public'

import Home from './Components/Home'
import SignIn from './Components/signin'

import Dashboard from './Components/Admin/Dashboard'
import AdminMatches from './Components/Admin/Matches'
import AddEditMatch from './Components/Admin/Matches/addEditMatches'

  
const Routes =(props) => {
  return(

 <Layouts>
      <Switch>

          <PrivateRoute {...props} path='/dashboard' exact component={Dashboard}/>
          <PrivateRoute {...props} path='/admin_matches' exact component={AdminMatches}/>
          <PrivateRoute {...props} path='/admin_matches/edit_match/:id' exact component={AddEditMatch}/>
          <PublicRoute {...props} restricted={false} path ='/' exact component={Home} />
          <PublicRoute {...props} restricted={true} path ='/sign_in' exact component={SignIn} />

      </Switch>
   </Layouts>

  )
}

export default Routes;
