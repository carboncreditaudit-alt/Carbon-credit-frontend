import React, { useState, useEffect } from "react";

const API_BASE =
  "https://carbon-credit-backend-j16p.onrender.com/api/admin/listings";

const ApprovalMarketListing = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [processingId, setProcessingId] = useState(null);

  const token = JSON.parse(localStorage.getItem("user"))?.token;

  // ⭐ Fetch pending
  const fetchPendingListings = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch(`${API_BASE}/listings/pending`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();

      if (res.ok) {
        setListings(data.listings || []);
      } else {
        setError(data.message || "Failed to fetch listings");
      }
    } catch {
      setError("Network error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPendingListings();
  }, []);

  // ⭐ Approve
  const handleApprove = async (id) => {
    if (!window.confirm("Approve this listing to go LIVE?")) return;

    setProcessingId(id);

    try {
      const res = await fetch(`${API_BASE}/listings/${id}/approve`, {
        method: "PATCH",
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();

      if (res.ok) {
        setListings((prev) => prev.filter((l) => l.id !== id));
      } else {
        alert(data.message || "Approval failed");
      }
    } catch {
      alert("Network error");
    } finally {
      setProcessingId(null);
    }
  };

  return (
    <div className="container mt-4">
      <div className="card shadow-sm p-4">
        <h4 className="mb-3">Pending Marketplace Listings</h4>

        {/* ERROR */}
        {error && <div className="alert alert-danger">{error}</div>}

        {/* LOADING */}
        {loading ? (
          <div className="text-center py-4">
            <div className="spinner-border text-success"></div>
          </div>
        ) : listings.length === 0 ? (
          <div className="text-center text-muted py-5">
            No pending listings found
          </div>
        ) : (
          <div className="row">
            {listings.map((listing) => (
              <div className="col-md-6 mb-3" key={listing.id}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">
                      {listing.credit_type.replace("_", " ")}
                    </h5>

                    <p className="mb-1">
                      <strong>Quantity:</strong>{" "}
                      {listing.quantity_available} Credits
                    </p>

                    <p className="mb-1">
                      <strong>Price:</strong> $
                      {listing.price_per_credit} / credit
                    </p>

                    <p className="mb-1">
                      <strong>Location:</strong> {listing.location}
                    </p>

                    <p className="mb-2">
                      <strong>Seller:</strong> {listing.seller_email}
                    </p>

                    <span className="badge bg-warning mb-3">PENDING</span>

                    <div className="d-grid">
                      <button
                        className="btn btn-success"
                        disabled={processingId === listing.id}
                        onClick={() => handleApprove(listing.id)}
                      >
                        {processingId === listing.id
                          ? "Approving..."
                          : "Approve to Live"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ApprovalMarketListing;