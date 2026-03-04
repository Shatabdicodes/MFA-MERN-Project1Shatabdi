import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export default function VerifyOTP() {
  const [otp, setOtp] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const email = location.state?.email;

  const verify = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/verify-otp",
        { email, otp }
      );

      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");

    } catch (error) {
      alert("Invalid OTP");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">

        <div className="auth-brand">
          <span className="auth-brand-dot" />
          <span className="auth-brand-name">Secure Access</span>
        </div>

        <h1 className="auth-title">Verify<br />identity.</h1>
        <div className="auth-divider" />
        <p className="auth-subtitle">
          Enter the one-time code sent to{" "}
          <span style={{ color: "var(--accent)" }}>{email || "your email"}</span>
        </p>

        <div className="auth-field">
          <label className="auth-label">One-time password</label>
          <input
            type="text"
            className="otp-input"
            placeholder="· · · · · ·"
            onChange={(e) => setOtp(e.target.value)}
          />
        </div>

        <button className="auth-btn" onClick={verify}>
          Verify &amp; Continue →
        </button>

        <p className="auth-footer">
          Didn't receive a code?{" "}
          <span className="auth-link" style={{ cursor: "pointer" }}>Resend</span>
        </p>
      </div>
    </div>
  );
}
