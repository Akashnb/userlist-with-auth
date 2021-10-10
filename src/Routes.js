import React from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';

import Signin from './pages/Auth/components/SignIn/SignInContainer';
import Signup from './pages/Auth/components/SignUp/SignUpContainer';
import Dashboard from './pages/Dashboard/DashboardContainer';
import NotFound from './common/NotFound';
import PrivateRoute from './hoc/privateRoute';
import PublicRoute from './hoc/publicRoute';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => <Redirect to="/signIn" />} />
        <PublicRoute exact path="/signin" component={Signin} />
        <PublicRoute exact path="/signup" component={Signup} />
        <PrivateRoute exact path="/app" component={Dashboard} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
