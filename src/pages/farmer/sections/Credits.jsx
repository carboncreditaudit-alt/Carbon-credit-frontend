import { useState, useEffect } from 'react';
import styles from '../Dashboard.module.css';

const Credits = () => {
  const [credits, setCredits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    total: 0,
    available: 0,
    pending: 0,
    sold: 0
  });

  useEffect(() => {
    // API call to fetch credits data
    fetchCredits();
  }, []);

  const fetchCredits = async () => {
    try {
      setLoading(true);
      // API call here
      // const response = await api.get('/farmer/credits');
      // setCredits(response.data.credits);
      // setStats(response.data.stats);
    } catch (error) {
      console.error('Error fetching credits:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'available': return '#588157';
      case 'pending': return '#a3b18a';
      case 'sold': return '#344e41';
      default: return '#a3b18a';
    }
  };

  if (loading) {
    return <div className={styles.loadingSpinner}>Loading...</div>;
  }

  return (
    <div>
      <h2 className={styles.sectionTitle}>Carbon Credits</h2>
      
      <div className={styles.grid4}>
        <div className={styles.card}>
          <h3 className={styles.statLabel}>Total Credits</h3>
          <p className={styles.statValue}>{stats.total} tCO₂</p>
          <p className={styles.statSubtext}>Lifetime earned</p>
        </div>
        
        <div className={styles.card}>
          <h3 className={styles.statLabel}>Available</h3>
          <p className={styles.statValue}>{stats.available} tCO₂</p>
          <p className={styles.statSubtext}>Ready to sell</p>
        </div>
        
        <div className={styles.card}>
          <h3 className={styles.statLabel}>Pending</h3>
          <p className={styles.statValue}>{stats.pending} tCO₂</p>
          <p className={styles.statSubtext}>Under verification</p>
        </div>
        
        <div className={styles.card}>
          <h3 className={styles.statLabel}>Sold</h3>
          <p className={styles.statValue}>{stats.sold} tCO₂</p>
          <p className={styles.statSubtext}>Total sold</p>
        </div>
      </div>

      <div className={styles.card} style={{ marginTop: '1.5rem' }}>
        <h3 className={styles.tableTitle}>Credit History</h3>
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
              {credits.map(credit => (
                <tr key={credit.id}>
                  <td>{credit.project}</td>
                  <td className={styles.amount}>{credit.amount} tCO₂</td>
                  <td>
                    <span 
                      className={styles.statusBadge}
                      style={{ background: getStatusColor(credit.status) }}
                    >
                      {credit.status}
                    </span>
                  </td>
                  <td className={styles.date}>{credit.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Credits;