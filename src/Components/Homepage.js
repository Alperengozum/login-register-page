import React, {Component} from 'react';
import {Button} from "antd";


class Homepage extends Component {


  render() {
    const user = JSON.parse(localStorage.getItem("loggedUser" ))
    return (
      <div>
        <span>Welcome Back {user.user} <br/>
          {user.email}
        </span>

        <div>
          <Button onClick={this.logout}>Log OUT</Button>
        </div>
      </div>
    );
  }
  logout = () => {
    localStorage.removeItem("loggedUser")
    this.props.history.push("/login")
  }

}



export default Homepage;