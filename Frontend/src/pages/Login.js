import React, { useState } from "react";
import { Shield, User, Stethoscope, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState("patient");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const roles = [
    { id: "admin", label: "Admin", icon: Shield },
    { id: "patient", label: "Patient", icon: User },
    { id: "doctor", label: "Doctor", icon: Stethoscope },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, role: selectedRole }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        localStorage.setItem("userRole", data.role);
        localStorage.setItem("userEmail", email);

        if (data.role === "admin") navigate("/admin");
        else if (data.role === "doctor") navigate("/doctor");
        else navigate("/patient");
      } else {
        const errorData = await response.json();
        setError(errorData.error);
      }
    } catch {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="container-fluid  d-flex align-items-center justify-content-center bg-light" style={{ minHeight: '70vh' }}>
      <div className="card shadow" style={{ maxWidth: "450px", width: "100%" }}>
        
        {/* Header */}
        <div className="card-header bg-primary text-white text-center">
          <h4 className="mb-1">Login to HealthCare Portal</h4>
          <small>Access your account</small>
        </div>

        {/* Body */}
        <div className="card-body">
          
          {/* Role Selector */}
          <div className="btn-group w-100 mb-4">
            {roles.map((role) => (
              <button
                key={role.id}
                type="button"
                className={`btn ${
                  selectedRole === role.id ? "btn-primary" : "btn-outline-primary"
                }`}
                onClick={() => setSelectedRole(role.id)}
              >
                <role.icon size={16} className="me-1" />
                {role.label}
              </button>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <div className="input-group">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {error && <div className="text-danger small mb-3">{error}</div>}

            <button type="submit" className="btn btn-primary w-100">
              Login as {roles.find((r) => r.id === selectedRole)?.label}
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="card-footer text-center bg-light">
          <small>
            Don’t have an account?{" "}
            <button
              className="btn btn-link p-0"
              onClick={() => navigate("/signup")}
            >
              Sign up
            </button>
          </small>
        </div>

      </div>
    </div>
  );
};

export default Login;
