import { Meteor } from "meteor/meteor";
import React, { Component } from "react";

export default class AddLink extends Component {
  constructor(props){
    super(props);
    this.state  = {
      url : ''
    }
  }
  onSubmit(e) {
    e.preventDefault();
    const { url } = this.state;
    if (url) {
      Meteor.call('links.insert', url, (err, res) => {
        if (!err) {
          this.setState({ url: '' })
        }
      });
    }
  }

  onChange(e) {
    this.setState({
      url: e.target.value.trim()
    })
  }

  render() {
    return (<div>
      <form onSubmit={this.onSubmit.bind(this)} >
        <input
        type="text"
        ref="url"
        placeholder="URL"
        value={this.state.url}
        onChange={this.onChange.bind(this)}
        />
        <input type="submit" value="Add URL" />
      </form>
    </div>)
  }
}