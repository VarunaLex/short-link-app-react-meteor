import { Meteor } from "meteor/meteor";
import { Tracker } from "meteor/tracker";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import browserHistory from "./../imports/ui/history";
import { Login } from "./../imports/ui/components/Login";
import { Signup } from "./../imports/ui/components/Signup";
import { Linker } from "./../imports/ui/components/Linker";
import { NotFound } from "./../imports/ui/components/NotFound";

const routes = (
  <Router>
    <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/linker' component={Linker} />
        <Route path='/signup' component={Signup} />
        <Route path="*" component={NotFound} />
    </Switch>
  </Router>
);

window.browserHistory = browserHistory;

Tracker.autorun(() => {
  const isAthenicated = !!Meteor.userId();
  console.log('isAthenicated', isAthenicated);
  
})

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById("app"));
})