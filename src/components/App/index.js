import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import OnboardingPage from '../Onboarding';


import * as ROUTES from '../../constants/routes';

import { Provider as ReduxProvider } from "react-redux";
import configureStore from "../../store";

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

const App = () => (
  <ReduxProvider store={reduxStore}>
    <Router>
      <div>
        <Navigation />
        <hr />
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route path={ROUTES.ADMIN} component={AdminPage} />
        <Route path={ROUTES.ONBOARDING} component={OnboardingPage} />
      </div>
    </Router>
  </ReduxProvider>
);
export default App;