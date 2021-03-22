import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Templates from "./routes";

export default class AppLayout extends Component {
  render() {
    return (
      <div>
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
    );
  }
}
