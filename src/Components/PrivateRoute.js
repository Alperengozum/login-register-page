import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Redirect, Route} from "react-router-dom";

class PrivateRoute extends Component {

  render() {
    const {component:Component, ...rest} = this.props
    return (
      <Route
        {...rest}
        render={({location}) =>
          localStorage.getItem("loggedUser") != null ? (
            <Component/>
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: {from: location}
              }}
            />
          )
        }
      />
    );


  }

}


export default PrivateRoute;
