import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!/^[a-zA-Z ]+$/.test(form.name.trim())) {
      setError("Please enter a valid name.");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(form.phone)) {
      setError("Enter a valid 10-digit Indian mobile number.");
      return;
    }

    if (form.password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const users = JSON.parse(
      localStorage.getItem("users") || "[]"
    );

    const email = form.email.trim().toLowerCase();

    if (users.some((user) => user.email === email)) {
      setError("Email already registered. Please login.");
      return;
    }

    users.push({
      name: form.name.trim(),
      email,
      phone: form.phone,
      password: form.password,
    });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful! Please login.");

    navigate("/login");
  }

  return (
    <div className="signup-page">
      <div className="signup-card">
        <div className="signup-logo">✚</div>

        <p className="signup-brand">MEDICARE HOSPITAL</p>

        <h1>Create Account</h1>

        <p className="signup-subtitle">
          Register to get started with MediCare
        </p>

        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="10-digit mobile number"
            value={form.phone}
            onChange={handleChange}
            maxLength={10}
            required
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Minimum 6 characters"
            value={form.password}
            onChange={handleChange}
            minLength={6}
            required
          />

          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Enter password again"
            value={form.confirmPassword}
            onChange={handleChange}
            required
          />

          {error && (
            <p className="signup-error">{error}</p>
          )}

          <button type="submit">
            Create Account →
          </button>
        </form>

        <p className="signup-switch">
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>

        <p className="signup-footer">
          Your Health, Our Priority
        </p>
      </div>
    </div>
  );
}

export default Signup;