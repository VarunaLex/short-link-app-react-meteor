import { Meteor } from "meteor/meteor";
import React, {Component} from "react";
import { Tracker } from "meteor/tracker";

import { Links } from "./../../api/links";

export default class LinksList extends Component {
  constructor(props){
    super(props);
    this.state = {
      links: []
    };
  }

  componentDidMount(){
    console.log('componentDidMout LinksList');
    
    this.linkTracker = Tracker.autorun(() => {
      Meteor.subscribe('links');
      let links = Links.find().fetch();
      this.setState({links})
    });
  }
  componentWillUnmount(){
    console.log('componentWillUnmount LinksList');
    this.linkTracker.stop();
  }
  renderLinksListItems(){
    return this.state.links.map((link) => {
      return <p key={link._id}>{link.url}</p>
    })
  }


  render() {
    return(
      <div>
        <p>Links List</p>
        <div>
          {this.renderLinksListItems()}
        </div>
      </div>
    );
  }
}