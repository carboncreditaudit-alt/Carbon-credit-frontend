import { useState, useEffect } from 'react';
import StatsCard from '../components/StatsCard/StatsCard';
import CreditMeter from '../components/CreditMeter/CreditMeter';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import ActivityList from '../components/ActivityList/ActivityList';
import styles from '../Dashboard.module.css';

const Overview = () => {
  const [stats, setStats] = useState([]);
  const [projects, setProjects] = useState([]);
  const [creditData, setCreditData] = useState({
    total: 0,
    earned: 0,
    pending: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // API call to fetch overview data
    fetchOverviewData();
  }, []);

  const fetchOverviewData = async () => {
    try {
      setLoading(true);
      // API calls here
      // const statsRes = await api.get('/farmer/stats');
      // const projectsRes = await api.get('/farmer/projects?limit=3');
      // const creditsRes = await api.get('/farmer/credits/summary');
      
      // setStats(statsRes.data);
      // setProjects(projectsRes.data);
      // setCreditData(creditsRes.data);
    } catch (error) {
      console.error('Error fetching overview:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className={styles.loadingSpinner}>Loading...</div>;
  }

  return (
    <div>
      <h2 className={styles.sectionTitle}>Farm Overview</h2>
      
      <div className={styles.grid4}>
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      <div className={styles.grid2}>
        <CreditMeter 
          total={creditData.total}
          earned={creditData.earned}
          pending={creditData.pending}
        />
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Recent Activity</h3>
          <ActivityList />
        </div>
      </div>

      <h3 className={styles.sectionSubtitle}>Your Projects</h3>
      <div className={styles.grid3}>
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Overview;