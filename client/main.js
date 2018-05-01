import { Meteor } from "meteor/meteor";
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory } from "react-router";

import { Signup } from "../imports/ui/components/Signup";
import { Link } from "../imports/ui/components/Link";

Meteor.startup(() => {
  ReactDOM.render(<Link/>, document.getElementById("app"));
})