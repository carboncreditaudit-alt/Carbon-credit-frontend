import { useState } from 'react';
import styles from '../Dashboard.module.css';

const Settings = () => {
  const [settings, setSettings] = useState({
    siteName: 'Carbon Credit Platform',
    adminEmail: 'admin@carboncredit.com',
    approvalRequired: true,
    autoVerification: false,
    notifyOnRegistration: true,
    notifyOnApproval: true,
    maintenanceMode: false
  });

  const handleToggle = (key) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div>
      <h2 className={styles.sectionTitle}>System Settings</h2>
      
      <div className={styles.grid2}>
        <div className={styles.card}>
          <h3 style={{ color: '#1a2634', marginBottom: '1.5rem' }}>General Settings</h3>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#344e41', fontWeight: '500' }}>
              Site Name
            </label>
            <input 
              type="text" 
              value={settings.siteName}
              className={styles.settingsInput}
              style={{ width: '100%', padding: '0.75rem', border: '1px solid #dad7cd', borderRadius: '0.5rem' }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#344e41', fontWeight: '500' }}>
              Admin Email
            </label>
            <input 
              type="email" 
              value={settings.adminEmail}
              className={styles.settingsInput}
              style={{ width: '100%', padding: '0.75rem', border: '1px solid #dad7cd', borderRadius: '0.5rem' }}
            />
          </div>
        </div>

        <div className={styles.card}>
          <h3 style={{ color: '#1a2634', marginBottom: '1.5rem' }}>Approval Settings</h3>
          
          <div style={{ marginBottom: '1rem' }}>
            <label className={styles.toggleSwitch}>
              <input 
                type="checkbox" 
                checked={settings.approvalRequired}
                onChange={() => handleToggle('approvalRequired')}
              />
              <span className={styles.toggleSlider}></span>
              <span style={{ marginLeft: '0.5rem', color: '#344e41' }}>Require admin approval for new users</span>
            </label>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label className={styles.toggleSwitch}>
              <input 
                type="checkbox" 
                checked={settings.autoVerification}
                onChange={() => handleToggle('autoVerification')}
              />
              <span className={styles.toggleSlider}></span>
              <span style={{ marginLeft: '0.5rem', color: '#344e41' }}>Auto-verify trusted organizations</span>
            </label>
          </div>
        </div>

        <div className={styles.card}>
          <h3 style={{ color: '#1a2634', marginBottom: '1.5rem' }}>Notification Settings</h3>
          
          <div style={{ marginBottom: '1rem' }}>
            <label className={styles.toggleSwitch}>
              <input 
                type="checkbox" 
                checked={settings.notifyOnRegistration}
                onChange={() => handleToggle('notifyOnRegistration')}
              />
              <span className={styles.toggleSlider}></span>
              <span style={{ marginLeft: '0.5rem', color: '#344e41' }}>Email on new registration</span>
            </label>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label className={styles.toggleSwitch}>
              <input 
                type="checkbox" 
                checked={settings.notifyOnApproval}
                onChange={() => handleToggle('notifyOnApproval')}
              />
              <span className={styles.toggleSlider}></span>
              <span style={{ marginLeft: '0.5rem', color: '#344e41' }}>Email on approval/rejection</span>
            </label>
          </div>
        </div>

        <div className={styles.card}>
          <h3 style={{ color: '#1a2634', marginBottom: '1.5rem' }}>System Status</h3>
          
          <div style={{ marginBottom: '1rem' }}>
            <label className={styles.toggleSwitch}>
              <input 
                type="checkbox" 
                checked={settings.maintenanceMode}
                onChange={() => handleToggle('maintenanceMode')}
              />
              <span className={styles.toggleSlider}></span>
              <span style={{ marginLeft: '0.5rem', color: '#344e41' }}>Maintenance Mode</span>
            </label>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <button className={styles.primaryButton} style={{ width: '100%' }}>
              Save Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;