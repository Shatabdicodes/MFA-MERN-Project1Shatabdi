import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Clear fields on load
  useEffect(() => {
    setName("");
    setEmail("");
    setPassword("");
  }, []);

  const handleRegister = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/auth/register",
        { name, email, password }
      );

      alert("Registered Successfully");
      navigate("/");

    } catch (error) {
      alert(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">

        <div className="auth-brand">
          <span className="auth-brand-dot" />
          <span className="auth-brand-name">Secure Access</span>
        </div>

        <h1 className="auth-title">Create<br />account.</h1>
        <div className="auth-divider" />
        <p className="auth-subtitle">Get started in under a minute</p>

        <form autoComplete="off">
          <div className="auth-field">
            <label className="auth-label">Full name</label>
            <input
              type="text"
              className="auth-input"
              value={name}
              autoComplete="off"
              placeholder="Jane Doe"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="auth-field">
            <label className="auth-label">Email address</label>
            <input
              type="email"
              className="auth-input"
              value={email}
              autoComplete="off"
              placeholder="you@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="auth-field">
            <label className="auth-label">Password</label>
            <input
              type="password"
              className="auth-input"
              value={password}
              autoComplete="new-password"
              placeholder="••••••••"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </form>

        <button className="auth-btn" onClick={handleRegister}>
          Create Account →
        </button>

        <p className="auth-footer">
          Already have an account?{" "}
          <Link to="/">Sign in</Link>
        </p>
      </div>
    </div>
  );
}
