import React from 'react';
import { Route, Router, browserHistory, IndexRoute } from 'react-router';
import About from './components/about';
import Home from './components/home';
import Kanban from './components/kanban';
import MainLayout from './components/layouts/main-layout';

export default (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={Home} />
      <Route path="/kanban" component={Kanban} />
      <Route path="/About" component={About} />
    </Route>
  </Router>
);
