import { Meteor } from "meteor/meteor";
import { Tracker } from "meteor/tracker";
import ReactDOM from "react-dom";

import { routes, onAuthenticate } from "./../imports/routes/routes";

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  console.log('isAuthenticated', isAuthenticated);
  onAuthenticate(isAuthenticated);
})

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById("app"));
})