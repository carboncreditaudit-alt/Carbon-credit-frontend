import { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Overview from './sections/Overview';
import Approvals from './sections/Approvals';
import Farmers from './sections/Farmers';
import NGOs from './sections/NGOs';
import Companies from './sections/Companies';
import Settings from './sections/Settings';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const renderSection = () => {
    switch(activeSection) {
      case 'overview':
        return <Overview />;
      case 'approvals':
        return <Approvals />;
      case 'farmers':
        return <Farmers />;
      case 'ngos':
        return <NGOs />;
      case 'companies':
        return <Companies />;
      case 'settings':
        return <Settings />;
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
      />
      <div className={`${styles.mainContent} ${sidebarCollapsed ? styles.expanded : ''}`}>
        <Header />
        <div className={styles.contentArea}>
          {renderSection()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;