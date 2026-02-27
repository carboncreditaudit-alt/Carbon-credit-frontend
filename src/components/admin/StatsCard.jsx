// import styles from './StatsCard.module.css';


const StatsCard = ({ title, value, change, icon, color = '#588157' }) => {
  const isPositive = change?.startsWith('+');

  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper} style={{ background: `${color}15`, color }}>
        {icon}
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.valueWrapper}>
          <span className={styles.value}>{value}</span>
          {change && (
            <span className={`${styles.change} ${isPositive ? styles.positive : styles.negative}`}>
              {change}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;