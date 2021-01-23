import React, {Component} from 'react';
import { Form, Input, InputNumber, Button } from 'antd';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

const addUser = (values) => {
    const newUser = {
        username: values.username,
        email: values.email,
        password: values.password,
    }
    let users = JSON.parse(localStorage.getItem("users"));
    users.push(newUser)
    localStorage.setItem("users",JSON.stringify(users))
    Login()



}

    const onFinish = (values) => {


        const users = JSON.parse(localStorage.getItem("users"));
        const errorUsername = users.find(obj => obj.username === values.username)
        const errorEmail = users.find(obj => obj.email === values.email)
        if (errorUsername !== undefined && errorEmail !== undefined) {
            alert("These username and email are exist")
        }

        else if (errorUsername === undefined && errorEmail !== undefined) {
            alert("This email is exist")
        }

        else if (errorUsername !== undefined && errorEmail === undefined) {
            alert("This username is exist")
        }


        else { (values.password === values.passwordVerify) ?
            addUser(values)
            : alert("Two passwords are not same!")

        }


    };



    class Page extends Component {

    state = {

    };

    render() {
        return (
            <div>
                <Router>


                <Switch>
                    <Route exact path={"/login"}>
                        <Login />
                    </Route>
                    <Route exact path={"/register"}>
                        <Register />
                    </Route>
                </Switch>





            </Router>
            </div>
        );
    }

}

function Login() {
        return(
            <Form {...layout} name="login-page" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item
                    name='username'
                    label="Username"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
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
                    <Input.Password />
                </Form.Item>

                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                        Login
                    </Button>
                    <Link to="/register">  Register Now!</Link>
                </Form.Item>

            </Form>
        )
}
function Register() {
        return(
    <Form {...layout} name="register-page" onFinish={onFinish} validateMessages={validateMessages}>
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
            <Input />
        </Form.Item>
        <Form.Item
        name='email'
        label="Email"
        rules={[
        {
            required:true,
            type: "email",

        },
    ]}
        >
        <Input />
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
            <Input.Password />
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
            <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
                Register
            </Button>
        </Form.Item>

    </Form>
        )

}






export default Page;