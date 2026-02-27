import styles from './ActivityList.module.css';

const ActivityList = ({ type = 'company' }) => {
  const activities = [
    { id: 1, action: 'Purchased 5,000 credits', project: 'Amazon Reforestation', time: '2 hours ago', status: 'completed' },
    { id: 2, action: 'Retired 2,000 credits', project: 'Mangrove Protection', time: '1 day ago', status: 'completed' },
    { id: 3, action: 'New project listed', project: 'Agroforestry India', time: '3 days ago', status: 'pending' },
    { id: 4, action: 'ESG report generated', project: 'Q1 2024', time: '5 days ago', status: 'completed' },
    { id: 5, action: 'Portfolio milestone', project: '10,000 tCO₂', time: '1 week ago', status: 'achieved' },
  ];

  return (
    <div className={styles.activityList}>
      {activities.map(activity => (
        <div key={activity.id} className={styles.activityItem}>
          <div className={styles.activityDot}></div>
          <div className={styles.activityContent}>
            <p className={styles.activityAction}>{activity.action}</p>
            <p className={styles.activityProject}>{activity.project}</p>
            <span className={styles.activityTime}>{activity.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivityList;