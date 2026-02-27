import styles from './ProjectCard.module.css';

const ProjectCard = ({ project }) => {
  const statusColors = {
    active: '#588157',
    pending: '#a3b18a',
    verified: '#344e41'
  };

  // Generate B&W abstract image for project
  const projectImage = `https://api.dicebear.com/7.x/identicon/svg?seed=${project.name.replace(/\s/g, '')}&backgroundColor=ffffff&color=000000&size=60`;

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={projectImage} alt={project.name} className={styles.projectImage} />
      </div>
      
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{project.name}</h3>
          <span 
            className={styles.status}
            style={{ background: statusColors[project.status] || '#a3b18a' }}
          >
            {project.status}
          </span>
        </div>
        
        <p className={styles.location}>📍 {project.location}</p>
        
        <div className={styles.footer}>
          <div className={styles.credits}>
            <span className={styles.creditValue}>{project.credits}</span>
            <span className={styles.creditLabel}>tCO₂</span>
          </div>
          <button className={styles.viewBtn}>View Details →</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;