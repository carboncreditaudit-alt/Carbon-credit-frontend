import { useState } from 'react';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import styles from '../Dashboard.module.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    { id: 1, name: 'Agroforestry Project', farmer: 'Rajesh Kumar', location: 'Village A', credits: 850, status: 'verified' },
    { id: 2, name: 'Tree Plantation', farmer: 'Priya Sharma', location: 'Village B', credits: 1200, status: 'pending' },
    { id: 3, name: 'Mixed Farming', farmer: 'Amit Patel', location: 'Village C', credits: 400, status: 'verified' },
    { id: 4, name: 'Reforestation', farmer: 'Lakshmi Reddy', location: 'Village D', credits: 600, status: 'active' },
    { id: 5, name: 'Organic Farming', farmer: 'Suresh Yadav', location: 'Village E', credits: 950, status: 'pending' },
    { id: 6, name: 'Carbon Sequestration', farmer: 'Meena Kumari', location: 'Village F', credits: 1500, status: 'verified' },
  ];

  return (
    <div>
      <h2 className={styles.sectionTitle}>Projects Overview</h2>
      
      <div className={styles.grid4} style={{ marginBottom: '2rem' }}>
        <div className={styles.card}>
          <h3 style={{ color: '#344e41', fontSize: '0.9rem' }}>Total Projects</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#588157' }}>48</p>
        </div>
        
        <div className={styles.card}>
          <h3 style={{ color: '#344e41', fontSize: '0.9rem' }}>Verified</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#588157' }}>32</p>
        </div>
        
        <div className={styles.card}>
          <h3 style={{ color: '#344e41', fontSize: '0.9rem' }}>Pending</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#a3b18a' }}>12</p>
        </div>
        
        <div className={styles.card}>
          <h3 style={{ color: '#344e41', fontSize: '0.9rem' }}>Total Credits</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#344e41' }}>24.5k</p>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        {['all', 'verified', 'pending', 'active'].map(status => (
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

      <div className={styles.grid3}>
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;