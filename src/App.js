import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Home';
import Service from './Service';
import Project from './Project';
import Client from './Client';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/service">
          <Service />
        </Route>
        <Route exact path="/project">
          <Project />
        </Route>
        <Route exact path="/client">
          <Client />
        </Route>
      </Switch>
  </Router>
  );
}

export default App;
