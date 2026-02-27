import { useState } from 'react';
import styles from './Sidebar.module.css';

const Sidebar = ({ activeSection, setActiveSection, collapsed, setCollapsed }) => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: '📊', icon2: '📈' },
    { id: 'farmers', label: 'Farmers', icon: '👨‍🌾', icon2: '👩‍🌾' },
    { id: 'projects', label: 'Projects', icon: '🌳', icon2: '🌿' },
    { id: 'reports', label: 'Reports', icon: '📋', icon2: '📄' },
  ];

  const bottomItems = [
    { id: 'settings', label: 'Settings', icon: '⚙️', icon2: '🔧' },
    { id: 'logout', label: 'Logout', icon: '🚪', icon2: '→' },
  ];

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`${styles.sidebar} ${collapsed ? styles.collapsed : ''}`}>
      <div className={styles.logoArea} onClick={toggleSidebar}>
        <div className={styles.logoWrapper}>
          <span className={styles.logoIcon}>🤝</span>
          {!collapsed && (
            <span className={styles.logoText}>
              Carbon<span style={{ color: '#dad7cd' }}>NGO</span>
            </span>
          )}
        </div>
      </div>

      <nav className={styles.nav}>
        {menuItems.map((item, index) => (
          <div key={item.id} className={styles.menuItemWrapper}>
            <button
              className={`${styles.navItem} ${activeSection === item.id ? styles.active : ''}`}
              onClick={() => setActiveSection(item.id)}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <span className={styles.icon}>
                {hoveredItem === item.id ? item.icon2 : item.icon}
              </span>
              {!collapsed && (
                <>
                  <span className={styles.label}>{item.label}</span>
                  {activeSection === item.id && (
                    <span className={styles.activeDot}></span>
                  )}
                </>
              )}
            </button>
            {!collapsed && index < menuItems.length - 1 && (
              <div className={styles.divider}></div>
            )}
          </div>
        ))}
      </nav>

      <div className={styles.bottomSection}>
        {bottomItems.map((item) => (
          <button
            key={item.id}
            className={`${styles.navItem} ${styles.bottomItem}`}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <span className={styles.icon}>
              {hoveredItem === item.id ? item.icon2 : item.icon}
            </span>
            {!collapsed && (
              <span className={styles.label}>{item.label}</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;