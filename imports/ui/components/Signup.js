import React, {Component} from "react";
import { Accounts } from "meteor/accounts-base";
import { Link } from "react-router-dom";

export class Signup extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: ''
    }
  }

  onSubmit(e){
    e.preventDefault();

    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    Accounts.createUser({email: email, password: password}, (err) => {
      console.log("Callback signup : ", err);
    });

    this.setState({
      error: 'SOmethig going wrong'
    })
  }

  render() {
    return (
      <div>
        <h2>Signup</h2>
        {this.state.error ? <p>{this.state.error}</p> : undefined}
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" ref="email" placeholder="Email" />
          <input type="password" ref="password" placeholder=" * * * * * " />
          <input type="submit" value="Create Account" />
        </form>
        <Link to="/">Alrady have an account?</Link>
      </div>)
  }
}