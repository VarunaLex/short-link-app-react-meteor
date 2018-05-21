import React, { Component } from 'react';
import { Session } from 'meteor/session';
import { Tracker } from 'meteor/tracker';

export default class LinksListFilters extends Component {
  constructor(props){
    super(props);
    this.state = {
      showVisible: true
    }
  }
  componentDidMount(){
    this.filterTracker = Tracker.autorun(() => {
      this.setState({
        showVisible: Session.get('showVisible')
      })
    })
  }

  componentWillUnmount(){
    this.filterTracker.stop();
  }

  render() {
    return (
      <div>
        <label>
          <input type="checkbox" checked={!this.state.showVisible} onChange={(e) => {
            Session.set('showVisible', !e.target.checked)
          }} />
          Show hidden links
      </label>
      </div>
    )
  }
}
