import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';
import Index from './App.css';

export default function App() {
  return (
      <Switch>
          <Route exact path='/' component={Signup} />
          <Route path='/login' component={Login} />
      </Switch>
  );
}
