import { Meteor } from "meteor/meteor";
import { Tracker } from "meteor/tracker";
import { Session } from 'meteor/session';
import ReactDOM from "react-dom";

import { routes, onAuthenticate } from "./../imports/routes/routes";
import "./../imports/startup/simple-schema-configuration.js";

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  console.log('isAuthenticated', isAuthenticated);
  onAuthenticate(isAuthenticated);
});

Meteor.startup(() => {
  Session.set('showVisible', true)
  ReactDOM.render(routes, document.getElementById("app"));
});