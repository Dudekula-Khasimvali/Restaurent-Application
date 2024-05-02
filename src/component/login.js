import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import axios from "axios";
import "./login.css"; // Import the CSS file

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function handleLogin(event) {
    event.preventDefault();

    try {
      if (username.trim() === "" || password.trim() === "") {
        setErrorMessage("Please enter both username and password.");
        return;
      }

      const response = await axios.get(`http://localhost:3500/api/getByUsename/${username}`);

      if (response.data) {
        if (response.data.password === password) {
          alert("Login successful!");
          setRedirect(true);
        } else {
          setErrorMessage("Incorrect password. Please try again.");
        }
      } else {
        setErrorMessage("User not found. Please check your username.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("An error occurred. Please try again later.");
    }
  }

  if (redirect) {
    return <Navigate to="/data" />;
  }

  return (
    <div>
       <nav class="navbar navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">MENU</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">MENU</h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li class="nav-item">
                        <a class="nav-link " href="*">HOME</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/rigister">RIGISTER</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/data">DATA</a>
                    </li>
                </ul>
                
            </div>
        </div>
    </div>
</nav> <br/><br/>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <h1 className="card-title">LOGIN</h1>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label>Username:</label>
                <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
              <div className="text-center">
                <button type="submit" className="btn btn-login">
                  Login
                </button>
              </div>
            </form>
            <div className="mt-3 text-center">
              <p>Don't have an account? <Link to="/register">Register</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
