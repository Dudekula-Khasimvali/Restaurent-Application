import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import axios from "axios";
import { GoogleLogin } from 'react-google-login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./registerForm.css";
import Navbar from "./Navbar";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleRegistration = async (event) => {
    event.preventDefault();  // Prevent default form submission

    try {
      if (username.trim() === "" || password.trim() === "" || email.trim() === "") {
        toast.error("Please fill in all fields.");
        return;
      }

      const response = await axios.post("http://localhost:3500/api/create", {
        username: username,
        password: password,
        email: email,
      });

      console.log("Registration successful:", response.data);
      toast.success("Registered Successfully");
      setRedirect(true);
    } catch (error) {
      console.error("Registration failed:", error);
      toast.error("Registration failed. Please try again.");
    }
  };

  const responseGoogle = async (response) => {
    try {
      const { profileObj: { email, name } } = response;

      const googleResponse = await axios.post("http://localhost:3500/api/create", {
        username: name,
        email: email,
        password: Math.random().toString(36).substring(7)
      });

      console.log("Registration successful:", googleResponse.data);
      toast.success("Registered Successfully");
      setRedirect(true);
    } catch (error) {
      console.error("Registration failed:", error);
      
    }
  };

  if (redirect) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="register-page">
      <Navbar />
      <div className="row justify-content-center">
        <div className="col-md-6">
          <img src="/images/animation.gif" alt="logo" style={{ width: "100%", height: "auto" }} />
        </div>
        <div className="col-md-6">
          <div className="card">
            <h1 className="card-title">Registration Form</h1>
            <form onSubmit={handleRegistration}>
              <div className="form-group">
                <label>Username:</label>
                <input
                  type="text"
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
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
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div class="form-check mb-3">
              <input class="form-check-input" type="checkbox" id="myCheck" name="remember" required/>
              <label class="form-check-label" for="myCheck">I agree for all.</label>
              <div class="valid-feedback">Valid.</div>
              <div class="invalid-feedback">Check this checkbox to continue.</div>
            </div>
              <div className="text-center">
                <button type="submit" className="btn btn-register">
                  REGISTER
                </button>
              </div>
            </form>
            <div className="mt-3 text-center">
              <p>Already have an account? <Link style={{ textDecoration: 'none' }} to="/login">Login</Link></p>
            </div>

            {/* Google OAuth button */}
            <div className="text-center mt-3">
              <GoogleLogin
                clientId="515837469613-i0pf77ctf6339dnomrnui58c1t2i79uv.apps.googleusercontent.com"
                buttonText="Continue with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
              />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default RegisterPage;
