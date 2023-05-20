import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { UserContext } from '../../context/userContext';

const { Header } = Layout;

const HeaderComponent = () => {
  const { isAuthenticated, isLoading, logout } = useContext(UserContext);

  if (isLoading) {
    return null;
  }

  return (
    <Header style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
        {isAuthenticated
          ? (
            <>
              <Menu.Item key="2">
                <Link to="/profile">Profile</Link> 
              </Menu.Item>
              <Menu.Item key="3" onClick={logout}>
                Logout
              </Menu.Item>
            </>
          )
          : (
            <Menu.Item key="2">
              <Link to="/login">Login</Link>
            </Menu.Item>
          )
        }
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default HeaderComponent;