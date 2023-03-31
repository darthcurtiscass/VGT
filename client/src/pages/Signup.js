// import React from 'react';
// import '../App.css';
// import {
//   AutoComplete,
//   Button,
//   Cascader,
//   Checkbox,
//   Col,
//   Form,
//   Input,
//   InputNumber,
//   Row,
//   Select,
// } from 'antd';
// import { useState } from 'react';
// const { Option } = Select;


// const formItemLayout = {
//   labelCol: {
//     xs: {
//       span: 24,
//     },
//     sm: {
//       span: 8,
//     },
//   },
//   wrapperCol: {
//     xs: {
//       span: 24,
//     },
//     sm: {
//       span: 16,
//     },
//   },
// };
// const tailFormItemLayout = {
//   wrapperCol: {
//     xs: {
//       span: 24,
//       offset: 0,
//     },
//     sm: {
//       span: 16,
//       offset: 8,
//     },
//   },
// };
// const Signup = () => {
//   const [form] = Form.useForm();
//   const onFinish = (values) => {
//     console.log('Received values of form: ', values);
//   };
//   const prefixSelector = (
//     <Form.Item name="prefix" noStyle>
//       <Select
//         style={{
//           width: 70,
//         }}
//       >
//         <Option value="86">+86</Option>
//         <Option value="87">+87</Option>
//       </Select>
//     </Form.Item>
//   );
//   const suffixSelector = (
//     <Form.Item name="suffix" noStyle>
//       <Select
//         style={{
//           width: 70,
//         }}
//       >
//         <Option value="USD">$</Option>
//         <Option value="CNY">¥</Option>
//       </Select>
//     </Form.Item>
//   );
//   const [autoCompleteResult, setAutoCompleteResult] = useState([]);
//   const onWebsiteChange = (value) => {
//     if (!value) {
//       setAutoCompleteResult([]);
//     } else {
//       setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
//     }
//   };
//   const websiteOptions = autoCompleteResult.map((website) => ({
//     label: website,
//     value: website,
//   }));
//   return (
//     <Form
//       {...formItemLayout}
//       form={form}
//       name="register"
//       onFinish={onFinish}
//       initialValues={{
//         residence: ['zhejiang', 'hangzhou', 'xihu'],
//         prefix: '86',
//       }}
//       style={{
//         maxWidth: 600,
//       }}
//       scrollToFirstError
//     >
//       <Form.Item
//         name="username"
//         label="Username"
//         tooltip="What do you want others to call you?"
//         rules={[
//           {
//             required: true,
//             message: 'Please input your username!',
//             whitespace: true,
//           },
//         ]}
//       >
//         <Input />
//       </Form.Item>
//       <Form.Item
//         name="email"
//         label="E-mail"
//         rules={[
//           {
//             type: 'email',
//             message: 'The input is not valid E-mail!',
//           },
//           {
//             required: true,
//             message: 'Please input your E-mail!',
//           },
//         ]}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item
//         name="password"
//         label="Password"
//         rules={[
//           {
//             required: true,
//             message: 'Please input your password!',
//           },
//         ]}
//         hasFeedback
//       >
//         <Input.Password />
//       </Form.Item>

//       <Form.Item
//         name="confirm"
//         label="Confirm Password"
//         dependencies={['password']}
//         hasFeedback
//         rules={[
//           {
//             required: true,
//             message: 'Please confirm your password!',
//           },
//           ({ getFieldValue }) => ({
//             validator(_, value) {
//               if (!value || getFieldValue('password') === value) {
//                 return Promise.resolve();
//               }
//               return Promise.reject(new Error('The two passwords that you entered do not match!'));
//             },
//           }),
//         ]}
//       >
//         <Input.Password />
//       </Form.Item>



//       <Form.Item
//         name="intro"
//         label="Intro"
//         rules={[
//           {
//             required: true,
//             message: 'Please input Intro',
//           },
//         ]}
//       >
//         <Input.TextArea showCount maxLength={100} />
//       </Form.Item>

//       <Form.Item
//         name="gender"
//         label="Gender"
//         rules={[
//           {
//             required: true,
//             message: 'Please select gender!',
//           },
//         ]}
//       >
//         <Select placeholder="select your gender">
//           <Option value="male">Male</Option>
//           <Option value="female">Female</Option>
//           <Option value="other">Other</Option>
//           <Option value="apacheattackhelicopter">Apache Attack Helicopter</Option>
//         </Select>
//       </Form.Item>


//       <Form.Item
//         name="agreement"
//         valuePropName="checked"
//         rules={[
//           {
//             validator: (_, value) =>
//               value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
//           },
//         ]}
//         {...tailFormItemLayout}
//       >
//         <Checkbox>
//           I have read the <a href="">agreement</a>
//         </Checkbox>
//       </Form.Item>
//       <Form.Item {...tailFormItemLayout}>
//         <Button type="primary" htmlType="submit">
//           Register
//         </Button>
//       </Form.Item>
//     </Form>
//   );
// };
// export default Signup;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(CREATE_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Sign Up</h4>
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
                  placeholder="Your username"
                  name="username"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <button
                  className="btn btn-block btn-primary"
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

export default Signup;