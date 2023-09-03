import React from "react";

const Login = ({ handleLogin }) => {
  return (
    <div>
      <h1>Login</h1>

      <button type="button" onClick={handleLogin}>LOGIN</button>
    </div>
  )
}

export default Login;