import styles from './CreditMeter.module.css';

const CreditMeter = ({ total, owned, retired }) => {
  const ownedPercentage = (owned / total) * 100;
  const retiredPercentage = (retired / total) * 100;

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>Credit Portfolio</h3>
      
      <div className={styles.meterContainer}>
        <div className={styles.meter}>
          <div 
            className={styles.ownedBar}
            style={{ width: `${ownedPercentage}%` }}
          />
          <div 
            className={styles.retiredBar}
            style={{ width: `${retiredPercentage}%` }}
          />
        </div>
        
        <div className={styles.legend}>
          <div className={styles.legendItem}>
            <span className={`${styles.dot} ${styles.owned}`}></span>
            <span>Owned: {owned} tCO₂</span>
          </div>
          <div className={styles.legendItem}>
            <span className={`${styles.dot} ${styles.retired}`}></span>
            <span>Retired: {retired} tCO₂</span>
          </div>
          <div className={styles.legendItem}>
            <span className={`${styles.dot} ${styles.total}`}></span>
            <span>Total Market: {total} tCO₂</span>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <button className={styles.viewDetails}>View Portfolio →</button>
      </div>
    </div>
  );
};

export default CreditMeter;