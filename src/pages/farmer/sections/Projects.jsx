import { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import styles from '../Dashboard.module.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // API call to fetch projects
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      // API call here
      // const response = await api.get('/farmer/projects');
      // setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.status === filter);

  if (loading) {
    return <div className={styles.loadingSpinner}>Loading...</div>;
  }

  return (
    <div>
      <div className={styles.headerWithAction}>
        <h2 className={styles.sectionTitle}>My Projects</h2>
        <button className={styles.newProjectBtn}>
          + New Project
        </button>
      </div>

      <div className={styles.filterContainer}>
        {['all', 'active', 'pending', 'verified'].map(status => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`${styles.filterBtn} ${filter === status ? styles.active : ''}`}
          >
            {status}
          </button>
        ))}
      </div>

      <div className={styles.grid3}>
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;