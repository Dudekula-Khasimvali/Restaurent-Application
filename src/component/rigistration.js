import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom"; // Make sure you have React Router set up
import axios from "axios"; // Import Axios
import "./registerForm.css"; // Import the CSS file

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [redirect, setRedirect] = useState(false);

  // Function to handle form submission
  const handleRegistration = async () => {
    try {
      if (username.trim() === "" || password.trim() === "" || email.trim() === "") {
        setErrorMessage("Please fill in all fields.");
        return;
      }

      // Make POST request to backend API
      const response = await axios.post("http://localhost:3500/api/create", {
        username: username,
        password: password,
        email: email,
      });

      // Handle successful registration
      console.log("Registration successful:", response.data);
      alert("Registered Successfully");
      setRedirect(true);
    } catch (error) {
      // Handle registration error
      console.error("Registration failed:", error);
      setErrorMessage("Registration failed. Please try again.");
    }
  };

  // Redirect to login page if registration is successful
  if (redirect) {
    return <Navigate to="/login" />;
  }

  return (
    <div >
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
                        <a class="nav-link" href="/login">LOGIN</a>
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
            <h1 className="card-title">Registration Form</h1>
            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
            <div className="form-group">
              <label>Username:</label>
              <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="text-center">
              <button type="button" onClick={handleRegistration} className="btn btn-register">
                REGISTER
              </button>
            </div>
            <div className="mt-3 text-center">
              <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
