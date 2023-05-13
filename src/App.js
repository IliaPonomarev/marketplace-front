import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import Header from "./components/header";
import MainContent from "./components/main";
import Footer from "./components/footer";
import Login from "./components/login";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Layout className="main-layout">
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Layout>
    </Router>
  );
};

export default App;
