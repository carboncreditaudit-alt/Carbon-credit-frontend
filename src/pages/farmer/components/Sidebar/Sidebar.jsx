import { useState } from 'react';
import styles from './Sidebar.module.css';

const Sidebar = ({ 
  activeSection, 
  setActiveSection, 
  collapsed, 
  setCollapsed,
  onLogoutClick,
  onSettingsClick 
}) => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const menuItems = [
    { 
      id: 'overview', 
      label: 'Overview', 
      icon: `https://api.dicebear.com/7.x/identicon/svg?seed=overview&backgroundColor=ffffff&color=000000&size=24&radius=0&scale=80`,
      icon2: `https://api.dicebear.com/7.x/identicon/svg?seed=overview2&backgroundColor=ffffff&color=000000&size=24&radius=0&scale=80`
    },
    { 
      id: 'projects', 
      label: 'My Projects', 
      icon: `https://api.dicebear.com/7.x/identicon/svg?seed=projects&backgroundColor=ffffff&color=000000&size=24&radius=0&scale=80`,
      icon2: `https://api.dicebear.com/7.x/identicon/svg?seed=projects2&backgroundColor=ffffff&color=000000&size=24&radius=0&scale=80`
    },
    { 
      id: 'credits', 
      label: 'Carbon Credits', 
      icon: `https://api.dicebear.com/7.x/identicon/svg?seed=credits&backgroundColor=ffffff&color=000000&size=24&radius=0&scale=80`,
      icon2: `https://api.dicebear.com/7.x/identicon/svg?seed=credits2&backgroundColor=ffffff&color=000000&size=24&radius=0&scale=80`
    },
    { 
      id: 'earnings', 
      label: 'Earnings', 
      icon: `https://api.dicebear.com/7.x/identicon/svg?seed=earnings&backgroundColor=ffffff&color=000000&size=24&radius=0&scale=80`,
      icon2: `https://api.dicebear.com/7.x/identicon/svg?seed=earnings2&backgroundColor=ffffff&color=000000&size=24&radius=0&scale=80`
    },
  ];

  const bottomItems = [
    { 
      id: 'settings', 
      label: 'Settings', 
      icon: `https://api.dicebear.com/7.x/identicon/svg?seed=settings&backgroundColor=ffffff&color=000000&size=24&radius=0&scale=80`,
      icon2: `https://api.dicebear.com/7.x/identicon/svg?seed=settings2&backgroundColor=ffffff&color=000000&size=24&radius=0&scale=80`,
      onClick: onSettingsClick
    },
    { 
      id: 'logout', 
      label: 'Logout', 
      icon: `https://api.dicebear.com/7.x/identicon/svg?seed=logout&backgroundColor=ffffff&color=000000&size=24&radius=0&scale=80`,
      icon2: `https://api.dicebear.com/7.x/identicon/svg?seed=logout2&backgroundColor=ffffff&color=000000&size=24&radius=0&scale=80`,
      onClick: onLogoutClick
    },
  ];

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`${styles.sidebar} ${collapsed ? styles.collapsed : ''}`}>
      {/* Logo Area */}
      <div className={styles.logoArea} onClick={toggleSidebar}>
        <div className={styles.logoWrapper}>
          <img 
            src="https://api.dicebear.com/7.x/identicon/svg?seed=carboncredit&backgroundColor=ffffff&color=000000&size=32&radius=0&scale=80" 
            alt="Logo" 
            className={styles.logoIcon}
          />
          {!collapsed && (
            <span className={styles.logoText}>
              Carbon<span style={{ color: '#dad7cd' }}>Credit</span>
            </span>
          )}
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={styles.nav}>
        {menuItems.map((item, index) => (
          <div key={item.id} className={styles.menuItemWrapper}>
            <button
              className={`${styles.navItem} ${activeSection === item.id ? styles.active : ''}`}
              onClick={() => setActiveSection(item.id)}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <img 
                src={hoveredItem === item.id ? item.icon2 : item.icon}
                alt={item.label}
                className={styles.icon}
              />
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

      {/* Bottom Section */}
      <div className={styles.bottomSection}>
        {bottomItems.map((item) => (
          <button
            key={item.id}
            className={`${styles.navItem} ${styles.bottomItem}`}
            onClick={item.onClick}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <img 
              src={hoveredItem === item.id ? item.icon2 : item.icon}
              alt={item.label}
              className={styles.icon}
            />
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