import React, { Component } from "react";

export default class ControlledInput extends Component {
  state = {
    firstName: "",
    lastName: ""
  };

  handleFirstNameChange = e => {
    this.setState({
      firstName: e.target.value
    });
  };

  handleLastNameChange = e => {
    this.setState({
      lastName: e.target.value
    });
  };

  handleChange = e => {
    this.setState({
      [e.targer.name]: e.target.value
    });
  };

  render() {
    console.log(this.state.firstName);
    console.log(this.state.lastName);
    return (
      <form>
        <input
          type="text"
          name="firstName"
          onChange={e => {
            this.handleFirstNameChange(e);
          }}
          value={this.state.firstName}
        />
        <input
          type="text"
          name="lastName"
          onChange={e => {
            this.handleLastNameChange(e);
          }}
          value={this.state.lastName}
        />
      </form>
    );
  }
}
