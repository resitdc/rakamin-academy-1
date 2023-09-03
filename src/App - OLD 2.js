import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  }

  const handleLogout = () => {
    setIsAuthenticated(false);
  }

  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={isAuthenticated ? (
          <Navigate to="/dashboard" />
        ) : (
          <Login handleLogin={handleLogin} />
        )} />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              element={<Dashboard handleLogout={handleLogout} />}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;