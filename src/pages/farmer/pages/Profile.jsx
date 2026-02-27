import styles from './Profile.module.css';

const Profile = ({ onBack }) => {
  const farmer = {
    name: 'Rajesh Kumar',
    role: 'Farmer',
    email: 'rajesh@example.com',
    phone: '+91 9876543210',
    village: 'Karnataka, India',
    joined: 'January 2024',
    stats: {
      projects: 3,
      credits: 2450,
      trees: 1250
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button onClick={onBack} className={styles.backButton}>
          <img 
            src="https://api.dicebear.com/7.x/identicon/svg?seed=back&backgroundColor=ffffff&color=000000&size=20" 
            alt="Back"
            className={styles.backIcon}
          />
          <span>Back to Dashboard</span>
        </button>
      </div>

      <div className={styles.profileHeader}>
        <div className={styles.avatarSection}>
          <img 
            src="https://api.dicebear.com/7.x/identicon/svg?seed=rajesh_profile&backgroundColor=ffffff&color=000000&size=80" 
            alt={farmer.name}
            className={styles.avatar}
          />
          <button className={styles.editAvatarBtn}>
            <img 
              src="https://api.dicebear.com/7.x/identicon/svg?seed=edit&backgroundColor=ffffff&color=000000&size=16" 
              alt="Edit"
            />
          </button>
        </div>
        
        <div className={styles.profileInfo}>
          <h1 className={styles.name}>{farmer.name}</h1>
          <p className={styles.role}>{farmer.role}</p>
          <p className={styles.location}>📍 {farmer.village}</p>
          <p className={styles.joined}>🌱 Member since {farmer.joined}</p>
        </div>
      </div>

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <img 
            src="https://api.dicebear.com/7.x/identicon/svg?seed=projects_stat&backgroundColor=ffffff&color=000000&size=32" 
            alt="Projects"
            className={styles.statIcon}
          />
          <div className={styles.statContent}>
            <span className={styles.statValue}>{farmer.stats.projects}</span>
            <span className={styles.statLabel}>Projects</span>
          </div>
        </div>
        
        <div className={styles.statCard}>
          <img 
            src="https://api.dicebear.com/7.x/identicon/svg?seed=credits_stat&backgroundColor=ffffff&color=000000&size=32" 
            alt="Credits"
            className={styles.statIcon}
          />
          <div className={styles.statContent}>
            <span className={styles.statValue}>{farmer.stats.credits}</span>
            <span className={styles.statLabel}>tCO₂ Credits</span>
          </div>
        </div>
        
        <div className={styles.statCard}>
          <img 
            src="https://api.dicebear.com/7.x/identicon/svg?seed=trees_stat&backgroundColor=ffffff&color=000000&size=32" 
            alt="Trees"
            className={styles.statIcon}
          />
          <div className={styles.statContent}>
            <span className={styles.statValue}>{farmer.stats.trees}</span>
            <span className={styles.statLabel}>Trees Planted</span>
          </div>
        </div>
      </div>

      <div className={styles.detailsCard}>
        <h3 className={styles.detailsTitle}>Personal Information</h3>
        
        <div className={styles.detailItem}>
          <span className={styles.detailLabel}>Email</span>
          <span className={styles.detailValue}>{farmer.email}</span>
        </div>
        
        <div className={styles.detailItem}>
          <span className={styles.detailLabel}>Phone</span>
          <span className={styles.detailValue}>{farmer.phone}</span>
        </div>
        
        <div className={styles.detailItem}>
          <span className={styles.detailLabel}>Village</span>
          <span className={styles.detailValue}>{farmer.village}</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;