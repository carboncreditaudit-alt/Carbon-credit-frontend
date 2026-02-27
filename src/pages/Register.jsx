import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [form, setForm] = useState({
    email: "",
    phone: "",
    password: "",
    role: "",
  });

  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(false);

  // Handle common fields
  const handleChange = (e) => {
    const { name, value } = e.target;

    // If role changes → reset profile
    if (name === "role") {
      setForm({ ...form, role: value });
      setProfile({});
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  // Handle profile fields
  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  // Submit
 const handleSubmit = async (e) => {
  e.preventDefault();

  const payload = {
    ...form,
    profile: profile,
  };

  try {
    setLoading(true);

    const res = await axios.post(
      "https://carbon-credit-backend-j16p.onrender.com/api/auth/register",
      payload
    );

    console.log("SUCCESS →", res.data);

    alert("✅ Registration successful");

    // optional reset
    setForm({
      email: "",
      phone: "",
      password: "",
      role: "",
    });
    setProfile({});
  } catch (err) {
    console.log(err);

    alert(
      err?.response?.data?.message ||
        "❌ Registration failed"
    );
  } finally {
    setLoading(false);
  }
};

  // Dynamic profile form
  const renderProfileFields = () => {
    switch (form.role) {
      case "FARMER":
        return (
          <>
            <div className="mb-3">
              <label className="form-label">Land Size</label>
              <input
                type="number"
                className="form-control"
                name="land_size"
                onChange={handleProfileChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Location</label>
              <input
                type="text"
                className="form-control"
                name="location"
                onChange={handleProfileChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Bank Account</label>
              <input
                type="text"
                className="form-control"
                name="bank_account"
                onChange={handleProfileChange}
              />
            </div>
          </>
        );

      case "NGO":
        return (
          <>
            <div className="mb-3">
              <label className="form-label">Organization Name</label>
              <input
                type="text"
                className="form-control"
                name="organization_name"
                onChange={handleProfileChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Registration Number</label>
              <input
                type="text"
                className="form-control"
                name="registration_number"
                onChange={handleProfileChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Address</label>
              <input
                type="text"
                className="form-control"
                name="address"
                onChange={handleProfileChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Bank Account</label>
              <input
                type="text"
                className="form-control"
                name="bank_account"
                onChange={handleProfileChange}
              />
            </div>
          </>
        );

      case "COMPANY":
        return (
          <>
            <div className="mb-3">
              <label className="form-label">Company Name</label>
              <input
                type="text"
                className="form-control"
                name="company_name"
                onChange={handleProfileChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Company Registration Number</label>
              <input
                type="text"
                className="form-control"
                name="company_registration_number"
                onChange={handleProfileChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Industry</label>
              <input
                type="text"
                className="form-control"
                name="industry"
                onChange={handleProfileChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Address</label>
              <input
                type="text"
                className="form-control"
                name="address"
                onChange={handleProfileChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Bank Account</label>
              <input
                type="text"
                className="form-control"
                name="bank_account"
                onChange={handleProfileChange}
              />
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
  <div
    style={{
      minHeight: "100vh",
      background:
        "linear-gradient(135deg,#DAD7CD,#A3B18A,#588157)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 20,
    }}
  >
    <div
      className="shadow-lg"
      style={{
        width: "900px",
        borderRadius: 20,
        background: "rgba(255,255,255,0.9)",
        backdropFilter: "blur(12px)",
        padding: 40,
      }}
    >
      {/* HEADER */}
      <div className="text-center mb-4">
        <h2 style={{ color: "#344E41", fontWeight: 700 }}>
          Create Your Account
        </h2>
        <p style={{ color: "#588157" }}>
          Join the ecosystem and start contributing 🌱
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        {/* COMMON FIELDS */}
        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={handleChange}
              placeholder="Enter email"
              style={{ borderRadius: 12 }}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label fw-semibold">Phone</label>
            <input
              type="text"
              className="form-control"
              name="phone"
              onChange={handleChange}
              placeholder="Enter phone"
              style={{ borderRadius: 12 }}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={handleChange}
              placeholder="Enter password"
              style={{ borderRadius: 12 }}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label fw-semibold">Role</label>
            <select
              className="form-select"
              name="role"
              onChange={handleChange}
              style={{ borderRadius: 12 }}
              required
            >
              <option value="">Select Role</option>
              <option value="FARMER">Farmer</option>
              <option value="NGO">NGO</option>
              <option value="COMPANY">Company</option>
            </select>
          </div>
        </div>

        {/* PROFILE SECTION */}
        {form.role && (
          <>
            <hr style={{ margin: "25px 0", color: "#A3B18A" }} />

            <h5
              style={{
                color: "#3A5A40",
                fontWeight: 600,
                marginBottom: 15,
              }}
            >
              Profile Details
            </h5>

            <div className="row">{renderProfileFields()}</div>
          </>
        )}

        {/* BUTTON */}
        <button
          type="submit"
          className="btn w-100 mt-4"
          style={{
            background: "linear-gradient(135deg,#588157,#3A5A40)",
            color: "white",
            borderRadius: 12,
            padding: "12px 0",
            fontWeight: 600,
            fontSize: 16,
            border: "none",
          }}
        >
          Register
        </button>
      </form>
    </div>
  </div>
);
};

export default Register;