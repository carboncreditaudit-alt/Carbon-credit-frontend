import { useState } from 'react';
import styles from '../Dashboard.module.css';

const Farmers = () => {
  const [search, setSearch] = useState('');

  const farmers = [
    { id: 1, name: 'Rajesh Kumar', village: 'Village A', phone: '9876543210', projects: 3, status: 'active', joined: '2024-01-15' },
    { id: 2, name: 'Priya Sharma', village: 'Village B', phone: '9876543211', projects: 2, status: 'active', joined: '2024-02-01' },
    { id: 3, name: 'Amit Patel', village: 'Village C', phone: '9876543212', projects: 4, status: 'pending', joined: '2024-01-20' },
    { id: 4, name: 'Lakshmi Reddy', village: 'Village D', phone: '9876543213', projects: 1, status: 'active', joined: '2024-02-10' },
    { id: 5, name: 'Suresh Yadav', village: 'Village E', phone: '9876543214', projects: 2, status: 'active', joined: '2024-02-15' },
    { id: 6, name: 'Meena Kumari', village: 'Village F', phone: '9876543215', projects: 3, status: 'inactive', joined: '2024-01-25' },
  ];

  const filteredFarmers = farmers.filter(farmer => 
    farmer.name.toLowerCase().includes(search.toLowerCase()) ||
    farmer.village.toLowerCase().includes(search.toLowerCase()) ||
    farmer.phone.includes(search)
  );

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h2 className={styles.sectionTitle}>Farmers Management</h2>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <input
            type="text"
            placeholder="Search farmers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={styles.searchInput}
            style={{ width: '300px' }}
          />
        </div>
      </div>

      <div className={styles.card}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #dad7cd' }}>
              <th style={{ padding: '1rem', textAlign: 'left', color: '#1a2634' }}>Name</th>
              <th style={{ padding: '1rem', textAlign: 'left', color: '#1a2634' }}>Village</th>
              <th style={{ padding: '1rem', textAlign: 'left', color: '#1a2634' }}>Phone</th>
              <th style={{ padding: '1rem', textAlign: 'left', color: '#1a2634' }}>Projects</th>
              <th style={{ padding: '1rem', textAlign: 'left', color: '#1a2634' }}>Status</th>
              <th style={{ padding: '1rem', textAlign: 'left', color: '#1a2634' }}>Joined</th>
              <th style={{ padding: '1rem', textAlign: 'left', color: '#1a2634' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredFarmers.map(farmer => (
              <tr key={farmer.id} style={{ borderBottom: '1px solid #dad7cd' }}>
                <td style={{ padding: '1rem', color: '#344e41', fontWeight: '500' }}>{farmer.name}</td>
                <td style={{ padding: '1rem', color: '#344e41' }}>{farmer.village}</td>
                <td style={{ padding: '1rem', color: '#344e41' }}>{farmer.phone}</td>
                <td style={{ padding: '1rem', color: '#344e41' }}>{farmer.projects}</td>
                <td style={{ padding: '1rem' }}>
                  <span style={{ 
                    background: farmer.status === 'active' ? '#588157' : farmer.status === 'pending' ? '#f39c12' : '#a3b18a',
                    color: 'white',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '1rem',
                    fontSize: '0.8rem'
                  }}>
                    {farmer.status}
                  </span>
                </td>
                <td style={{ padding: '1rem', color: '#a3b18a' }}>{farmer.joined}</td>
                <td style={{ padding: '1rem' }}>
                  <button className={styles.actionBtn} style={{ marginRight: '0.5rem' }}>View</button>
                  <button className={styles.actionBtn}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Farmers;