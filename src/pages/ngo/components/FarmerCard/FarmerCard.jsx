import styles from './FarmerCard.module.css';

const FarmerCard = ({ farmer, compact = false }) => {
  if (compact) {
    return (
      <div className={styles.compactCard}>
        <div className={styles.compactInfo}>
          <span className={styles.compactName}>{farmer.name}</span>
          <span className={styles.compactVillage}>{farmer.village}</span>
        </div>
        <span className={`${styles.statusBadge} ${styles[farmer.status]}`}>
          {farmer.status}
        </span>
      </div>
    );
  }

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.avatar}>👨‍🌾</span>
        <span className={`${styles.status} ${styles[farmer.status]}`}>
          {farmer.status}
        </span>
      </div>
      
      <h3 className={styles.name}>{farmer.name}</h3>
      <p className={styles.village}>{farmer.village}</p>
      
      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.statValue}>{farmer.projects}</span>
          <span className={styles.statLabel}>Projects</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statValue}>{farmer.joined}</span>
          <span className={styles.statLabel}>Joined</span>
        </div>
      </div>
      
      <div className={styles.footer}>
        <button className={styles.viewBtn}>View Details</button>
      </div>
    </div>
  );
};

export default FarmerCard;