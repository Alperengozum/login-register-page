import React, {Component} from 'react';

import {Button, Form, Input, message} from "antd";

class Register extends Component {
  render() {
    return (
      <div>
        <Form {...this.layout} name="register-page" onFinish={this.onFinish}
              validateMessages={this.validateMessages}>
          <Form.Item
            name='username'
            label="Username "
            rules={[
              {
                required: true,
                message: "Please input a username",
              },
            ]}
          >
            <Input/>
          </Form.Item>
          <Form.Item
            name='email'
            label="Email"
            rules={[
              {
                required: true,
                type: "email",

              },
            ]}
          >
            <Input/>
          </Form.Item>
          <Form.Item
            name='password'
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input a password",
              },
            ]}
          >
            <Input.Password/>
          </Form.Item>

          <Form.Item
            name='passwordVerify'
            label="Verify Password"
            rules={[
              {
                required: true,
                message: "Please input a password",
              },
            ]}
          >
            <Input.Password/>
          </Form.Item>

          <Form.Item wrapperCol={{...this.layout.wrapperCol, offset: 8}}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>

        </Form>
        )
      </div>
    );
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

  addUser = (values) => {
    const newUser = {
      username: values.username,
      email: values.email,
      password: values.password,
    }
    let users = JSON.parse(localStorage.getItem("users"));

    if (users === null) users = []
    users.push(newUser)
    localStorage.setItem("users", JSON.stringify(users))
    console.log(this.props)
    this.props.history.push("/login")
  }

  onFinish = (values) => {
    const users = JSON.parse(localStorage.getItem("users"));
    if (users) {
      const errorUsername = users.find(obj => obj.username === values.username)
      const errorEmail = users.find(obj => obj.email === values.email)
      if (errorUsername !== undefined && errorEmail !== undefined) {
        message.error("These username and email are exist")
      } else if (errorUsername === undefined && errorEmail !== undefined) {
        message.error("This email is exist")
      } else if (errorUsername !== undefined && errorEmail === undefined) {
        message.error("This username is exist")
      } else {
        if (values.password === values.passwordVerify) {
          this.addUser(values)
        } else {
          message.error("Two passwords are not same!")
        }
      }
    } else {
      this.addUser(values)
    }


  };

}

export default Register;