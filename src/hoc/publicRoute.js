import React  from 'react';
import { Route, Redirect } from 'react-router-dom'

import { useAuthenticate } from '../hooks/useAuthenticate';

const PublicRouter = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useAuthenticate();
  
  if(isAuthenticated === null){
    return <></>
  }

  return (
    <Route {...rest} render={props =>
      isAuthenticated ? (
        <Redirect to='/app'/>
      ) : (
        <Component {...props} />
      )
    }
    />
  );
};
export default PublicRouter;