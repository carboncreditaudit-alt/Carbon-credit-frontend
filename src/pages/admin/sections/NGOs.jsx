import { useState } from 'react';
import styles from '../Dashboard.module.css';

const NGOs = () => {
  const [search, setSearch] = useState('');

  const ngos = [
    { id: 1, name: 'Green Earth Foundation', regNumber: 'NGO/2024/001', phone: '9876543100', farmers: 45, status: 'active', joined: '2024-01-15' },
    { id: 2, name: 'Farmers Help Initiative', regNumber: 'NGO/2023/456', phone: '9876543101', farmers: 78, status: 'active', joined: '2023-12-01' },
    { id: 3, name: 'Sustainable Future NGO', regNumber: 'NGO/2024/789', phone: '9876543102', farmers: 32, status: 'pending', joined: '2024-02-01' },
    { id: 4, name: 'Rural Development Trust', regNumber: 'NGO/2023/234', phone: '9876543103', farmers: 56, status: 'active', joined: '2023-11-20' },
    { id: 5, name: 'Eco Warriors', regNumber: 'NGO/2024/567', phone: '9876543104', farmers: 23, status: 'active', joined: '2024-01-25' },
    { id: 6, name: 'Green India', regNumber: 'NGO/2023/890', phone: '9876543105', farmers: 67, status: 'inactive', joined: '2023-10-15' },
  ];

  const filteredNGOs = ngos.filter(ngo => 
    ngo.name.toLowerCase().includes(search.toLowerCase()) ||
    ngo.regNumber.toLowerCase().includes(search.toLowerCase()) ||
    ngo.phone.includes(search)
  );

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h2 className={styles.sectionTitle}>NGOs Management</h2>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <input
            type="text"
            placeholder="Search NGOs..."
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
              <th style={{ padding: '1rem', textAlign: 'left', color: '#1a2634' }}>Organization</th>
              <th style={{ padding: '1rem', textAlign: 'left', color: '#1a2634' }}>Reg Number</th>
              <th style={{ padding: '1rem', textAlign: 'left', color: '#1a2634' }}>Phone</th>
              <th style={{ padding: '1rem', textAlign: 'left', color: '#1a2634' }}>Farmers</th>
              <th style={{ padding: '1rem', textAlign: 'left', color: '#1a2634' }}>Status</th>
              <th style={{ padding: '1rem', textAlign: 'left', color: '#1a2634' }}>Joined</th>
              <th style={{ padding: '1rem', textAlign: 'left', color: '#1a2634' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredNGOs.map(ngo => (
              <tr key={ngo.id} style={{ borderBottom: '1px solid #dad7cd' }}>
                <td style={{ padding: '1rem', color: '#344e41', fontWeight: '500' }}>{ngo.name}</td>
                <td style={{ padding: '1rem', color: '#344e41' }}>{ngo.regNumber}</td>
                <td style={{ padding: '1rem', color: '#344e41' }}>{ngo.phone}</td>
                <td style={{ padding: '1rem', color: '#344e41' }}>{ngo.farmers}</td>
                <td style={{ padding: '1rem' }}>
                  <span style={{ 
                    background: ngo.status === 'active' ? '#588157' : ngo.status === 'pending' ? '#f39c12' : '#a3b18a',
                    color: 'white',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '1rem',
                    fontSize: '0.8rem'
                  }}>
                    {ngo.status}
                  </span>
                </td>
                <td style={{ padding: '1rem', color: '#a3b18a' }}>{ngo.joined}</td>
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

export default NGOs;