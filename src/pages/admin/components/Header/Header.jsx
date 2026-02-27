import { useState } from 'react';
import styles from './Header.module.css';

const admin = {
  name: 'Admin User',
  role: 'Super Admin',
  avatar: 'https://ui-avatars.com/api/?name=Admin+User&background=1a2634&color=fff&size=40&bold=true'
};

const Header = () => {
  const [notifications] = useState(12);

  return (
    <header className={styles.header}>
      <div className={styles.searchBar}>
        <span className={styles.searchIcon}>🔍</span>
        <input 
          type="text" 
          placeholder="Search users, approvals..." 
          className={styles.searchInput}
        />
      </div>

      <div className={styles.rightSection}>
        <div className={styles.statsWidget}>
          <span className={styles.statsIcon}>⏳</span>
          <div className={styles.statsInfo}>
            <span className={styles.statsValue}>12 Pending</span>
            <span className={styles.statsLabel}>Approvals</span>
          </div>
        </div>

        <div className={styles.notifications}>
          <button className={styles.notificationBtn}>
            🔔
            {notifications > 0 && (
              <span className={styles.badge}>{notifications}</span>
            )}
          </button>
        </div>

        <div className={styles.profile}>
          <img 
            src={admin.avatar}
            alt={admin.name}
            className={styles.avatar}
          />
          <div className={styles.profileInfo}>
            <span className={styles.name}>{admin.name}</span>
            <span className={styles.role}>{admin.role}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;