import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Templates from "./routes";
import Header from './../components/Header';

export default class AppLayout extends Component {
  render() {
    return (
      <div id="main-wrapper">
        <div id="content-wrapper">
          <Header />
          <Switch>
            {Templates.map((route) => (
              <Route
                path={route.path}
                exact
                render={(props) => <route.template {...props} />}
              />
            ))}
          </Switch>
        </div>
      </div>
    );
  }
}
