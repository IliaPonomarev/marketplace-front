import React from "react";
import { Form, Input, Button, Typography } from "antd";

const { Title } = Typography;

const RegistrationForm = ({ toggleForm }) => (
  <Form layout="vertical">
    <Title level={2}>Register</Title>
    <Form.Item label="Email" name="email" rules={[{ required: true, message: "Please input your email!" }]}>
      <Input />
    </Form.Item>
    <Form.Item label="Password" name="password" rules={[{ required: true, message: "Please input your password!" }]}>
      <Input.Password />
    </Form.Item>
    <Form.Item>
      <Button type="primary" htmlType="submit">
        Register
      </Button>
      <Button type="link" onClick={toggleForm}>
        Login
      </Button>
    </Form.Item>
  </Form>
);

export default RegistrationForm;