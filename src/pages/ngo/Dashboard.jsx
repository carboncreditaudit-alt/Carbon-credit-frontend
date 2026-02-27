import { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Overview from './sections/Overview';
import Farmers from './sections/Farmers';
import Projects from './sections/Projects';
import Reports from './sections/Reports';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const renderSection = () => {
    switch(activeSection) {
      case 'overview':
        return <Overview />;
      case 'farmers':
        return <Farmers />;
      case 'projects':
        return <Projects />;
      case 'reports':
        return <Reports />;
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