import StatsCard from '../components/StatsCard/StatsCard';
import CreditMeter from '../components/CreditMeter/CreditMeter';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import ActivityList from '../components/ActivityList/ActivityList';
import styles from '../Dashboard.module.css';

const Overview = () => {
  const stats = [
    { title: 'Portfolio Value', value: '$124,500', change: '+15%', icon: '💰', color: '#588157' },
    { title: 'Credits Owned', value: '12,450 tCO₂', change: '+8%', icon: '🌿', color: '#3a5a40' },
    { title: 'Projects Funded', value: '8', change: '+2', icon: '🌳', color: '#a3b18a' },
    { title: 'ESG Score', value: 'A+', change: '+2', icon: '📊', color: '#344e41' },
  ];

  const featuredProjects = [
    { id: 1, name: 'Amazon Reforestation', location: 'Brazil', credits: 5000, status: 'available', price: '$15/tCO₂' },
    { id: 2, name: 'Agroforestry India', location: 'Karnataka', credits: 2500, status: 'available', price: '$12/tCO₂' },
    { id: 3, name: 'Mangrove Protection', location: 'Indonesia', credits: 8000, status: 'available', price: '$18/tCO₂' },
  ];

  return (
    <div>
      <h2 className={styles.sectionTitle}>Company Overview</h2>
      
      <div className={styles.grid4}>
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      <div className={styles.grid2}>
        <CreditMeter 
          total={50000}
          owned={12450}
          retired={2500}
        />
        <div className={styles.card}>
          <h3 style={{ color: '#344e41', marginBottom: '1rem' }}>Market Activity</h3>
          <ActivityList type="company" />
        </div>
      </div>

      <h3 className={styles.sectionTitle} style={{ fontSize: '1.25rem', marginTop: '1rem' }}>
        Featured Projects
      </h3>
      <div className={styles.grid3}>
        {featuredProjects.map(project => (
          <ProjectCard key={project.id} project={project} type="marketplace" />
        ))}
      </div>
    </div>
  );
};

export default Overview;