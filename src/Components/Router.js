import React, {Component} from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Homepage from "./Homepage";
import PrivateRoute from "./PrivateRoute";

class Router extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <PrivateRoute exact path={"/home"} component={Homepage}>

            </PrivateRoute>
            <Route exact path={"/login"} component={Login}>
            </Route>
            <Route exact path={"/register"} component={Register}>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Router;