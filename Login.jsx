import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //  Clear fields when page loads
  useEffect(() => {
    setEmail("");
    setPassword("");
  }, []);

  const handleLogin = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );

      navigate("/verify", { state: { email } });

    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">

        <div className="auth-brand">
          <span className="auth-brand-dot" />
          <span className="auth-brand-name">Secure Access</span>
        </div>

        <h1 className="auth-title">Welcome<br />back.</h1>
        <div className="auth-divider" />
        <p className="auth-subtitle">Sign in to continue to your account</p>

        <form autoComplete="off">
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

        <button className="auth-btn" onClick={handleLogin}>
          Sign In →
        </button>

        <p className="auth-footer">
          Don't have an account?{" "}
          <Link to="/register">Create one</Link>
        </p>
      </div>
    </div>
  );
}
