import { Meteor } from "meteor/meteor";
import React from "react";
import { Router, Route, Link, Switch, Redirect } from "react-router-dom";

import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

import { Login } from "./../ui/components/Login";
import { Signup } from "./../ui/components/Signup";
import { Linker } from "./../ui/components/Linker";
import { NotFound } from "./../ui/components/NotFound";

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/linker'];
const onEnterPublicPage = () => {
  if (Meteor.userId()) {
    <Redirect to='/linker' />
  }
}
const onEnterPrivatePage = () => {
  if (!Meteor.userId()) {
    <Redirect to='/' />
  }
}
export const routes = (
  <Router history={history}>
    <Switch>
      <Route exact path='/' render={() => {
        onEnterPublicPage();
        return <Login />;
      }} />
      <Route path='/linker' render={() => {
        onEnterPrivatePage();
        return <Linker />;
      }} />
      <Route path='/signup' render={() => {
        onEnterPublicPage();
        return <Signup />
      }} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
);

export const onAuthenticate = (isAuthenticated) => {
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
}