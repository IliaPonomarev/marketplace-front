import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Typography } from "antd";
import { AuthService } from "../../services/auth";
import { UserContext } from "../../context/userContext";

const { Title } = Typography;

const LoginForm = ({ toggleForm }) => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const user = await AuthService.login(values.email, values.password);
      setUser(user);

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <Form layout="vertical" onFinish={onFinish}>
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
  )
};

export default LoginForm;