import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService"; // adjust path if needed
import { useDispatch } from "react-redux";
import { setUserRole } from "../store";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    setLoading(true);

    const data = await login(form.email, form.password);
    console.log("Login successful:", data);

    if (data.user?.role) {
      const role = data.user.role.toLowerCase(); // ⭐ fix

      dispatch(setUserRole(role));
      console.log("User role set in Redux:", role);

      const roleToRoute = {
        admin: "/admin-dashboard",
        farmer: "/farmer-dashboard",
        ngo: "/ngo-dashboard",
        company: "/company-dashboard",
      };

      navigate(roleToRoute[role] || "/");
    }
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white border rounded-xl p-6 shadow-sm">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          Login
        </h1>

        {error && (
          <div className="mb-3 text-sm text-red-600">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={form.password}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;