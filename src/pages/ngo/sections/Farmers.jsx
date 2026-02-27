import { useState } from 'react';
import FarmerCard from '../components/FarmerCard/FarmerCard';
import styles from '../Dashboard.module.css';

const Farmers = () => {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const farmers = [
    { id: 1, name: 'Rajesh Kumar', village: 'Village A', projects: 3, status: 'active', joined: '2024-01-15' },
    { id: 2, name: 'Priya Sharma', village: 'Village B', projects: 2, status: 'pending', joined: '2024-02-01' },
    { id: 3, name: 'Amit Patel', village: 'Village C', projects: 4, status: 'active', joined: '2024-01-20' },
    { id: 4, name: 'Lakshmi Reddy', village: 'Village D', projects: 1, status: 'active', joined: '2024-02-10' },
    { id: 5, name: 'Suresh Yadav', village: 'Village E', projects: 2, status: 'pending', joined: '2024-02-15' },
    { id: 6, name: 'Meena Kumari', village: 'Village F', projects: 3, status: 'active', joined: '2024-01-25' },
  ];

  const filteredFarmers = farmers.filter(farmer => 
    farmer.name.toLowerCase().includes(search.toLowerCase()) ||
    farmer.village.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h2 className={styles.sectionTitle}>Farmers Directory</h2>
        <button className={styles.primaryButton}>
          + Add New Farmer
        </button>
      </div>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', alignItems: 'center' }}>
        <input
          type="text"
          placeholder="Search farmers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.searchInput}
          style={{ width: '300px' }}
        />
        
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {['all', 'active', 'pending'].map(status => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              style={{
                padding: '0.5rem 1.5rem',
                border: 'none',
                borderRadius: '2rem',
                background: filter === status ? '#588157' : '#f5f7fa',
                color: filter === status ? 'white' : '#344e41',
                cursor: 'pointer',
                textTransform: 'capitalize'
              }}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.grid3}>
        {filteredFarmers.map(farmer => (
          <FarmerCard key={farmer.id} farmer={farmer} />
        ))}
      </div>
    </div>
  );
};

export default Farmers;