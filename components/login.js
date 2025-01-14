'use client';

import React, { useState } from 'react';
import { Input, Button, Form, Checkbox, message, Row, Col } from 'antd';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);

//   const onFinish = (values) => {
//     // Handle login logic here
//     console.log('Success:', values);
//     message.success('Login successful!');
//   };

//   const onFinishFailed = (errorInfo) => {
//     message.error('Please fill out the form correctly.');
//   };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="flex bg-white rounded-lg shadow-lg p-10 w-full max-w-md">
        <Row gutter={24} className="w-full">
          <Col span={24}>
            <h2 className="text-center text-3xl font-bold mb-6 text-blue-600">Login</h2>
            <Form
              name="login"
              initialValues={{ remember: true }}
            //   onFinish={onFinish}
            //   onFinishFailed={onFinishFailed}
              className="w-full"
            >
              {/* Email Input */}
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: 'Please enter your email!' },
                  { type: 'email', message: 'Please enter a valid email!' },
                ]}
                hasFeedback
              >
                <Input
                  placeholder="Email"
                  style={{ borderColor: '#4CAF50' }}
                />
              </Form.Item>

              {/* Password Input */}
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: 'Please enter your password!' },
                  { min: 6, message: 'Password must be at least 6 characters!' },
                ]}
                hasFeedback
              >
                <Input
                  type={passwordVisible ? 'text' : 'password'}
                  placeholder="Password"
                  style={{ borderColor: '#4CAF50' }}
                  suffix={
                    <span onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }}>
                      {passwordVisible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                    </span>
                  }
                />
              </Form.Item>

              {/* Remember Me Checkbox */}
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox className="text-sm">Remember me</Checkbox>
              </Form.Item>

              {/* Forgot Password */}
              <div className="text-right mb-6">
                <a href="/forgot-password" className="text-sm text-blue-500">
                  Forgot Password?
                </a>
              </div>

              {/* Submit Button */}
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  style={{
                    backgroundColor: '#4CAF50',
                    borderColor: '#4CAF50',
                    color: '#fff',
                  }}
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Login;
