import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { post } from "request";
import PostMsg from './Post';

class SendMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    PostMsg(this.state.value);
    alert('A message has been sent: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Message to send:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Send Message To PureCloud" />
      </form>
    );
  }
}



export default SendMessage;
