import { useState, useEffect } from 'react';
import styles from '../Dashboard.module.css';

const Earnings = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    total: 0,
    thisMonth: 0,
    pending: 0
  });

  useEffect(() => {
    // API call to fetch earnings data
    fetchEarnings();
  }, []);

  const fetchEarnings = async () => {
    try {
      setLoading(true);
      // API call here
      // const response = await api.get('/farmer/earnings');
      // setTransactions(response.data.transactions);
      // setStats(response.data.stats);
    } catch (error) {
      console.error('Error fetching earnings:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'paid': return '#588157';
      case 'pending': return '#a3b18a';
      case 'processing': return '#344e41';
      default: return '#a3b18a';
    }
  };

  if (loading) {
    return <div className={styles.loadingSpinner}>Loading...</div>;
  }

  return (
    <div>
      <h2 className={styles.sectionTitle}>Earnings</h2>
      
      <div className={styles.grid3}>
        <div className={styles.card}>
          <h3 className={styles.statLabel}>Total Earnings</h3>
          <p className={styles.statValue}>₹{stats.total.toLocaleString()}</p>
          <p className={styles.statSubtext}>Lifetime earnings</p>
        </div>
        
        <div className={styles.card}>
          <h3 className={styles.statLabel}>This Month</h3>
          <p className={styles.statValue}>₹{stats.thisMonth.toLocaleString()}</p>
          <p className={styles.statSubtext}>Current month</p>
        </div>
        
        <div className={styles.card}>
          <h3 className={styles.statLabel}>Pending</h3>
          <p className={styles.statValue}>₹{stats.pending.toLocaleString()}</p>
          <p className={styles.statSubtext}>Awaiting payment</p>
        </div>
      </div>

      <div className={styles.card} style={{ marginTop: '1.5rem' }}>
        <h3 className={styles.tableTitle}>Transaction History</h3>
        <div className={styles.tableContainer}>
          <table>
            <thead>
              <tr>
                <th>Project</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map(transaction => (
                <tr key={transaction.id}>
                  <td>{transaction.project}</td>
                  <td className={styles.amount}>₹{transaction.amount}</td>
                  <td>
                    <span 
                      className={styles.statusBadge}
                      style={{ background: getStatusColor(transaction.status) }}
                    >
                      {transaction.status}
                    </span>
                  </td>
                  <td className={styles.date}>{transaction.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Earnings;