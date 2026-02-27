import StatsCard from '../components/StatsCard/StatsCard';
import FarmerCard from '../components/FarmerCard/FarmerCard';
import ActivityList from '../components/ActivityList/ActivityList';
import styles from '../Dashboard.module.css';

const Overview = () => {
  const stats = [
    { title: 'Total Farmers', value: '124', change: '+12', icon: '👨‍🌾', color: '#588157' },
    { title: 'Active Projects', value: '48', change: '+8', icon: '🌳', color: '#3a5a40' },
    { title: 'Total Credits', value: '24,500 tCO₂', change: '+15%', icon: '🌿', color: '#a3b18a' },
    { title: 'Verification Pending', value: '12', change: '-3', icon: '⏳', color: '#344e41' },
  ];

  const recentFarmers = [
    { id: 1, name: 'Rajesh Kumar', village: 'Village A', projects: 3, status: 'active' },
    { id: 2, name: 'Priya Sharma', village: 'Village B', projects: 2, status: 'pending' },
    { id: 3, name: 'Amit Patel', village: 'Village C', projects: 4, status: 'active' },
  ];

  return (
    <div>
      <h2 className={styles.sectionTitle}>NGO Overview</h2>
      
      <div className={styles.grid4}>
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      <div className={styles.grid2}>
        <div className={styles.card}>
          <h3 style={{ color: '#344e41', marginBottom: '1rem' }}>Recent Farmers</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {recentFarmers.map(farmer => (
              <FarmerCard key={farmer.id} farmer={farmer} compact />
            ))}
          </div>
          <button className={styles.viewAllBtn}>View All Farmers →</button>
        </div>

        <div className={styles.card}>
          <h3 style={{ color: '#344e41', marginBottom: '1rem' }}>Recent Activity</h3>
          <ActivityList type="ngo" />
        </div>
      </div>

      <div className={styles.grid2} style={{ marginTop: '1rem' }}>
        <div className={styles.card}>
          <h3 style={{ color: '#344e41', marginBottom: '1rem' }}>Project Distribution</h3>
          <div style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span style={{ color: '#344e41' }}>Verified</span>
              <span style={{ color: '#588157', fontWeight: 'bold' }}>32</span>
            </div>
            <div style={{ height: '8px', background: '#dad7cd', borderRadius: '4px' }}>
              <div style={{ width: '67%', height: '100%', background: '#588157', borderRadius: '4px' }}></div>
            </div>
          </div>
          
          <div style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span style={{ color: '#344e41' }}>Pending</span>
              <span style={{ color: '#a3b18a', fontWeight: 'bold' }}>12</span>
            </div>
            <div style={{ height: '8px', background: '#dad7cd', borderRadius: '4px' }}>
              <div style={{ width: '25%', height: '100%', background: '#a3b18a', borderRadius: '4px' }}></div>
            </div>
          </div>
          
          <div style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span style={{ color: '#344e41' }}>Verification</span>
              <span style={{ color: '#344e41', fontWeight: 'bold' }}>4</span>
            </div>
            <div style={{ height: '8px', background: '#dad7cd', borderRadius: '4px' }}>
              <div style={{ width: '8%', height: '100%', background: '#344e41', borderRadius: '4px' }}></div>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <h3 style={{ color: '#344e41', marginBottom: '1rem' }}>Quick Actions</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            <button className={styles.quickAction}>
              <span style={{ fontSize: '1.5rem', display: 'block' }}>➕</span>
              <span>Add Farmer</span>
            </button>
            <button className={styles.quickAction}>
              <span style={{ fontSize: '1.5rem', display: 'block' }}>📋</span>
              <span>New Project</span>
            </button>
            <button className={styles.quickAction}>
              <span style={{ fontSize: '1.5rem', display: 'block' }}>✅</span>
              <span>Verification</span>
            </button>
            <button className={styles.quickAction}>
              <span style={{ fontSize: '1.5rem', display: 'block' }}>📊</span>
              <span>Generate Report</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;