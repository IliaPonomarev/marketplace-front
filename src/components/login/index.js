import React, { useState } from "react";
import { Form, Input, Button, Row, Col, Typography, Layout } from "antd";

const { Title } = Typography;
const { Content } = Layout;

const Login = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const toggleForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  const LoginForm = () => (
    <Form layout="vertical">
      <Title level={2}>Login</Title>
      <Form.Item label="Email" name="email" rules={[{ required: true, message: "Please input your email!" }]}>
      <Input />
    </Form.Item>
    <Form.Item label="Password" name="password" rules={[{ required: true, message: "Please input your password!" }]}>
      <Input.Password />
    </Form.Item>
    <Form.Item>
      <Button type="primary" htmlType="submit">
        Login
      </Button>
      <Button type="link" onClick={toggleForm}>
        Register
      </Button>
    </Form.Item>
  </Form>
);

const RegistrationForm = () => (
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

return (
  <Content style={{ padding: "0 50px" }}>
  <Row justify="center">
    <Col span={12}>
      {showLoginForm ? <LoginForm /> : <RegistrationForm />}
    </Col>
  </Row>
  </Content>
);
};

export default Login;