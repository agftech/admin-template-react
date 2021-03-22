import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render(props) {
    return (
      <div>
        <h1>Home</h1>
        <Link to="/login">Login</Link>
      </div>
    );
  }
}
