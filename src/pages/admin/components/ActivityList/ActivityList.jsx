import styles from './ActivityList.module.css';

const ActivityList = () => {
  const activities = [
    { id: 1, action: 'New user registered', user: 'Rajesh Kumar', role: 'FARMER', time: '5 min ago' },
    { id: 2, action: 'Approval request', user: 'Green Earth Foundation', role: 'NGO', time: '1 hour ago' },
    { id: 3, action: 'User approved', user: 'EcoCorp Industries', role: 'COMPANY', time: '3 hours ago' },
    { id: 4, action: 'Credits issued', user: 'Agroforestry Project', role: 'PROJECT', time: '5 hours ago' },
    { id: 5, action: 'New company registered', user: 'Sustainable Ltd', role: 'COMPANY', time: '1 day ago' },
    { id: 6, action: 'Bulk verification', user: 'Admin', role: 'SYSTEM', time: '2 days ago' },
  ];

  const getRoleIcon = (role) => {
    switch(role) {
      case 'FARMER': return '👨‍🌾';
      case 'NGO': return '🤝';
      case 'COMPANY': return '🏢';
      case 'PROJECT': return '🌳';
      default: return '⚙️';
    }
  };

  const getRoleColor = (role) => {
    switch(role) {
      case 'FARMER': return '#588157';
      case 'NGO': return '#3a5a40';
      case 'COMPANY': return '#344e41';
      case 'PROJECT': return '#a3b18a';
      default: return '#1a2634';
    }
  };

  return (
    <div className={styles.activityList}>
      {activities.map(activity => (
        <div key={activity.id} className={styles.activityItem}>
          <div className={styles.activityIcon} style={{ background: `${getRoleColor(activity.role)}15` }}>
            <span className={styles.iconEmoji}>{getRoleIcon(activity.role)}</span>
          </div>
          <div className={styles.activityContent}>
            <p className={styles.activityAction}>{activity.action}</p>
            <p className={styles.activityUser}>{activity.user}</p>
            <span className={styles.activityTime}>{activity.time}</span>
          </div>
          <span className={styles.activityRole} style={{ background: getRoleColor(activity.role), color: 'white' }}>
            {activity.role}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ActivityList;