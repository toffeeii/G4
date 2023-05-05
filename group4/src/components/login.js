<<<<<<< HEAD
import React from "react";
// import "./page.css";
import "./login.css"
import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");



  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(`Username: ${username}, Password: ${password}`);

    // Here you would typically make a call to your API to authenticate the user
  };

  return (
    
    <div
      className="courses-container"
      style={{
        backgroundColor: "black",
        color: "white",
      }}
    >
      
      <div className="container1 mt-5">
        <div className="login-container mt-5">
          <h1>Login</h1>

          <form onSubmit={handleSubmit}>
            <div className="form-group p-2">
              <label htmlFor="username" className="pb-3">Username</label>

              <input
                type="text"
                id="username"
              
                value={username}
                onChange={handleUsernameChange}
              />
            </div>

            <div className="form-group p-2">
              <label htmlFor="password" className="pb-3">Password</label>

              <input
                type="password"
                id="password"
                
                value={password}
                onChange={handlePasswordChange}
              />
            </div>

<div className="row">
  <div className="col-md-4">
  <button type="submit" className="btn btn-danger text-center btn-small mt-3">
              Login
            </button>
    </div>
    <div className="col-md-8">
    <button type="button" className="forgot-password-btn ">
              Forgot password?
            </button>
      </div>
</div>
            
          </form>

          <p className="signup-link">
            Don't have an account? <a href="/signup">Sign up here</a>
          </p>
        </div>
      </div>
    </div>
  );
}
=======
import React from 'react';
import './page.css';

function Login() {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="courses-container"
    style={{
        backgroundColor: 'black',
        color: 'white'
    }}
    >
      <button className="back-button" onClick={handleBack}>{"<"}</button>
      <h1>Login</h1>
      <p>content goes here</p>
    </div>
  );
};
>>>>>>> a06d63368a04dbcd4533382cbdfdfee1073e96d0

export default Login;


<<<<<<< HEAD
=======

/*import React from 'react';

function Login  ()  {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: 'black',
                color: 'white'
            }}
        >
            <h1>Login</h1>
        </div>
    );
};

export default Login;
*/
>>>>>>> a06d63368a04dbcd4533382cbdfdfee1073e96d0
