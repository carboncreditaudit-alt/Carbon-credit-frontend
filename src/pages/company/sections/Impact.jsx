import styles from '../Dashboard.module.css';

const Impact = () => {
  return (
    <div>
      <h2 className={styles.sectionTitle}>ESG Impact Dashboard</h2>
      
      <div className={styles.grid2}>
        <div className={styles.card}>
          <h3 style={{ color: '#344e41', marginBottom: '1rem' }}>Environmental Impact</h3>
          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span style={{ color: '#344e41' }}>CO₂ Offset</span>
              <span style={{ color: '#588157', fontWeight: 'bold' }}>12,450 tCO₂</span>
            </div>
            <div style={{ height: '8px', background: '#dad7cd', borderRadius: '4px' }}>
              <div style={{ width: '75%', height: '100%', background: '#588157', borderRadius: '4px' }}></div>
            </div>
          </div>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span style={{ color: '#344e41' }}>Trees Equivalent</span>
              <span style={{ color: '#588157', fontWeight: 'bold' }}>18,500 trees</span>
            </div>
            <div style={{ height: '8px', background: '#dad7cd', borderRadius: '4px' }}>
              <div style={{ width: '60%', height: '100%', background: '#588157', borderRadius: '4px' }}></div>
            </div>
          </div>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span style={{ color: '#344e41' }}>Farmers Supported</span>
              <span style={{ color: '#588157', fontWeight: 'bold' }}>124 farmers</span>
            </div>
            <div style={{ height: '8px', background: '#dad7cd', borderRadius: '4px' }}>
              <div style={{ width: '45%', height: '100%', background: '#588157', borderRadius: '4px' }}></div>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <h3 style={{ color: '#344e41', marginBottom: '1rem' }}>SDG Contributions</h3>
          <div style={{ marginBottom: '1rem' }}>
            <span style={{ color: '#344e41', display: 'block', marginBottom: '0.25rem' }}>🌱 No Poverty</span>
            <span style={{ color: '#344e41', display: 'block', marginBottom: '0.25rem' }}>🌿 Zero Hunger</span>
            <span style={{ color: '#344e41', display: 'block', marginBottom: '0.25rem' }}>💚 Climate Action</span>
            <span style={{ color: '#344e41', display: 'block', marginBottom: '0.25rem' }}>🌳 Life on Land</span>
            <span style={{ color: '#344e41', display: 'block', marginBottom: '0.25rem' }}>💧 Clean Water</span>
          </div>
          <button style={{
            background: 'transparent',
            border: '2px solid #588157',
            color: '#588157',
            padding: '0.75rem',
            borderRadius: '0.5rem',
            width: '100%',
            fontWeight: '600',
            cursor: 'pointer',
            marginTop: '1rem'
          }}>
            Download ESG Report
          </button>
        </div>
      </div>

      <div className={styles.grid2} style={{ marginTop: '1.5rem' }}>
        <div className={styles.card}>
          <h3 style={{ color: '#344e41', marginBottom: '1rem' }}>Impact Timeline</h3>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <div>
              <p style={{ fontSize: '0.8rem', color: '#a3b18a' }}>2022</p>
              <p style={{ fontWeight: 'bold', color: '#344e41' }}>2,500 tCO₂</p>
            </div>
            <div>
              <p style={{ fontSize: '0.8rem', color: '#a3b18a' }}>2023</p>
              <p style={{ fontWeight: 'bold', color: '#344e41' }}>5,800 tCO₂</p>
            </div>
            <div>
              <p style={{ fontSize: '0.8rem', color: '#a3b18a' }}>2024</p>
              <p style={{ fontWeight: 'bold', color: '#344e41' }}>12,450 tCO₂</p>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <h3 style={{ color: '#344e41', marginBottom: '1rem' }}>Certificates</h3>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span style={{ background: '#f5f7fa', padding: '0.5rem 1rem', borderRadius: '2rem', color: '#344e41' }}>🏆 Gold Standard</span>
            <span style={{ background: '#f5f7fa', padding: '0.5rem 1rem', borderRadius: '2rem', color: '#344e41' }}>🌿 Verra</span>
            <span style={{ background: '#f5f7fa', padding: '0.5rem 1rem', borderRadius: '2rem', color: '#344e41' }}>✅ American Carbon Registry</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;