import { Meteor } from "meteor/meteor";
import React, {Component} from "react";
import { Tracker } from "meteor/tracker";

import { Links } from "./../../api/links";
import LinksListItems from './LinksListItems';

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
      const shortUrl = Meteor.absoluteUrl(link._id);
      return <LinksListItems key={link._id} shortUrl={shortUrl} {...link} />
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