import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import LogoutModal from './components/LogoutModal';
import Overview from './sections/Overview';
import Projects from './sections/Projects';
import Credits from './sections/Credits';
import Earnings from './sections/Earnings';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import Notifications from './pages/Notifications';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };

  const handleSettingsClick = () => {
    setShowSettings(true);
    setShowProfile(false);
    setShowNotifications(false);
    setActiveSection('settings');
  };

  const handleProfileClick = () => {
    setShowProfile(true);
    setShowSettings(false);
    setShowNotifications(false);
  };

  const handleNotificationsClick = () => {
    setShowNotifications(true);
    setShowSettings(false);
    setShowProfile(false);
  };

  const handleBackToDashboard = () => {
    setShowSettings(false);
    setShowProfile(false);
    setShowNotifications(false);
    setActiveSection('overview');
  };

  const renderSection = () => {
    if (showSettings) {
      return <Settings onBack={handleBackToDashboard} />;
    }
    if (showProfile) {
      return <Profile onBack={handleBackToDashboard} />;
    }
    if (showNotifications) {
      return <Notifications onBack={handleBackToDashboard} />;
    }
    
    switch(activeSection) {
      case 'overview':
        return <Overview />;
      case 'projects':
        return <Projects />;
      case 'credits':
        return <Credits />;
      case 'earnings':
        return <Earnings />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className={styles.dashboard}>
      <Sidebar 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
        onLogoutClick={handleLogoutClick}
        onSettingsClick={handleSettingsClick}
      />
      <div className={`${styles.mainContent} ${sidebarCollapsed ? styles.expanded : ''}`}>
        <Header 
          onProfileClick={handleProfileClick}
          onNotificationsClick={handleNotificationsClick}
        />
        <div className={styles.contentArea}>
          {renderSection()}
        </div>
      </div>
      <LogoutModal 
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
      />
    </div>
  );
};

export default Dashboard;