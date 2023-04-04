import { Button, Checkbox, Form, Input } from 'antd';
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';

import zeldaWave from '../assets/images/zelda-wave.jpeg'

import Auth from '../utils/auth';
import { LOGIN_USER } from '../utils/mutations';

const LoginForm = () => {
  const [login, { error, data }] = useMutation(LOGIN_USER);

  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await login({
        variables: { ...userFormData }
      })
      console.log(data)
      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

return (
  <main className="flex-row justify-center mb-4 mx-auto">
    <div className="col-12 col-12 ">
      <div className="card w-75 mx-auto bg-dark ">
        <h4 className="card-header bg-dark text-light p-2">Login</h4>
        <img src={zeldaWave} alt="User profile" />
        <div className="card-body">
          {data ? (
            <p>
              Success! You may now head{' '}
              <Link to="/">back to the homepage.</Link>
            </p>
          ) : (
            <form onSubmit={handleFormSubmit}>
              <input
                className="form-input"
                placeholder="Your email"
                name="email"
                type="email"
                value={userFormData.email}
                onChange={handleInputChange}
              />
              <input
                className="form-input"
                placeholder="******"
                name="password"
                type="password"
                value={userFormData.password}
                onChange={handleInputChange}
              />
              <button
                className="btn-sm btn-block btn-dark"
                style={{ cursor: 'pointer' }}
                type="submit"
              >
                Submit
              </button>
            </form>
          )}

          {error && (
            <div className="my-3 p-3 bg-danger text-white">
              {error.message}
            </div>
          )}
        </div>
      </div>
    </div>
  </main>
);
};

// const onFinish = (values) => {
//   console.log('Success:', values);
// };
// const onFinishFailed = (errorInfo) => {
//   console.log('Failed:', errorInfo);
// };

// return (
//   <Form
//     // noValidate validated={validated}
//     onSubmit={handleFormSubmit}
//     name="basic"
//     labelCol={{
//       span: 8,
//     }}
//     wrapperCol={{
//       span: 16,
//     }}
//     style={{
//       maxWidth: 600,
//     }}
//     initialValues={{
//       remember: true,
//     }}
    
//     onFinish={onFinish}
//     onFinishFailed={onFinishFailed}
//     autoComplete="off"
//   >
//     <Form.Item
//       label="Username"
//       name="username"
//       onChange={handleInputChange}
//       value={userFormData.username}
//       rules={[
//         {
//           required: true,
//           message: 'Please input your username!',
//         },
//       ]}
//     >
//       <Input />
//     </Form.Item>

//     <Form.Item
//       label="Password"
//       name="password"
//       onChange={handleInputChange}
//       value={userFormData.password}
//       rules={[
//         {
//           required: true,
//           message: 'Please input your password!',
//         },
//       ]}
//     >
//       <Input.Password />
//     </Form.Item>

//     <Form.Item
//       name="remember"
//       valuePropName="checked"
//       wrapperCol={{
//         offset: 8,
//         span: 16,
//       }}
//     >
//       <Checkbox>Remember me</Checkbox>
//     </Form.Item>

//     <Form.Item
//       wrapperCol={{
//         offset: 8,
//         span: 16,
//       }}
//     >
//       <Button type="submit">
//         Submit
//       </Button>
//     </Form.Item>
//   </Form>
// )};


export default LoginForm;