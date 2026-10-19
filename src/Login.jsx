
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    setError("");

    // Signup se saved users ko get karo
    const users = JSON.parse(
      localStorage.getItem("users") || "[]"
    );

    // Email aur password verify karo
    const user = users.find(
      (u) =>
        u.email === email.trim() &&
        u.password === password
    );

    if (user) {
      // Logged-in user ko save karo
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify(user)
      );

      // Home page par bhejo
      navigate("/home");
    } else {
      setError("Invalid email or password!");
    }
  }

  return (
    <div className="hospital-login">
      <div className="login-card">
        <div className="hospital-logo">✚</div>

        <h1>MediCare Hospital</h1>
        <p className="login-subtitle">
          Welcome back! Please login.
        </p>

        <form onSubmit={handleLogin}>
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && (
            <p style={{ color: "red" }}>{error}</p>
          )}

          <button type="submit">
            Login to Hospital
          </button>
        </form>

        <p className="login-footer">
          Your Health, Our Priority
        </p>

        <p>
          Don't have an account?{" "}
          <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
