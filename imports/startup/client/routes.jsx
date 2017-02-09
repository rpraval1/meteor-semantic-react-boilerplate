import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// App component
import App from '../../ui/components/App.jsx'

// Pages
import SignupPage from '../../ui/pages/SignUpPage.jsx';
import SignInPage from '../../ui/pages/SignInPage.jsx';
import LandingPage from '../../ui/pages/LandingPage';

export const renderRoutes = () => (
  <Router history={browserHistory} >
    <Route path='/' component={App}>
      <IndexRoute component={LandingPage} />
      <Route path="signin" component={SignInPage}/>
      <Route path="signup" component={SignupPage}/>
      // <Route path="/signin" component={() => <Accounts.ui.LoginForm />} />
      // <Route path="/signup" component={() => <Accounts.ui.LoginForm formState={STATES.SIGN_UP} />} />
      // Add custom routes here
    </Route>
  </Router>
);
