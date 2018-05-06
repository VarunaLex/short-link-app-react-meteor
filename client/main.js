import { Meteor } from "meteor/meteor";
import { Tracker } from "meteor/tracker";
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Link, Switch, Redirect } from "react-router-dom";

import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

import { Login } from "./../imports/ui/components/Login";
import { Signup } from "./../imports/ui/components/Signup";
import { Linker } from "./../imports/ui/components/Linker";
import { NotFound } from "./../imports/ui/components/NotFound";

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/linker'];
const onEnterPublicPage = () => {
  if(Meteor.userId()){
    //history.push('/linker');
    <Redirect to='/linker' />
  }
}
const onEnterPrivatePage = () => {
  if (!Meteor.userId()) {
    //history.push('/');
    <Redirect to='/' />
  }
}
const routes = (
  <Router history={history}>
    <Switch>
      <Route exact path='/' componentWillMount={onEnterPublicPage} component={Login} />
      <Route path='/linker' componentWillMount={onEnterPrivatePage} component={Linker} />
      <Route path='/signup' componentWillMount={onEnterPublicPage} component={Signup} />
        <Route path="*" component={NotFound} />
    </Switch>
  </Router>
);

//window.browserHistory = browserHistory;

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  console.log('isAuthenticated', isAuthenticated);

  let pathname = history.location.pathname;
  console.log(pathname);
  console.log(authenticatedPages.includes(pathname));
  if (isAuthenticated && unauthenticatedPages.includes(pathname)) {
    console.log('replacing with linker');
    history.replace('/linker');
  } else if (!isAuthenticated && authenticatedPages.includes(pathname)) {
    console.log('replacing with /');
    history.replace('/');
  }

  
})

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById("app"));
})