import { Accounts } from "meteor/accounts-base";
import React, { Component } from "react";
import PropTypes from 'prop-types';

export default class PrivateHeader extends Component {
  constructor(props) {
    super(props);
  }
  onLogout() {
    Accounts.logout();
  }
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <button onClick={this.onLogout.bind(this)} >Logout</button>
      </div>
    )
  }
}

PrivateHeader.propTypes = {
  title: PropTypes.string.isRequired
};