import { useState } from 'react';
import styles from '../Dashboard.module.css';

const Companies = () => {
  const [search, setSearch] = useState('');

  const companies = [
    { id: 1, name: 'EcoCorp Industries', regNumber: 'CIN/2023/123', phone: '9876543200', industry: 'Technology', status: 'active', joined: '2023-12-15' },
    { id: 2, name: 'Sustainable Solutions Ltd', regNumber: 'CIN/2024/456', phone: '9876543201', industry: 'Manufacturing', status: 'active', joined: '2024-01-10' },
    { id: 3, name: 'GreenTech Innovations', regNumber: 'CIN/2024/789', phone: '9876543202', industry: 'Technology', status: 'pending', joined: '2024-02-05' },
    { id: 4, name: 'Carbon Neutral Inc', regNumber: 'CIN/2023/234', phone: '9876543203', industry: 'Finance', status: 'active', joined: '2023-11-20' },
    { id: 5, name: 'Future Energy Corp', regNumber: 'CIN/2024/567', phone: '9876543204', industry: 'Energy', status: 'active', joined: '2024-01-25' },
    { id: 6, name: 'Eco Logistics', regNumber: 'CIN/2023/890', phone: '9876543205', industry: 'Transportation', status: 'inactive', joined: '2023-10-15' },
  ];

  const filteredCompanies = companies.filter(company => 
    company.name.toLowerCase().includes(search.toLowerCase()) ||
    company.regNumber.toLowerCase().includes(search.toLowerCase()) ||
    company.industry.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h2 className={styles.sectionTitle}>Companies Management</h2>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <input
            type="text"
            placeholder="Search companies..."
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
              <th style={{ padding: '1rem', textAlign: 'left', color: '#1a2634' }}>Company</th>
              <th style={{ padding: '1rem', textAlign: 'left', color: '#1a2634' }}>Reg Number</th>
              <th style={{ padding: '1rem', textAlign: 'left', color: '#1a2634' }}>Phone</th>
              <th style={{ padding: '1rem', textAlign: 'left', color: '#1a2634' }}>Industry</th>
              <th style={{ padding: '1rem', textAlign: 'left', color: '#1a2634' }}>Status</th>
              <th style={{ padding: '1rem', textAlign: 'left', color: '#1a2634' }}>Joined</th>
              <th style={{ padding: '1rem', textAlign: 'left', color: '#1a2634' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCompanies.map(company => (
              <tr key={company.id} style={{ borderBottom: '1px solid #dad7cd' }}>
                <td style={{ padding: '1rem', color: '#344e41', fontWeight: '500' }}>{company.name}</td>
                <td style={{ padding: '1rem', color: '#344e41' }}>{company.regNumber}</td>
                <td style={{ padding: '1rem', color: '#344e41' }}>{company.phone}</td>
                <td style={{ padding: '1rem', color: '#344e41' }}>{company.industry}</td>
                <td style={{ padding: '1rem' }}>
                  <span style={{ 
                    background: company.status === 'active' ? '#588157' : company.status === 'pending' ? '#f39c12' : '#a3b18a',
                    color: 'white',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '1rem',
                    fontSize: '0.8rem'
                  }}>
                    {company.status}
                  </span>
                </td>
                <td style={{ padding: '1rem', color: '#a3b18a' }}>{company.joined}</td>
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

export default Companies;