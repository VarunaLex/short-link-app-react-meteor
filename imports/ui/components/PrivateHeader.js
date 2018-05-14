import { Accounts } from "meteor/accounts-base";
import React, { Component } from "react";
import PropTypes from 'prop-types';

const PrivateHeader = (props) => {
    return (
      <div>
        <h2>{props.title}</h2>
        <button onClick={() => Accounts.logout()} >Logout</button>
      </div>
    )
};

PrivateHeader.propTypes = {
  title: PropTypes.string.isRequired
};

export default PrivateHeader;