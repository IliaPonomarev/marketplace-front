import React, { useContext, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import { UserContext } from './context/userContext';
import { AuthService } from './services/auth';

import Header from "./components/header";
import MainContent from "./components/main";
import Footer from "./components/footer";
import Login from "./components/login";

const AppContent = () => {
  const { setUser, setIsAuthenticated, setIsLoading } = useContext(UserContext);

  useEffect(() => {
    const initializeUser = async () => {
      setIsLoading(true);

      const token = localStorage.getItem('user');
      if (token) {
        const user = await AuthService.getMe(JSON.parse(token));
        setUser(user);
        setIsAuthenticated(true);
      }

      setIsLoading(false);
    };

    initializeUser();
  }, [setUser, setIsAuthenticated, setIsLoading]);

  return (
    <Layout className="main-layout">
      <Header />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Layout>
  );
};

export default AppContent;