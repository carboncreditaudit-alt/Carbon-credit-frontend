import styles from './ActivityList.module.css';

const ActivityList = ({ type = 'ngo' }) => {
  const activities = [
    { id: 1, action: 'New farmer registered', farmer: 'Rajesh Kumar', time: '2 hours ago', type: 'farmer' },
    { id: 2, action: 'Project submitted for verification', project: 'Agroforestry Project', time: '5 hours ago', type: 'project' },
    { id: 3, action: 'Credits issued', amount: '850 tCO₂', time: '1 day ago', type: 'credit' },
    { id: 4, action: 'Verification completed', project: 'Tree Plantation', time: '2 days ago', type: 'verification' },
    { id: 5, action: 'Monthly report generated', time: '3 days ago', type: 'report' },
    { id: 6, action: 'New project added', farmer: 'Priya Sharma', time: '4 days ago', type: 'project' },
  ];

  const getIcon = (type) => {
    switch(type) {
      case 'farmer': return '👨‍🌾';
      case 'project': return '🌳';
      case 'credit': return '💚';
      case 'verification': return '✅';
      case 'report': return '📊';
      default: return '📌';
    }
  };

  return (
    <div className={styles.activityList}>
      {activities.map(activity => (
        <div key={activity.id} className={styles.activityItem}>
          <div className={styles.activityIcon}>
            {getIcon(activity.type)}
          </div>
          <div className={styles.activityContent}>
            <p className={styles.activityAction}>{activity.action}</p>
            <p className={styles.activityDetail}>
              {activity.farmer && <span>{activity.farmer}</span>}
              {activity.project && <span>{activity.project}</span>}
              {activity.amount && <span>{activity.amount}</span>}
            </p>
            <span className={styles.activityTime}>{activity.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivityList;