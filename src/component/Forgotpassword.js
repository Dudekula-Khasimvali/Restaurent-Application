import React, { useState } from "react";
import axios from 'axios';
import bcrypt from 'bcryptjs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Function to hash a password
const hashPassword = async (plainTextPassword) => {
  const saltRounds = 10;
  return bcrypt.hash(plainTextPassword, saltRounds);
};

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);

  // Function to send OTP
  const handleSendOtp = async () => {
    if (!email) {
      toast.error("Please enter your email.");
      return;
    }
  
    try {
      const response = await axios.post(`http://localhost:3500/api/sendOtp`, { email });
      if (response.status === 200) {
        toast.success("OTP sent to your email.");
        setIsOtpSent(true);
      } else {
        toast.error("Failed to send OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      toast.error("An error occurred while sending OTP. Please try again.");
    }
  };

  // Function to handle password update
  const handleUpdatePassword = async () => {
    if (!email || !newPassword || !otp) {
      toast.error("Please enter all fields.");
      return;
    }
  
    try {
      // Verify OTP
      const verifyOtpResponse = await axios.post(`http://localhost:3500/api/verifyOtp`, { email, otp });
      
      if (verifyOtpResponse.status !== 200 || !verifyOtpResponse.data.valid) {
        toast.error("Invalid OTP. Please try again.");
        return;
      }
  
      // Hash the new password
      const hashedNewPassword = await hashPassword(newPassword);
  
      // Send request to backend to update password
      const updateResponse = await axios.put(`http://localhost:3500/api/updatePassword`, {
        email,
        password: hashedNewPassword
      });
  
      // Check if password was updated successfully
      if (updateResponse.status === 200) {
        toast.success("Password updated successfully!");
        // Clear the input fields
        clearFields();
      } else {
        toast.error("Failed to update password. Please try again.");
      }
    } catch (error) {
      console.error("Error updating password:", error);
      toast.error("An error occurred while updating password. Please try again.");
    }
  };

  // Function to clear input fields
  const clearFields = () => {
    setEmail("");
    setNewPassword("");
    setOtp("");
    setIsOtpSent(false);
  };

  return (
    <div>
      <ToastContainer /> {/* Toast container for displaying notifications */}
      <div style={{ backgroundColor: "lightgray" }}>
        <h3 style={{ textAlign: "center" }}><b>Update Password</b></h3>
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <tbody>
            <tr>
              <td style={{ border: 'none', padding: '8px' }}>Email</td>
              <td style={{ border: 'none', padding: '8px' }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
              </td>
            </tr>
            {isOtpSent && (
              <>
                <tr>
                  <td style={{ border: 'none', padding: '8px' }}>OTP</td>
                  <td style={{ border: 'none', padding: '8px' }}>
                    <input
                      type="text"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      placeholder="OTP"
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ border: 'none', padding: '8px' }}>New Password</td>
                  <td style={{ border: 'none', padding: '8px' }}>
                    <input
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="New Password"
                    />
                  </td>
                </tr>
              </>
            )}
          </tbody>
        </table>
        {!isOtpSent ? (
          <button className="btn btn-primary" onClick={handleSendOtp}>Send OTP</button>
        ) : (
          <button className="btn btn-success" onClick={handleUpdatePassword}>Update Password</button>
        )}
        <br/><br/>
      </div>
    </div>
  );
}

export default ForgotPassword;
