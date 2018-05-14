import { Meteor } from "meteor/meteor";
import React, { Component } from "react";

export default class AddLink extends Component {
  onSubmit(e) {
    e.preventDefault();
    let url = this.refs.url.value.trim();
    if (url) {
      Meteor.call('links.insert', url, (err, res) => {

      });
      //Links.insert({ url, userId: Meteor.userId() });
      this.refs.url.value = '';
    }
  }
  render() {
    return (<div>
      <form onSubmit={this.onSubmit.bind(this)} >
        <input type="text" ref="url" placeholder="URL" />
        <input type="submit" value="Add URL" />
      </form>
    </div>)
  }
}