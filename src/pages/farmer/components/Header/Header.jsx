import { useState } from 'react';
import styles from './Header.module.css';

const farmers = [
  { name: 'Rajesh Kumar', seed: 'farmer_rajesh_123' },
  { name: 'Priya Sharma', seed: 'farmer_priya_456' },
  { name: 'Amit Patel', seed: 'farmer_amit_789' },
];

const currentFarmer = farmers[0];

const getAvatarUrl = (farmer) => {
  return `https://api.dicebear.com/7.x/identicon/svg?seed=${farmer.seed}&backgroundColor=ffffff&color=000000&size=40&radius=0&scale=80`;
};

const Header = ({ onProfileClick, onNotificationsClick }) => {
  const [notifications] = useState(3);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const farmerAvatar = getAvatarUrl(currentFarmer);

  return (
    <header className={styles.header}>
      <div className={styles.searchBar}>
        <span className={styles.searchIcon}>🔍</span>
        <input 
          type="text" 
          placeholder="Search projects, credits..." 
          className={styles.searchInput}
        />
      </div>

      <div className={styles.rightSection}>
        <div className={styles.weatherWidget}>
          <img 
            src="https://api.dicebear.com/7.x/identicon/svg?seed=weather&backgroundColor=ffffff&color=000000&size=20" 
            alt="Weather"
            className={styles.weatherIcon}
          />
          <div className={styles.weatherInfo}>
            <span className={styles.temp}>28°C</span>
            <span className={styles.location}>Karnataka</span>
          </div>
        </div>

        <div className={styles.notifications} onClick={onNotificationsClick}>
          <button className={styles.notificationBtn}>
            <img 
              src="https://api.dicebear.com/7.x/identicon/svg?seed=notifications_icon&backgroundColor=ffffff&color=000000&size=20" 
              alt="Notifications"
            />
            {notifications > 0 && (
              <span className={styles.badge}>{notifications}</span>
            )}
          </button>
        </div>

        <div className={styles.profile} onClick={onProfileClick}>
          <img 
            src={farmerAvatar}
            alt={currentFarmer.name}
            className={styles.avatar}
          />
          <div className={styles.profileInfo}>
            <span className={styles.name}>{currentFarmer.name}</span>
            <span className={styles.role}>Farmer</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;