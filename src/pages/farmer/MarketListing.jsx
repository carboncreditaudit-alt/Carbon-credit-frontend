import React, { useState } from 'react';

// Change this base URL to match your backend environment
const API_BASE_URL = 'https://carbon-credit-backend-j16p.onrender.com/api';

const MarketListing = () => {
    const [formData, setFormData] = useState({
        credit_type: 'TREE_PLANTATION',
        quantity: '',
        price_per_credit: '',
        location: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [loading, setLoading] = useState(false);

    // Helper to handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Submit the new marketplace listing
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        try {
            // Assuming your frontend stores the JWT token in localStorage
              const token = JSON.parse(localStorage.getItem("user"))?.token;
            const response = await fetch(`${API_BASE_URL}/listing`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    ...formData,
                    quantity: Number(formData.quantity),
                    price_per_credit: Number(formData.price_per_credit)
                })
            });

            const data = await response.json();

            if (response.ok) {
                setStatus({ type: 'success', message: data.message || 'Listing created and pending admin approval!' });
                // Reset form on success
                setFormData({ credit_type: 'TREE_PLANTATION', quantity: '', price_per_credit: '', location: '' });
            } else {
                setStatus({ type: 'error', message: data.error || data.message || 'Failed to create listing' });
            }
        } catch (error) {
            console.error('Error creating listing:', error);
            setStatus({ type: 'error', message: 'Network error occurred while connecting to the server.' });
        } finally {
            setLoading(false);
        }
    };

    return (
  <div
    className="d-flex justify-content-center align-items-center"
    style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg,#DAD7CD,#A3B18A)",
      padding: 30,
    }}
  >
    <div
      className="card shadow-lg"
      style={{
        width: 650,
        borderRadius: 16,
        padding: 35,
        background: "#fff",
      }}
    >
      {/* HEADER */}
      <div className="text-center mb-4">
        <h3 className="fw-bold" style={{ color: "#344E41" }}>
          Create Marketplace Listing
        </h3>
        <p className="text-muted">
          Sell verified carbon credits to buyers
        </p>
      </div>

      {/* STATUS */}
      {status.message && (
        <div
          className={`alert ${
            status.type === "success" ? "alert-success" : "alert-danger"
          }`}
        >
          {status.message}
        </div>
      )}

      {/* FORM */}
      <form onSubmit={handleSubmit}>
        <div className="row">
          {/* CREDIT TYPE */}
          <div className="col-md-6 mb-3">
            <label className="form-label fw-semibold">Credit Type</label>
            <select
              name="credit_type"
              value={formData.credit_type}
              onChange={handleChange}
              className="form-select"
              required
            >
              <option value="TREE_PLANTATION">Tree Plantation</option>
              <option value="REFORESTATION">Reforestation</option>
              <option value="SOLAR_ENERGY">Solar Energy</option>
              <option value="WIND_ENERGY">Wind Energy</option>
            </select>
          </div>

          {/* LOCATION */}
          <div className="col-md-6 mb-3">
            <label className="form-label fw-semibold">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Punjab, India"
              className="form-control"
              required
            />
          </div>

          {/* QUANTITY */}
          <div className="col-md-6 mb-3">
            <label className="form-label fw-semibold">Quantity</label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="50"
              min="1"
              className="form-control"
              required
            />
          </div>

          {/* PRICE */}
          <div className="col-md-6 mb-3">
            <label className="form-label fw-semibold">Price / Credit</label>
            <input
              type="number"
              name="price_per_credit"
              value={formData.price_per_credit}
              onChange={handleChange}
              placeholder="15.50"
              min="0.1"
              step="0.01"
              className="form-control"
              required
            />
          </div>
        </div>

        {/* PRICE PREVIEW ⭐ */}
        {formData.quantity && formData.price_per_credit && (
          <div className="alert alert-info text-center">
            Total value: <strong>
              $
              {(
                Number(formData.quantity) *
                Number(formData.price_per_credit)
              ).toFixed(2)}
            </strong>
          </div>
        )}

        {/* CTA */}
        <button
          type="submit"
          disabled={loading}
          className="btn w-100 mt-2"
          style={{
            background: "linear-gradient(135deg,#588157,#3A5A40)",
            color: "white",
            borderRadius: 12,
            padding: 12,
            fontWeight: 600,
          }}
        >
          {loading ? "Submitting..." : "List Credits for Sale"}
        </button>
      </form>
    </div>
  </div>
);
};

export default MarketListing;