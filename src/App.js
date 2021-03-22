import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";

import AppLayout from "./containers/AppLayout";
import Login from "./components/Login";
import Forgot from "./components/Forgot";
import Register from "./components/Register";
import NotFound from "./components/NotFound";
import ToastCustom from './components/inside/ToastCustom';

function App() {
  return (
    <Router>
      <Switch>
        <ToastProvider autoDismiss autoDismissTimeout={6000} components={{ Toast: ToastCustom }} placement="bottom-center">
          <Route
            exact
            path="/login"
            name="Login"
            render={(props) => <Login {...props} />}
          />
          <Route
            exact
            path="/forgot"
            name="Forget"
            render={(props) => <Forgot {...props} />}
          />
          <Route
            exact
            path="/register"
            name="Register"
            render={(props) => <Register {...props} />}
          />
          <Route
            path="/"
            name="AppLayout"
            render={(props) => <AppLayout {...props} />}
          />
          <Route
            path="*"
            name="NotFound"
            render={(props) => <NotFound {...props} />}
          />
        </ToastProvider>
      </Switch>
    </Router>
  );
}

export default App;
