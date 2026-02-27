import { useState } from 'react';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import styles from '../Dashboard.module.css';

const Marketplace = () => {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const projects = [
    { id: 1, name: 'Amazon Reforestation', location: 'Brazil', credits: 5000, status: 'available', price: '$15', farmer: 'João Silva' },
    { id: 2, name: 'Agroforestry India', location: 'Karnataka', credits: 2500, status: 'available', price: '$12', farmer: 'Rajesh Kumar' },
    { id: 3, name: 'Mangrove Protection', location: 'Indonesia', credits: 8000, status: 'available', price: '$18', farmer: 'Budi Santoso' },
    { id: 4, name: 'Tree Plantation Kenya', location: 'Nairobi', credits: 3500, status: 'limited', price: '$14', farmer: 'Grace Mwangi' },
    { id: 5, name: 'Organic Farming', location: 'Vietnam', credits: 1800, status: 'available', price: '$11', farmer: 'Nguyen Van An' },
    { id: 6, name: 'Carbon Sequestration', location: 'Colombia', credits: 6200, status: 'available', price: '$16', farmer: 'Carlos Mendez' },
  ];

  const filteredProjects = projects.filter(p => 
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h2 className={styles.sectionTitle}>Carbon Credit Marketplace</h2>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              padding: '0.75rem 1rem',
              border: '1.5px solid #dad7cd',
              borderRadius: '0.5rem',
              width: '250px'
            }}
          />
        </div>
      </div>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        {['all', 'available', 'limited'].map(status => (
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
              textTransform: 'capitalize',
              fontWeight: '500'
            }}
          >
            {status}
          </button>
        ))}
      </div>

      <div className={styles.grid3}>
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} type="marketplace" />
        ))}
      </div>
    </div>
  );
};

export default Marketplace;