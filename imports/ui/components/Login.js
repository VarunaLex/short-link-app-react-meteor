import { Meteor } from "meteor/meteor";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: ''
        }
    }

    onSubmit(e) {
        e.preventDefault();

        let email = this.refs.email.value.trim();
        let password = this.refs.password.value.trim();

        Meteor.loginWithPassword({email}, password, (err) => {
            console.log("Login callback ", err);
            
        })

        this.setState({
            error: 'SOmethig going wrong'
        })
    }

    render() {
        return (
            <div>
                <h2>Login</h2>
                {this.state.error ? <p>{this.state.error}</p> : undefined}
                <form onSubmit={this.onSubmit.bind(this)}>
                    <input type="text" ref="email" placeholder="Email" />
                    <input type="password" ref="password" placeholder=" * * * * * " />
                    <input type="submit" value="Login" />
                </form>
                <Link to="/signup">Create account?</Link>
            </div>)
    }
}