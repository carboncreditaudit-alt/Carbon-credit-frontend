import { useState } from 'react';
import styles from './Header.module.css';

const companies = [
  { name: 'EcoCorp Industries', seed: 'EcoCorp', style: 'avataaars' },
  { name: 'GreenFuture Ltd', seed: 'GreenFuture', style: 'personas' },
  { name: 'Sustainable Solutions', seed: 'Sustainable', style: 'avataaars' },
];

const currentCompany = companies[0];

const getAvatarUrl = (company) => {
  const baseUrl = 'https://api.dicebear.com/7.x';
  const backgroundColor = '344e41';
  
  if (company.style === 'avataaars') {
    return `${baseUrl}/avataaars/svg?seed=${company.seed}&backgroundColor=${backgroundColor}`;
  } else {
    return `${baseUrl}/personas/svg?seed=${company.seed}&backgroundColor=${backgroundColor}`;
  }
};

const Header = () => {
  const [notifications] = useState(5);
  const companyAvatar = getAvatarUrl(currentCompany);

  return (
    <header className={styles.header}>
      <div className={styles.searchBar}>
        <span className={styles.searchIcon}> 🔍</span>
        <input 
          type="text" 
          placeholder="Search carbon credits, projects..." 
          className={styles.searchInput}
        />
      </div>

      <div className={styles.rightSection}>
        <div className={styles.weatherWidget}>
          <span className={styles.weatherIcon}>📈</span>
          <div className={styles.weatherInfo}>
            <span className={styles.temp}>$42.50</span>
            <span className={styles.location}>Credit Price</span>
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
            src={companyAvatar}
            alt={currentCompany.name}
            className={styles.avatar}
          />
          <div className={styles.profileInfo}>
            <span className={styles.name}>{currentCompany.name}</span>
            <span className={styles.role}>Company</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;