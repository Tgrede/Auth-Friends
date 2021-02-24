import {Redirect, Route} from 'react-router-dom'
import React from 'react'

export default function PrivateRoute({component: Component, ...rest}) {
     return (
          <Route {...rest} render={() => {
               if(localStorage.getItem('token')){
                    return <Component />
               } else {
                    return <Redirect to='/login' />
               }
          }} />
     )
}
