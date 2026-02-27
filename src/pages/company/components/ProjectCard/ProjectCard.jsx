import styles from './ProjectCard.module.css';

const ProjectCard = ({ project, type = 'marketplace' }) => {
  const statusColors = {
    available: '#588157',
    limited: '#1e3a5f',
    sold: '#a3b18a',
    active: '#588157',
    pending: '#a3b18a',
    verified: '#1e3a5f'
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.icon}>🌳</span>
        {type === 'marketplace' && project.price && (
          <span className={styles.price}>{project.price}</span>
        )}
      </div>
      
      <h3 className={styles.title}>{project.name}</h3>
      <p className={styles.location}>{project.location}</p>
      
      {type === 'marketplace' && project.farmer && (
        <p className={styles.farmer}>👨‍🌾 {project.farmer}</p>
      )}
      
      <div className={styles.stats}>
        <div className={styles.credits}>
          <span className={styles.creditValue}>{project.credits}</span>
          <span className={styles.creditLabel}>tCO₂</span>
        </div>
        <span 
          className={styles.status}
          style={{ background: statusColors[project.status] || '#a3b18a' }}
        >
          {project.status}
        </span>
      </div>
      
      <div className={styles.footer}>
        <button className={styles.viewBtn}>
          {type === 'marketplace' ? 'Purchase →' : 'View Details →'}
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;