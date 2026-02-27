import { useState } from 'react';
import styles from './Settings.module.css';

const Settings = ({ onBack }) => {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    marketingEmails: false,
    language: 'english',
    timezone: 'IST',
    twoFactorAuth: false,
    profileVisibility: 'public'
  });

  const handleToggle = (key) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleChange = (e) => {
    setSettings(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button onClick={onBack} className={styles.backButton}>
          <img 
            src="https://api.dicebear.com/7.x/identicon/svg?seed=back&backgroundColor=ffffff&color=000000&size=20" 
            alt="Back"
            className={styles.backIcon}
          />
          <span>Back to Dashboard</span>
        </button>
        <h2 className={styles.title}>Settings</h2>
      </div>
      
      <div className={styles.settingsGrid}>
        {/* Profile Settings */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <img 
              src="https://api.dicebear.com/7.x/identicon/svg?seed=profile&backgroundColor=ffffff&color=000000&size=24" 
              alt=""
              className={styles.cardIcon}
            />
            <h3>Profile Settings</h3>
          </div>
          
          <div className={styles.settingItem}>
            <label className={styles.settingLabel}>Display Name</label>
            <input 
              type="text" 
              defaultValue="Rajesh Kumar"
              className={styles.input}
            />
          </div>
          
          <div className={styles.settingItem}>
            <label className={styles.settingLabel}>Email</label>
            <input 
              type="email" 
              defaultValue="rajesh@example.com"
              className={styles.input}
            />
          </div>
          
          <div className={styles.settingItem}>
            <label className={styles.settingLabel}>Phone</label>
            <input 
              type="tel" 
              defaultValue="+91 9876543210"
              className={styles.input}
            />
          </div>
        </div>

        {/* Notification Settings */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <img 
              src="https://api.dicebear.com/7.x/identicon/svg?seed=notifications&backgroundColor=ffffff&color=000000&size=24" 
              alt=""
              className={styles.cardIcon}
            />
            <h3>Notifications</h3>
          </div>
          
          <div className={styles.settingItem}>
            <div className={styles.toggleContainer}>
              <span>Email Notifications</span>
              <label className={styles.toggle}>
                <input 
                  type="checkbox"
                  checked={settings.emailNotifications}
                  onChange={() => handleToggle('emailNotifications')}
                />
                <span className={styles.toggleSlider}></span>
              </label>
            </div>
          </div>
          
          <div className={styles.settingItem}>
            <div className={styles.toggleContainer}>
              <span>Marketing Emails</span>
              <label className={styles.toggle}>
                <input 
                  type="checkbox"
                  checked={settings.marketingEmails}
                  onChange={() => handleToggle('marketingEmails')}
                />
                <span className={styles.toggleSlider}></span>
              </label>
            </div>
          </div>
        </div>

        {/* Preferences */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <img 
              src="https://api.dicebear.com/7.x/identicon/svg?seed=preferences&backgroundColor=ffffff&color=000000&size=24" 
              alt=""
              className={styles.cardIcon}
            />
            <h3>Preferences</h3>
          </div>
          
          <div className={styles.settingItem}>
            <label className={styles.settingLabel}>Language</label>
            <select 
              name="language"
              value={settings.language}
              onChange={handleChange}
              className={styles.select}
            >
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
              <option value="kannada">Kannada</option>
            </select>
          </div>
          
          <div className={styles.settingItem}>
            <label className={styles.settingLabel}>Timezone</label>
            <select 
              name="timezone"
              value={settings.timezone}
              onChange={handleChange}
              className={styles.select}
            >
              <option value="IST">IST (UTC+5:30)</option>
              <option value="EST">EST (UTC-5:00)</option>
              <option value="PST">PST (UTC-8:00)</option>
            </select>
          </div>
        </div>

        {/* Privacy & Security */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <img 
              src="https://api.dicebear.com/7.x/identicon/svg?seed=security&backgroundColor=ffffff&color=000000&size=24" 
              alt=""
              className={styles.cardIcon}
            />
            <h3>Privacy & Security</h3>
          </div>
          
          <div className={styles.settingItem}>
            <div className={styles.toggleContainer}>
              <span>Two-Factor Authentication</span>
              <label className={styles.toggle}>
                <input 
                  type="checkbox"
                  checked={settings.twoFactorAuth}
                  onChange={() => handleToggle('twoFactorAuth')}
                />
                <span className={styles.toggleSlider}></span>
              </label>
            </div>
          </div>
          
          <div className={styles.settingItem}>
            <label className={styles.settingLabel}>Profile Visibility</label>
            <select 
              name="profileVisibility"
              value={settings.profileVisibility}
              onChange={handleChange}
              className={styles.select}
            >
              <option value="public">Public</option>
              <option value="private">Private</option>
              <option value="contacts">Only Contacts</option>
            </select>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className={styles.saveSection}>
        <button className={styles.saveBtn}>Save Changes</button>
      </div>
    </div>
  );
};

export default Settings;