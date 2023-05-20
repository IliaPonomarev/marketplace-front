import React, { useState } from "react";
import { Row, Col, Layout } from "antd";
import LoginForm from "./loginForm";
import RegistrationForm from "./registrationForm";
import { UserContext } from "../../context/userContext";

const { Content } = Layout;

const Login = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [user, setUser] = useState(null);

  const toggleForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Content style={{ padding: "0 50px" }}>
        <Row justify="center">
          <Col span={12}>
            {showLoginForm ? <LoginForm toggleForm={toggleForm} /> : <RegistrationForm toggleForm={toggleForm} />}
          </Col>
        </Row>
      </Content>
    </UserContext.Provider>
  );
};

export default Login;