import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import LandingPage from './components/LandingPage';
import ProfilePage from './components/ProfilePage';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={LoginPage} />
        <PrivateRoute path="/profile" component={ProfilePage} />
        <PrivateRoute path="/" component={LandingPage} />
      </Switch>
    </div>
  );
}

export default App;
