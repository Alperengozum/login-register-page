import React, {Component} from "react"
import {Button, Form, Input, message} from "antd";
import {Link} from "react-router-dom";


class Login extends Component {
  render() {
    return (
      <Form {...this.layout} name="login-page" onFinish={this.onFinish} validateMessages={this.validateMessages}>
        <Form.Item
          name='username'
          label="Username"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input/>
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.Password/>
        </Form.Item>

        <Form.Item wrapperCol={{...this.layout.wrapperCol, offset: 8}}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
          <Link to="/register"> Register Now!</Link>
        </Form.Item>

      </Form>
    )
  }

  layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },

  };

  onFinish = (values) => {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(obj => obj.username === values.username && obj.password === values.password)
    if (user) {
      localStorage.setItem("loggedUser",JSON.stringify({
        user:user.username,
        email:user.email,
      }))
      message.success("You're redirecting now")
      this.props.history.push("/home")
    } else {
      message.error("Some informations are wrong")
    }

  }

}

export default Login;