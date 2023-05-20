import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "./context/userContext";
import AppContent from "./AppContent";
import "./App.css";

const App = () => {
  return (
    <UserProvider>
      <Router>
        <AppContent />
      </Router>
    </UserProvider>
  );
};

export default App;