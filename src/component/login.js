import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./login.css"; // Import the CSS file
import Navbar from "./Navbar";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function handleLogin(event) {
    event.preventDefault();

    try {
      if (email.trim() === "" || password.trim() === "") {
        toast.error("Please enter both email and password.");
        return;
      }

      const response = await axios.get(`http://localhost:3500/api/getByemail/${email}`);

      if (response.data) {
        if (response.data.password === password) {
          toast.success("Login successful!");
          setRedirect(true);
        } else {
          toast.error("Incorrect password. Please try again.");
        }
      } else {
        toast.error("User not found. Please check your email.");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("An error occurred. Please try again later.");
    }
  }

  if (redirect) {
    return <Navigate to="/home" />;
  }

  return (
    <div>
      <Navbar />
      <div className="row justify-content-center">
        <div className="col-md-6">
          <img src="/images/animation.gif" alt="logo" style={{ width: "100%", height: "auto" }} />
        </div>
        <div className="col-md-6">
          <div className="card">
            <h1 className="card-title">LOGIN</h1>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div class="form-check mb-3">
    <label class="form-check-label">
      <input class="form-check-input" type="checkbox" name="remember"/> Remember me
    </label>
  </div>
              <div className="text-center">
                <button type="submit" className="btn btn-login">
                  Login
                </button>
              </div>
            </form>
            <div className="mt-3 text-center">
              <p>Don't have an account? <Link style={{ textDecoration: 'none' }} to="/register">Register</Link></p>
              <a style={{ textDecoration: 'none' }} href="/update">Forgot password?</a>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default LoginPage;
