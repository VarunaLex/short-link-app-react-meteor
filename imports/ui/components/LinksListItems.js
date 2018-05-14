import React, {Component} from "react";
import PropTypes from 'prop-types';

export default class LinksListItems extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.url}

      </div>
    )
  }
}

LinksListItems.propTypes = {
  _id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  shortUrl: PropTypes.string.isRequired,
};