import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AppLayout extends Component {
  render(props) {
    return (
      <div>
        <h1>AppLayout</h1>
        <Link to="/login">Login</Link>
      </div>
    );
  }
}
