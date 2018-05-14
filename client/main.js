import { Meteor } from "meteor/meteor";
import { Tracker } from "meteor/tracker";
import ReactDOM from "react-dom";

import { routes, onAuthenticate } from "./../imports/routes/routes";
import "./../imports/startup/simple-schema-configuration.js";

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  console.log('isAuthenticated', isAuthenticated);
  onAuthenticate(isAuthenticated);
});

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById("app"));
});