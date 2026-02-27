import styles from './ProjectCard.module.css';

const ProjectCard = ({ project }) => {
  const statusColors = {
    verified: '#588157',
    pending: '#a3b18a',
    active: '#344e41'
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.icon}>🌳</span>
        <span 
          className={styles.status}
          style={{ background: statusColors[project.status] || '#a3b18a' }}
        >
          {project.status}
        </span>
      </div>
      
      <h3 className={styles.title}>{project.name}</h3>
      <p className={styles.farmer}>👨‍🌾 {project.farmer}</p>
      <p className={styles.location}>{project.location}</p>
      
      <div className={styles.stats}>
        <div className={styles.credits}>
          <span className={styles.creditValue}>{project.credits}</span>
          <span className={styles.creditLabel}>tCO₂</span>
        </div>
      </div>
      
      <div className={styles.footer}>
        <button className={styles.viewBtn}>View Details →</button>
        {project.status === 'pending' && (
          <button className={styles.verifyBtn}>Verify</button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;