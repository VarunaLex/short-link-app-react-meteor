import React, { Component } from "react";

export class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
    }
    adder(){
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return (<div>
            <h2>Login Page</h2>
           <button onClick={this.adder.bind(this)} >+1</button>
           <p>{this.state.count}</p>
        </div>)
    }
}