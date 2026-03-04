import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    // ✅ If no token → go to login
    if (!token) {
      navigate("/");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">

        <div className="dashboard-badge">● Active Session</div>

        <h1 className="dashboard-title">Good to see<br />you again.</h1>
        <p className="dashboard-desc">
          You're securely signed in. Manage your session or explore your workspace below.
        </p>

        <div className="dashboard-rule" />

        <button className="auth-btn-ghost" onClick={handleLogout}>
          ← Sign out
        </button>
      </div>
    </div>
  );
}
