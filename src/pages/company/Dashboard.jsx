import { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Overview from './sections/Overview';
import Marketplace from './sections/Marketplace';
import Portfolio from './sections/Portfolio';
import Impact from './sections/Impact';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const renderSection = () => {
    switch(activeSection) {
      case 'overview':
        return <Overview />;
      case 'marketplace':
        return <Marketplace />;
      case 'portfolio':
        return <Portfolio />;
      case 'impact':
        return <Impact />;
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
        role="company"
      />
      <div className={`${styles.mainContent} ${sidebarCollapsed ? styles.expanded : ''}`}>
        <Header role="company" />
        <div className={styles.contentArea}>
          {renderSection()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;