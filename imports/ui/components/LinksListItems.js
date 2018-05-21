import { Meteor } from 'meteor/meteor';
import React, {Component} from "react";
import PropTypes from 'prop-types';
import Clipboard from 'clipboard'

export default class LinksListItems extends Component {
  constructor(props){
    super(props);
    this.state = {
      justCopied: false
    };
  }
  componentDidMount(){
    // get fired when the component first get rendered to the screen
    this.clipboard = new Clipboard(this.refs.copy);
    this.clipboard.on('success', (e) => {
      this.setState({ justCopied: true });
      setTimeout(() => this.setState({ justCopied: false }), 1000);
      // console.info('Action:', e.action);
      // console.info('Text:', e.text);
      // console.info('Trigger:', e.trigger);

      e.clearSelection();
    });
    this.clipboard.on('error', (e) => {
      console.error('Action:', e.action);
      console.error('Trigger:', e.trigger);
    });
  }

  componentWillUnmount(){
    // get fired before component get remove from the screen
    this.clipboard.destroy();
  }

  render() {
    return (
      <div>
        <p>{this.props.url}</p>
        <p>{this.props.shortUrl}</p>
        <p>{this.props.visitedCount} - {this.props.lastVisitedAt}</p>
        <button ref="copy" data-clipboard-text={this.props.shortUrl}>
          {this.state.justCopied ? 'Copied': 'Copy'}
        </button>
        <button onClick={() => {
          Meteor.call('links.setVisibility', this.props._id, !this.props.visible)
        }}> 
          {this.props.visible ? 'Hide' : 'Unhide'}
        </button>
      </div>
    )
  }
}

LinksListItems.propTypes = {
  _id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  shortUrl: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  visitedCount: PropTypes.number.isRequired,
  lastVisitedAt: PropTypes.number,
};