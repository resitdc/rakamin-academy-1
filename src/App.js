import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, Link } from "react-router-dom";
import { GoogleLogin, GoogleOAuthProvider, googleLogout } from "@react-oauth/google";

const CLIENT_ID = "193499195677-o76k6of6mael4l0qpm9hheqgs14atk2l.apps.googleusercontent.com";

const Home = () => {
  return <h1>THIS IS HOME</h1>
};

const Dashboard = () => {
  return <h1>Welcome to Dashboard</h1>
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
    }

  }, []);

  const onSuccess = (response) => {
    localStorage.setItem("token", response.credential);
    // navigate.push("/dashboard")
    window.location.href = "http://localhost:3000/dashboard";
  };

  const onFailure = (response) => {
    console.error(response);
  };

  const onLogoutSuccess = (response) => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);

    window.location.href = "http://localhost:3000/";
    // navigate.push("/")
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/dasboard"> Dashboard </Link>
            </li>
          </ul>
          {/* {
            isLoggedIn ?
              <GoogleLogout
                clientId={CLIENT_ID}
                buttonText="Logout"
                onLogoutSuccess={onLogoutSuccess}
              />
              : <GoogleLogin
                clientId={CLIENT_ID}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                responseType="code,token"
                isSignedIn={true}
              />
          } */}
          {
            !isLoggedIn && (
              <GoogleOAuthProvider clientId={CLIENT_ID}>
                <GoogleLogin
                  buttonText="Login"
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                  cookiePolicy={'single_host_origin'}
                  responseType="code,token"
                  isSignedIn={true}
                />
              </GoogleOAuthProvider>
            )
          }
        </nav>
        <Routes>
          <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;