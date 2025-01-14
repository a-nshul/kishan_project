'use client';
import Image from "next/image";
import React, { useState } from "react";
import { Input, Button, Form, message } from "antd";
import { EyeInvisibleOutlined, EyeOutlined,ExclamationCircleOutlined } from "@ant-design/icons";
import LeftLogo from "../asset/halcenter.webp";
import RightLogo from "../asset/Droneacharya-Logo-white.png";
import Background from "../asset/ojas-bg.jpeg";

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const onFinish = (values) => {
    console.log("Success:", values);
    message.success("Login successful!");
  };

  const onFinishFailed = (errorInfo) => {
    message.error("Please fill out the form correctly.");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 relative overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <Image
          src={Background.src}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-500 via-green-600 to-green-800 opacity-70 z-10"></div>
      </div>

      {/* Left Logo */}
      <div className="absolute top-5 left-5 z-20">
        <Image
          src={LeftLogo.src}
          alt="Left Logo"
          width={80}
          height={80}
          className="rounded-full shadow-lg"
        />
      </div>

      {/* Right Logo */}
      <div className="absolute top-5 right-5 z-20">
        <Image
          src={RightLogo.src}
          alt="Right Logo"
          width={120}
          height={120}
          className="rounded-full shadow-lg"
        />
      </div>
      <div className="bg-brown-500 rounded-lg shadow-2xl p-10 z-20 w-full max-w-sm">
       <h2 className="text-1xl font-extrabold text-left text-white mb-8">
         Login
       </h2>
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="space-y-6"
        >
          {/* Email Input */}
          <Form.Item
            label={<span className="text-white">Email</span>}
            name="email"
            labelCol={{ span: 24 }}
            rules={[
              { required: true, message: 'Please enter your email!', icon: <ExclamationCircleOutlined /> },
              { type: 'email', message: 'Please enter a valid email!' },
            ]}
            hasFeedback
          >
            <Input
              id="email"
              placeholder="Enter your email"
              className="py-2 px-4 border rounded-md focus:ring-2 focus:ring-green-400"
            />
          </Form.Item>

          {/* Password Input */}
          <Form.Item
            label={<span className="text-white">Email</span>}
            name="password"
            labelCol={{ span: 24 }}
            rules={[
              { required: true, message: 'Please enter your password!' },
              { min: 6, message: 'Password must be at least 6 characters!' },
            ]}
            hasFeedback
          >
            <Input.Password
              id="password"
              type={passwordVisible ? 'text' : 'password'}
              placeholder="Enter your password"
              className="py-2 px-4 border rounded-md focus:ring-2 focus:ring-green-400"
              iconRender={(visible) =>
                visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>

          {/* Submit Button */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              className="py-2 bg-orange-500 hover:bg-orange-500 focus:bg-orange-500 border-none rounded-full text-white font-semibold"
              style={{ backgroundColor: 'orange', borderColor: 'orange', boxShadow: 'none' }}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Login;
