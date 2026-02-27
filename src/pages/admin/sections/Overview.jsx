import styles from '../Dashboard.module.css';

const Overview = () => {
  const stats = [
    { title: 'Total Users', value: '1,247', change: '+12%', icon: '👥', color: '#588157' },
    { title: 'Pending Approvals', value: '12', change: '+3', icon: '⏳', color: '#f39c12' },
    { title: 'Active Farmers', value: '845', change: '+23', icon: '👨‍🌾', color: '#3a5a40' },
    { title: 'Active NGOs', value: '124', change: '+8', icon: '🤝', color: '#344e41' },
    { title: 'Active Companies', value: '278', change: '+15', icon: '🏢', color: '#1a2634' },
    { title: 'Total Credits', value: '125K', change: '+18%', icon: '💚', color: '#588157' },
  ];

  const recentActivities = [
    { action: 'New farmer registration', user: 'Rajesh Kumar', time: '5 min ago' },
    { action: 'NGO verification pending', user: 'Green Earth Foundation', time: '1 hour ago' },
    { action: 'Company approved', user: 'EcoCorp Industries', time: '3 hours ago' },
    { action: 'Credits issued', user: 'Agroforestry Project', time: '5 hours ago' },
    { action: 'New company registration', user: 'Sustainable Ltd', time: '1 day ago' },
  ];

  return (
    <div>
      <h2 className={styles.sectionTitle}>Admin Overview</h2>
      
      <div className={styles.quickStats}>
        {stats.map((stat, index) => (
          <div key={index} className={styles.quickStatCard}>
            <div className={styles.statIcon} style={{ background: `${stat.color}15`, color: stat.color }}>
              {stat.icon}
            </div>
            <div className={styles.statContent}>
              <h4>{stat.title}</h4>
              <span className={styles.statNumber}>{stat.value}</span>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.grid2}>
        <div className={styles.card}>
          <h3 style={{ color: '#1a2634', marginBottom: '1rem' }}>Recent Activities</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {recentActivities.map((activity, index) => (
              <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <p style={{ fontWeight: '500', color: '#1a2634' }}>{activity.action}</p>
                  <p style={{ fontSize: '0.8rem', color: '#a3b18a' }}>{activity.user}</p>
                </div>
                <span style={{ fontSize: '0.7rem', color: '#a3b18a' }}>{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.card}>
          <h3 style={{ color: '#1a2634', marginBottom: '1rem' }}>System Health</h3>
          <div style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span>Server Status</span>
              <span style={{ color: '#588157', fontWeight: 'bold' }}>● Online</span>
            </div>
            <div style={{ height: '8px', background: '#dad7cd', borderRadius: '4px' }}>
              <div style={{ width: '100%', height: '100%', background: '#588157', borderRadius: '4px' }}></div>
            </div>
          </div>
          
          <div style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span>Database</span>
              <span style={{ color: '#588157', fontWeight: 'bold' }}>98%</span>
            </div>
            <div style={{ height: '8px', background: '#dad7cd', borderRadius: '4px' }}>
              <div style={{ width: '98%', height: '100%', background: '#588157', borderRadius: '4px' }}></div>
            </div>
          </div>
          
          <div style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span>Storage</span>
              <span style={{ color: '#588157', fontWeight: 'bold' }}>45%</span>
            </div>
            <div style={{ height: '8px', background: '#dad7cd', borderRadius: '4px' }}>
              <div style={{ width: '45%', height: '100%', background: '#588157', borderRadius: '4px' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;