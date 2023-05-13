import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

const FooterComponent = () => {
  return (
    <Footer style={{ textAlign: "center", background: "#001529", color: "white" }}>
      Beauty Services Marketplace ©{new Date().getFullYear()}
    </Footer>
  );
};

export default FooterComponent;