import React, { useState, useEffect } from 'react';

// Change this base URL to match your backend environment
const API_BASE_URL =  'https://carbon-credit-backend-j16p.onrender.com/api';

const Wallet = () => {
    const [balance, setBalance] = useState(0);
    const [activeCredits, setActiveCredits] = useState(0);
    const [transactions, setTransactions] = useState([]);

    // UI State
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [lastUpdated, setLastUpdated] = useState('');

    const fetchWalletData = async () => {
        try {
            setLoading(true);
            setError('');

            const token = JSON.parse(localStorage.getItem("user"))?.token;
            const headers = { 'Authorization': `Bearer ${token}` };

            // Fetch balance, transactions, and active credits concurrently
            const [balanceRes, txRes, creditsRes] = await Promise.all([
                fetch(`${API_BASE_URL}/wallet/balance`, { headers }),
                fetch(`${API_BASE_URL}/wallet/transactions`, { headers }),
                fetch(`${API_BASE_URL}/wallet/credits`, { headers })
            ]);

            const balanceData = await balanceRes.json();
            const txData = await txRes.json();
            const creditsData = await creditsRes.json();
            console.log("credit data",creditsData);

            if (balanceRes.ok) {
                setBalance(balanceData.fiat_balance || 0);
                setLastUpdated(balanceData.updated_at || new Date().toISOString());
            } else {
                throw new Error(balanceData.error || balanceData.message || 'Failed to fetch balance');
            }

            if (txRes.ok) {
                setTransactions(txData.transactions || []);
            } else {
                throw new Error(txData.error || txData.message || 'Failed to fetch transactions');
            }

            if (creditsRes.ok) {
                const totalCredits = (creditsData.credits || []).reduce((sum, batch) => sum + (Number(batch.quantity_available || batch.quantity) || 0), 0);
                setActiveCredits(totalCredits);
            } else {
                console.error(creditsData.error || 'Failed to fetch active credits');
            }

        } catch (err) {
            console.error('Error fetching wallet data:', err);
            setError(err.message || 'Network error occurred while fetching wallet details.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchWalletData();
    }, []);

    // Helper to format currency
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(amount);
    };

    // Helper to format date
    const formatDate = (dateString) => {
        if (!dateString) return 'N/A';
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        }).format(date);
    };

    // Helper to determine transaction row color/icon based on type
    const getTransactionStyle = (type, amount) => {
        const isPositive = amount > 0 || type === 'CREDIT_SOLD' || type === 'ESCROW_RELEASED' || type === 'CREDIT_EARNED' || type === 'FIAT_EARNED';

        if (isPositive) return { color: '#059669', bg: '#ecfdf5', icon: '↓', label: 'Received' };
        return { color: '#dc2626', bg: '#fef2f2', icon: '↑', label: 'Spent/Fee' };
    };

    return (
        <div style={{ maxWidth: '900px', margin: '40px auto', padding: '20px', fontFamily: 'sans-serif' }}>
            <h2 style={{ marginBottom: '10px', color: '#111827' }}>My Credit Wallet & Earnings</h2>
            <p style={{ marginTop: '0', marginBottom: '30px', color: '#6b7280' }}>
                Track your active balance, escrow payouts, and complete transaction history.
            </p>

            {error && (
                <div style={{ padding: '12px', marginBottom: '20px', borderRadius: '4px', backgroundColor: '#f8d7da', color: '#721c24' }}>
                    {error}
                </div>
            )}

            {/* Top Balances Row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '20px' }}>
                <div style={{
                    padding: '30px',
                    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                    borderRadius: '12px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}>
                    <div>
                        <h3 style={{ margin: '0 0 10px 0', fontSize: '16px', fontWeight: '500', opacity: 0.9 }}>Total Earnings (USD)</h3>
                        {loading ? (
                            <div style={{ fontSize: '42px', fontWeight: 'bold' }}>$...</div>
                        ) : (
                            <div style={{ fontSize: '48px', fontWeight: 'bold', letterSpacing: '-1px' }}>
                                {formatCurrency(balance)}
                            </div>
                        )}
                        <p style={{ margin: '10px 0 0 0', fontSize: '13px', opacity: 0.8 }}>
                            Last updated: {loading ? 'Loading...' : formatDate(lastUpdated)}
                        </p>
                    </div>
                </div>

                <div style={{
                    padding: '30px',
                    background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                    borderRadius: '12px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}>
                    <div>
                        <h3 style={{ margin: '0 0 10px 0', fontSize: '16px', fontWeight: '500', opacity: 0.9 }}>Active Carbon Credits</h3>
                        {loading ? (
                            <div style={{ fontSize: '42px', fontWeight: 'bold' }}>...</div>
                        ) : (
                            <div style={{ fontSize: '48px', fontWeight: 'bold', letterSpacing: '-1px' }}>
                                {activeCredits}
                            </div>
                        )}
                        <p style={{ margin: '10px 0 0 0', fontSize: '13px', opacity: 0.8 }}>
                            Track your minted credits before listing
                        </p>
                    </div>
                </div>
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', gap: '15px', marginBottom: '30px' }}>
                <button
                    onClick={fetchWalletData}
                    disabled={loading}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#f3f4f6',
                        color: '#374151',
                        border: '1px solid #d1d5db',
                        borderRadius: '6px',
                        cursor: loading ? 'wait' : 'pointer',
                        fontWeight: 'bold'
                    }}
                >
                    {loading ? 'Refreshing...' : 'Refresh'}
                </button>
                <button
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#10b981',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontWeight: 'bold'
                    }}
                    onClick={() => alert("Withdrawal to bank account functionality coming soon!")}
                >
                    Withdraw Funds
                </button>
            </div>

            {/* Transaction History Section */}
            <h3 style={{ color: '#374151', borderBottom: '2px solid #e5e7eb', paddingBottom: '10px', marginBottom: '20px' }}>
                Transaction History
            </h3>

            {loading ? (
                <p>Loading transactions...</p>
            ) : transactions.length === 0 ? (
                <div style={{ padding: '40px', textAlign: 'center', backgroundColor: '#f9fafb', borderRadius: '8px', border: '1px dashed #d1d5db' }}>
                    <p style={{ color: '#6b7280', fontSize: '16px', margin: 0 }}>No transactions found.</p>
                    <p style={{ color: '#9ca3af', fontSize: '14px', marginTop: '8px' }}>Once your credits sell and escrow is released, payments will appear here.</p>
                </div>
            ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    {transactions.map((tx, idx) => {
                        const style = getTransactionStyle(tx.type, tx.amount);
                        return (
                            <div
                                key={tx.id || idx}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: '15px 20px',
                                    border: '1px solid #e5e7eb',
                                    borderRadius: '8px',
                                    backgroundColor: '#ffffff',
                                    boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    {/* Icon circle */}
                                    <div style={{
                                        width: '40px', height: '40px', borderRadius: '50%',
                                        backgroundColor: style.bg, color: style.color,
                                        display: 'flex', justifyContent: 'center', alignItems: 'center',
                                        fontSize: '20px', fontWeight: 'bold'
                                    }}>
                                        {style.icon}
                                    </div>

                                    <div>
                                        <h4 style={{ margin: '0 0 4px 0', color: '#111827', fontSize: '16px' }}>
                                            {tx.type.replace(/_/g, ' ')}
                                        </h4>
                                        <p style={{ margin: '0 0 4px 0', color: '#6b7280', fontSize: '14px' }}>
                                            {tx.description || 'System transaction'}
                                        </p>
                                        <p style={{ margin: 0, color: '#9ca3af', fontSize: '12px' }}>
                                            {formatDate(tx.created_at)}
                                        </p>
                                    </div>
                                </div>

                                <div style={{ textAlign: 'right' }}>
                                    <div style={{ fontSize: '18px', fontWeight: 'bold', color: style.color }}>
                                        {style.icon === '↓' ? '+' : '-'}{formatCurrency(Math.abs(tx.amount || 0))}
                                    </div>
                                    <span style={{ fontSize: '12px', color: '#9ca3af', paddingPx: '4px 8px', borderRadius: '10px', backgroundColor: '#f3f4f6' }}>
                                        {tx.status || 'COMPLETED'}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Wallet;