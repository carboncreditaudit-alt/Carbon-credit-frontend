import styles from './CreditMeter.module.css';

const CreditMeter = ({ total = 0, earned = 0, pending = 0 }) => {
  const earnedPercentage = total > 0 ? (earned / total) * 100 : 0;
  const pendingPercentage = total > 0 ? (pending / total) * 100 : 0;

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>Carbon Credit Meter</h3>
        <span className={styles.totalValue}>{total.toLocaleString()} tCO₂</span>
      </div>
      
      <div className={styles.meterContainer}>
        <div className={styles.meter}>
          <div 
            className={styles.earnedBar}
            style={{ width: `${earnedPercentage}%` }}
          />
          <div 
            className={styles.pendingBar}
            style={{ width: `${pendingPercentage}%` }}
          />
        </div>
        
        <div className={styles.legend}>
          <div className={styles.legendItem}>
            <span className={`${styles.dot} ${styles.earned}`}></span>
            <span className={styles.legendText}>
              <strong>Earned:</strong> {earned.toLocaleString()} tCO₂
            </span>
          </div>
          <div className={styles.legendItem}>
            <span className={`${styles.dot} ${styles.pending}`}></span>
            <span className={styles.legendText}>
              <strong>Pending:</strong> {pending.toLocaleString()} tCO₂
            </span>
          </div>
          <div className={styles.legendItem}>
            <span className={`${styles.dot} ${styles.remaining}`}></span>
            <span className={styles.legendText}>
              <strong>Remaining:</strong> {(total - earned - pending).toLocaleString()} tCO₂
            </span>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <button className={styles.viewDetails}>View Detailed Breakdown →</button>
      </div>
    </div>
  );
};

export default CreditMeter;