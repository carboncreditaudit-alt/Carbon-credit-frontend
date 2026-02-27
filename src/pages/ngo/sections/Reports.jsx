import styles from '../Dashboard.module.css';

const Reports = () => {
  const reports = [
    { id: 1, name: 'Monthly Impact Report', period: 'January 2024', type: 'PDF', size: '2.4 MB' },
    { id: 2, name: 'Farmer Progress Summary', period: 'Q1 2024', type: 'Excel', size: '1.8 MB' },
    { id: 3, name: 'Carbon Credit Generation', period: '2023 Annual', type: 'PDF', size: '3.2 MB' },
    { id: 4, name: 'Verification Reports', period: 'February 2024', type: 'PDF', size: '4.1 MB' },
    { id: 5, name: 'Project Performance', period: '2023 Q4', type: 'Excel', size: '2.2 MB' },
  ];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h2 className={styles.sectionTitle}>Reports & Analytics</h2>
        <button className={styles.primaryButton}>
          + Generate New Report
        </button>
      </div>

      <div className={styles.grid2} style={{ marginBottom: '2rem' }}>
        <div className={styles.card}>
          <h3 style={{ color: '#344e41', marginBottom: '1rem' }}>Generate Custom Report</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <select className={styles.selectInput} style={{ width: '100%' }}>
              <option>Select Report Type</option>
              <option>Farmer Performance</option>
              <option>Project Summary</option>
              <option>Credit Generation</option>
              <option>Impact Assessment</option>
            </select>
            
            <select className={styles.selectInput} style={{ width: '100%' }}>
              <option>Select Time Period</option>
              <option>This Month</option>
              <option>This Quarter</option>
              <option>This Year</option>
              <option>Custom Range</option>
            </select>
            
            <button className={styles.submitButton} style={{ marginTop: '0.5rem' }}>
              Generate Report
            </button>
          </div>
        </div>

        <div className={styles.card}>
          <h3 style={{ color: '#344e41', marginBottom: '1rem' }}>Quick Stats</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#344e41' }}>Total Farmers</span>
              <span style={{ fontWeight: 'bold', color: '#588157' }}>124</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#344e41' }}>Active Projects</span>
              <span style={{ fontWeight: 'bold', color: '#588157' }}>48</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#344e41' }}>Total Credits</span>
              <span style={{ fontWeight: 'bold', color: '#588157' }}>24,500 tCO₂</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#344e41' }}>Verification Rate</span>
              <span style={{ fontWeight: 'bold', color: '#588157' }}>85%</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.card}>
        <h3 style={{ color: '#344e41', marginBottom: '1rem' }}>Recent Reports</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #dad7cd' }}>
              <th style={{ padding: '0.75rem', textAlign: 'left', color: '#344e41' }}>Report Name</th>
              <th style={{ padding: '0.75rem', textAlign: 'left', color: '#344e41' }}>Period</th>
              <th style={{ padding: '0.75rem', textAlign: 'left', color: '#344e41' }}>Type</th>
              <th style={{ padding: '0.75rem', textAlign: 'left', color: '#344e41' }}>Size</th>
              <th style={{ padding: '0.75rem', textAlign: 'left', color: '#344e41' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {reports.map(report => (
              <tr key={report.id} style={{ borderBottom: '1px solid #dad7cd' }}>
                <td style={{ padding: '0.75rem', color: '#344e41' }}>{report.name}</td>
                <td style={{ padding: '0.75rem', color: '#344e41' }}>{report.period}</td>
                <td style={{ padding: '0.75rem', color: '#344e41' }}>{report.type}</td>
                <td style={{ padding: '0.75rem', color: '#a3b18a' }}>{report.size}</td>
                <td style={{ padding: '0.75rem' }}>
                  <button className={styles.downloadBtn}>Download</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports;