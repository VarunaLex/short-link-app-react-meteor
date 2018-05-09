import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";
import React, {Component} from "react";
import { Links } from "./../../api/links";
import LinksList from "./LinksList";

export class Linker extends Component {
    onLogout() {
        Accounts.logout();
    }

    onSubmit(e){
        e.preventDefault();
        let url = this.refs.url.value.trim();

        if(url){
            Meteor.call('links.insert', url, (err, res) => {
                
            });
            //Links.insert({ url, userId: Meteor.userId() });
            this.refs.url.value = '';
        }

    }

    render() {
        return (<div>
            <h2>Linker Home</h2>
            <button onClick={this.onLogout.bind(this)} >Logout</button>
            <LinksList />
            <form onSubmit={this.onSubmit.bind(this)} >
                <input type="text" ref="url" placeholder="URL" />
                <input type="submit" value="Add URL" />
            </form>
        </div>)
    }
}