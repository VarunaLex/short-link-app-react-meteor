import { Accounts } from "meteor/accounts-base";
import React, {Component} from "react";

export class Linker extends Component {
    onLogout() {
        Accounts.logout();
    }
    
    render() {
        return (<div>
            <h2>Linker Home</h2>
            <button onClick={this.onLogout.bind(this)} >Logout</button>
        </div>)
    }
}