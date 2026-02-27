import styles from '../Dashboard.module.css';

const Portfolio = () => {
  const credits = [
    { id: 1, project: 'Amazon Reforestation', amount: 5000, purchased: '2024-01-15', status: 'active', value: '$75,000' },
    { id: 2, project: 'Agroforestry India', amount: 2500, purchased: '2024-02-01', status: 'active', value: '$30,000' },
    { id: 3, project: 'Mangrove Protection', amount: 2000, purchased: '2024-01-20', status: 'retired', value: '$36,000' },
    { id: 4, project: 'Tree Plantation Kenya', amount: 3500, purchased: '2024-02-10', status: 'active', value: '$49,000' },
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'active': return '#588157';
      case 'retired': return '#344e41';
      default: return '#a3b18a';
    }
  };

  return (
    <div>
      <h2 className={styles.sectionTitle}>My Portfolio</h2>
      
      <div className={styles.grid3}>
        <div className={styles.card}>
          <h3 style={{ color: '#344e41', fontSize: '0.9rem' }}>Total Credits</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#588157' }}>13,000</p>
          <p style={{ color: '#a3b18a', fontSize: '0.8rem' }}>tCO₂ equivalent</p>
        </div>
        
        <div className={styles.card}>
          <h3 style={{ color: '#344e41', fontSize: '0.9rem' }}>Portfolio Value</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#588157' }}>$190,000</p>
          <p style={{ color: '#a3b18a', fontSize: '0.8rem' }}>Current market value</p>
        </div>
        
        <div className={styles.card}>
          <h3 style={{ color: '#344e41', fontSize: '0.9rem' }}>Retired Credits</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#a3b18a' }}>2,000</p>
          <p style={{ color: '#a3b18a', fontSize: '0.8rem' }}>Offset your emissions</p>
        </div>
      </div>

      <div className={styles.card} style={{ marginTop: '1.5rem' }}>
        <h3 style={{ color: '#344e41', marginBottom: '1rem' }}>Credit Holdings</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #dad7cd' }}>
              <th style={{ padding: '0.75rem', textAlign: 'left', color: '#344e41' }}>Project</th>
              <th style={{ padding: '0.75rem', textAlign: 'left', color: '#344e41' }}>Amount</th>
              <th style={{ padding: '0.75rem', textAlign: 'left', color: '#344e41' }}>Value</th>
              <th style={{ padding: '0.75rem', textAlign: 'left', color: '#344e41' }}>Status</th>
              <th style={{ padding: '0.75rem', textAlign: 'left', color: '#344e41' }}>Purchased</th>
            </tr>
          </thead>
          <tbody>
            {credits.map(credit => (
              <tr key={credit.id} style={{ borderBottom: '1px solid #dad7cd' }}>
                <td style={{ padding: '0.75rem', color: '#344e41' }}>{credit.project}</td>
                <td style={{ padding: '0.75rem', color: '#344e41' }}>{credit.amount} tCO₂</td>
                <td style={{ padding: '0.75rem', color: '#344e41', fontWeight: '600' }}>{credit.value}</td>
                <td style={{ padding: '0.75rem' }}>
                  <span style={{ 
                    background: getStatusColor(credit.status),
                    color: 'white',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '1rem',
                    fontSize: '0.8rem',
                    textTransform: 'capitalize'
                  }}>
                    {credit.status}
                  </span>
                </td>
                <td style={{ padding: '0.75rem', color: '#a3b18a' }}>{credit.purchased}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Portfolio;