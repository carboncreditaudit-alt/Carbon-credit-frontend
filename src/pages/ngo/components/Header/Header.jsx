import { useState } from 'react';
import styles from './Header.module.css';

const ngos = [
  { name: 'Green Earth Foundation', seed: 'GreenEarth', style: 'avataaars' },
  { name: 'Farmers Help Initiative', seed: 'FarmersHelp', style: 'personas' },
  { name: 'Sustainable Future NGO', seed: 'Sustainable', style: 'avataaars' },
];

const currentNGO = ngos[0];

const getAvatarUrl = (ngo) => {
  const baseUrl = 'https://api.dicebear.com/7.x';
  const backgroundColor = '3a5a40';
  
  if (ngo.style === 'avataaars') {
    return `${baseUrl}/avataaars/svg?seed=${ngo.seed}&backgroundColor=${backgroundColor}`;
  } else {
    return `${baseUrl}/personas/svg?seed=${ngo.seed}&backgroundColor=${backgroundColor}`;
  }
};

const Header = () => {
  const [notifications] = useState(7);
  const ngoAvatar = getAvatarUrl(currentNGO);

  return (
    <header className={styles.header}>
      <div className={styles.searchBar}>
        <span className={styles.searchIcon}> 🔍</span>
        <input 
          type="text" 
          placeholder="Search farmers, projects..." 
          className={styles.searchInput}
        />
      </div>

      <div className={styles.rightSection}>
        <div className={styles.weatherWidget}>
          <span className={styles.weatherIcon}>🌱</span>
          <div className={styles.weatherInfo}>
            <span className={styles.temp}>124 Farmers</span>
            <span className={styles.location}>Under Management</span>
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
            src={ngoAvatar}
            alt={currentNGO.name}
            className={styles.avatar}
          />
          <div className={styles.profileInfo}>
            <span className={styles.name}>{currentNGO.name}</span>
            <span className={styles.role}>NGO</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;