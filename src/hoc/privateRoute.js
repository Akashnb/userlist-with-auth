import React  from 'react';
import { Route, Redirect } from 'react-router-dom'

import { useAuthenticate } from '../hooks/useAuthenticate';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useAuthenticate();
  
  if(isAuthenticated === null){
    return <></>
  }

  return (
    <Route {...rest} render={props =>
      !isAuthenticated ? (
        <Redirect to='/signin'/>
      ) : (
        <Component {...props} />
      )
    }
    />
  );
};
export default PrivateRoute;