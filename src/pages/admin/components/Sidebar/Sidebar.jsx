import { useState } from 'react';
import styles from './Sidebar.module.css';

const Sidebar = ({ activeSection, setActiveSection, collapsed, setCollapsed }) => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: '📊', icon2: '📈' },
    { id: 'approvals', label: 'Approvals', icon: '✅', icon2: '✔️', badge: 12 },
    { id: 'farmers', label: 'Farmers', icon: '👨‍🌾', icon2: '👩‍🌾' },
    { id: 'ngos', label: 'NGOs', icon: '🤝', icon2: '🤲' },
    { id: 'companies', label: 'Companies', icon: '🏢', icon2: '🏭' },
    { id: 'settings', label: 'Settings', icon: '⚙️', icon2: '🔧' },
  ];

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`${styles.sidebar} ${collapsed ? styles.collapsed : ''}`}>
      <div className={styles.logoArea} onClick={toggleSidebar}>
        <div className={styles.logoWrapper}>
          <span className={styles.logoIcon}>👑</span>
          {!collapsed && (
            <span className={styles.logoText}>
              Admin<span style={{ color: '#dad7cd' }}>Panel</span>
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
                  {item.badge && (
                    <span className={styles.badge}>{item.badge}</span>
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
        <button className={styles.navItem}>
          <span className={styles.icon}>🚪</span>
          {!collapsed && <span className={styles.label}>Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;