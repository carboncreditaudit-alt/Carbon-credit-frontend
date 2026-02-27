import React, { useState, useEffect } from 'react';

// Change this base URL to match your backend environment
const API_BASE_URL = 'https://carbon-credit-backend-j16p.onrender.com/api/admin/escrow';

const Escrow = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [processingId, setProcessingId] = useState(null);
    const [summary, setSummary] = useState({ total_in_escrow: 0 });

    // Fetch escrow orders from the admin endpoint
    const fetchEscrowOrders = async () => {
        try {
            setLoading(true);
            setError('');

            const token = JSON.parse(localStorage.getItem("user"))?.token;
            const response = await fetch(`${API_BASE_URL}/escrow`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            const data = await response.json();

            if (response.ok) {
                setOrders(data.orders || []);
                setSummary({ total_in_escrow: data.total_in_escrow || 0 });
            } else {
                setError(data.error || data.message || 'Failed to fetch escrow orders');
            }
        } catch (err) {
            console.error('Error fetching escrow:', err);
            setError('Network error occurred while fetching escrow orders.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchEscrowOrders();
    }, []);


    // ⭐ Confirm Order
    const handleConfirm = async (orderId) => {
        if (!window.confirm("Confirm this order transaction?")) return;

        setProcessingId(orderId + "_confirm");

        try {
            const token = JSON.parse(localStorage.getItem("user"))?.token;

            const res = await fetch(
                `https://carbon-credit-backend-j16p.onrender.com/api/company/orders/${orderId}/confirm`,
                {
                    method: "PUT",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await res.json();

            if (res.ok) {
                alert(data.message || "Order confirmed");
                fetchEscrowOrders();
            } else {
                alert(data.message || "Confirm failed");
            }
        } catch {
            alert("Network error");
        } finally {
            setProcessingId(null);
        }
    };

    // Release escrow funds and transfer credits
    const handleRelease = async (orderId) => {
        if (!window.confirm("Are you sure you want to release escrow? This will finalize the transaction, moving credits to the buyer and funds to the seller.")) return;

        setProcessingId(orderId);
        try {
            const token = JSON.parse(localStorage.getItem("user"))?.token;
            // Assuming the endpoint is PATCH /api/admin/escrow/:id/release
            // or PUT /api/orders/:id/confirm depending on your exact implementation over time
            const response = await fetch(`${API_BASE_URL}/escrow/${orderId}/release`, {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });

            const data = await response.json();

            if (response.ok) {
                alert(data.message || 'Escrow released successfully. Order complete.');
                // Remove the processed order from the list
                setOrders(orders.filter(order => order.id !== orderId));
                // Optionally refetch entirely to get updated summary
                fetchEscrowOrders();
            } else {
                alert(data.error || data.message || 'Failed to release escrow');
            }
        } catch (err) {
            console.error('Error releasing escrow:', err);
            alert('Network error occurred while releasing escrow.');
        } finally {
            setProcessingId(null);
        }
    };

    return (
        <div style={{ maxWidth: '1000px', margin: '40px auto', padding: '20px', fontFamily: 'sans-serif' }}>
            <h2 style={{ marginBottom: '10px', color: '#111827' }}>Admin: Escrow Vault Management</h2>
            <p style={{ marginTop: '0', marginBottom: '25px', color: '#6b7280' }}>
                Manage pending orders where buyer funds are securely held until you release them to the seller.
            </p>

            {/* High-level Summary Card */}
            <div style={{ padding: '20px', marginBottom: '30px', backgroundColor: '#eff6ff', borderRadius: '8px', border: '1px solid #bfdbfe', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                    <h3 style={{ margin: '0 0 5px 0', color: '#1e40af' }}>Total Active Escrow Orders</h3>
                    <p style={{ margin: '0', fontSize: '28px', fontWeight: 'bold', color: '#1d4ed8' }}>
                        {summary.total_in_escrow || orders.length}
                    </p>
                </div>
                <button onClick={fetchEscrowOrders} style={{ padding: '8px 16px', backgroundColor: 'transparent', border: '1px solid #3b82f6', color: '#3b82f6', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
                    Refresh
                </button>
            </div>

            {error && (
                <div style={{ padding: '12px', marginBottom: '20px', borderRadius: '4px', backgroundColor: '#f8d7da', color: '#721c24' }}>
                    {error}
                </div>
            )}

            {loading ? (
                <p>Loading escrow orders...</p>
            ) : orders.length === 0 ? (
                <div style={{ padding: '40px', textAlign: 'center', backgroundColor: '#f9fafb', borderRadius: '8px', border: '1px dashed #d1d5db' }}>
                    <p style={{ color: '#6b7280', fontSize: '18px' }}>The escrow vault is empty. No pending orders.</p>
                </div>
            ) : (
                <div className="table-responsive">
                    <table className="table table-hover align-middle">
                        <thead className="table-light">
                            <tr>
                                <th>Order</th>
                                <th>Credit Type</th>
                                <th>Buyer</th>
                                <th>Seller</th>
                                <th>Credits</th>
                                <th>Escrow ($)</th>
                                <th>Date</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            {orders.map((order) => (
                                <tr key={order.id}>
                                    <td className="fw-semibold">#{order.id}</td>

                                    <td>
                                        <span className="badge bg-success">
                                            {order.credit_type?.replace(/_/g, " ")}
                                        </span>
                                    </td>

                                    <td>{order.buyer_email}</td>

                                    <td>{order.seller_email}</td>

                                    <td>{order.credits_purchased}</td>

                                    <td className="text-success fw-bold">
                                        ${Number(order.escrow_amount || order.total_amount).toFixed(2)}
                                    </td>

                                    <td>
                                        {new Date(order.created_at).toLocaleDateString()}
                                    </td>

                                    <td>
                                        <div className="d-flex gap-2">
                                            {/* CONFIRM */}
                                            <button
                                                className="btn btn-sm btn-primary"
                                                onClick={() => handleConfirm(order.id)}
                                                disabled={processingId === order.id + "_confirm"}
                                            >
                                                {processingId === order.id + "_confirm"
                                                    ? "Confirming..."
                                                    : "Confirm"}
                                            </button>

                                            {/* RELEASE */}
                                            <button
                                                className="btn btn-sm btn-success"
                                                onClick={() => handleRelease(order.id)}
                                                disabled={processingId === order.id}
                                            >
                                                {processingId === order.id ? "Processing..." : "Release"}
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Escrow;