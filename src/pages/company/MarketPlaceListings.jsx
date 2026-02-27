import React, { useState, useEffect } from 'react';

// Change this base URL to match your backend environment
const API_BASE_URL =  'https://carbon-credit-backend-j16p.onrender.com/api/';

const MarketplaceListings = () => {
    const [listings, setListings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [purchaseQuantity, setPurchaseQuantity] = useState({});
    const [processingId, setProcessingId] = useState(null);

    // Filter states
    const [filters, setFilters] = useState({
        credit_type: '',
        location: '',
        min_price: '',
        max_price: ''
    });

    // Fetch active listings from the marketplace
    const fetchListings = async () => {
        try {
            setLoading(true);
            setError('');

            // Build query parameters
            const queryParams = new URLSearchParams();
            if (filters.credit_type) queryParams.append('credit_type', filters.credit_type);
            if (filters.location) queryParams.append('location', filters.location);
            if (filters.min_price) queryParams.append('min_price', filters.min_price);
            if (filters.max_price) queryParams.append('max_price', filters.max_price);

            const queryString = queryParams.toString() ? `?${queryParams.toString()}` : '';

            // Assuming your frontend stores the JWT token in localStorage
        
           const response = await fetch(`${API_BASE_URL}listing${queryString}`, {
});

            const data = await response.json();

            if (response.ok) {
                setListings(data.listings || []);
            } else {
                setError(data.error || data.message || 'Failed to fetch listings');
            }
        } catch (err) {
            console.error('Error fetching listings:', err);
            setError('Network error occurred while fetching marketplace listings.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchListings();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filters]); // Re-fetch when filters change (you might want to debouce this in a real app)

    const handleFilterChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    const handleQuantityChange = (id, value) => {
        setPurchaseQuantity({ ...purchaseQuantity, [id]: value });
    };

    // Place an order (Buying credits)
    const handleBuy = async (listingId) => {
        const quantity = Number(purchaseQuantity[listingId] || 1);
        if (!quantity || quantity <= 0) {
            alert("Please enter a valid quantity to purchase.");
            return;
        }

        if (!window.confirm(`Are you sure you want to purchase ${quantity} credits? Funds will be held in escrow.`)) return;

        setProcessingId(listingId);
        try {
            const token = JSON.parse(localStorage.getItem("user"))?.token;
            const response = await fetch(`${API_BASE_URL}company/orders`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    listing_id: listingId,
                    quantity: quantity
                })
            });

            const data = await response.json();

            if (response.ok) {
                alert(`Success! ${data.message || 'Order placed successfully. Funds held in escrow.'}\nOrder ID: ${data.orderId || data.order?.id}`);
                // Clear the quantity input for this listing
                setPurchaseQuantity({ ...purchaseQuantity, [listingId]: '' });
                // Optional: Refresh listings to update available quantities
                fetchListings();
            } else {
                alert(data.error || data.message || 'Failed to place order');
            }
        } catch (err) {
            console.error('Error placing order:', err);
            alert('Network error occurred while placing the order.');
        } finally {
            setProcessingId(null);
        }
    };

   return (
  <div className="container mt-4" style={{ maxWidth: 1100 }}>
    {/* HEADER */}
    <div className="mb-3">
      <h3 className="fw-bold">Carbon Credits Marketplace</h3>
      <p className="text-muted">
        Browse and purchase verified carbon credits
      </p>
    </div>

    {/* FILTER PANEL */}
    <div className="card shadow-sm p-3 mb-4">
      <div className="row g-3 align-items-end">
        <div className="col-md-3">
          <label className="form-label fw-semibold">Type</label>
          <select
            name="credit_type"
            value={filters.credit_type}
            onChange={handleFilterChange}
            className="form-select"
          >
            <option value="">All Types</option>
            <option value="TREE_PLANTATION">Tree Plantation</option>
            <option value="REFORESTATION">Reforestation</option>
            <option value="SOLAR_ENERGY">Solar Energy</option>
            <option value="WIND_ENERGY">Wind Energy</option>
          </select>
        </div>

        <div className="col-md-3">
          <label className="form-label fw-semibold">Location</label>
          <input
            type="text"
            name="location"
            value={filters.location}
            onChange={handleFilterChange}
            placeholder="e.g. India"
            className="form-control"
          />
        </div>

        <div className="col-md-2">
          <label className="form-label fw-semibold">Min Price</label>
          <input
            type="number"
            name="min_price"
            value={filters.min_price}
            onChange={handleFilterChange}
            className="form-control"
          />
        </div>

        <div className="col-md-2">
          <label className="form-label fw-semibold">Max Price</label>
          <input
            type="number"
            name="max_price"
            value={filters.max_price}
            onChange={handleFilterChange}
            className="form-control"
          />
        </div>

        <div className="col-md-2 d-grid">
          <button className="btn btn-dark" onClick={fetchListings}>
            Search
          </button>
        </div>
      </div>
    </div>

    {/* ERROR */}
    {error && <div className="alert alert-danger">{error}</div>}

    {/* LOADING */}
    {loading ? (
      <div className="text-center py-5">
        <div className="spinner-border text-success"></div>
      </div>
    ) : listings.length === 0 ? (
      <div className="text-center py-5 text-muted">
        No credits available matching your criteria
      </div>
    ) : (
      <div className="row">
        {listings.map((listing) => (
          <div className="col-md-4 mb-4" key={listing.id}>
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column">
                {/* TYPE BADGE */}
                <span className="badge bg-success mb-2 align-self-start">
                  {listing.credit_type?.replace(/_/g, " ")}
                </span>

                {/* PRICE */}
                <h4 className="fw-bold mb-2 text-dark">
                  ${Number(listing.price_per_credit).toFixed(2)}
                  <small className="text-muted fs-6"> / credit</small>
                </h4>

                {/* DETAILS */}
                <p className="mb-1">
                  <strong>Location:</strong> {listing.location}
                </p>

                <p className="mb-3">
                  <strong>Available:</strong>{" "}
                  {listing.quantity_available || listing.quantity} credits
                </p>

                {/* BUY SECTION */}
                <div className="mt-auto d-flex gap-2">
                  <input
                    type="number"
                    min="1"
                    max={listing.quantity_available || listing.quantity}
                    value={purchaseQuantity[listing.id] || ""}
                    onChange={(e) =>
                      handleQuantityChange(listing.id, e.target.value)
                    }
                    placeholder="Qty"
                    className="form-control"
                    style={{ maxWidth: 80 }}
                  />

                  <button
                    className="btn btn-primary flex-grow-1"
                    disabled={processingId === listing.id}
                    onClick={() => handleBuy(listing.id)}
                  >
                    {processingId === listing.id
                      ? "Processing..."
                      : "Buy Credits"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
);
};

export default MarketplaceListings;