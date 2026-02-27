import { useState, useEffect } from 'react';
import styles from './ActivityList.module.css';

const ActivityList = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // API call to fetch activities
    fetchActivities();
  }, []);

  const fetchActivities = async () => {
    try {
      setLoading(true);
      // API call here
      // const response = await api.get('/farmer/activities');
      // setActivities(response.data);
    } catch (error) {
      console.error('Error fetching activities:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'success': return '#588157';
      case 'pending': return '#a3b18a';
      default: return '#344e41';
    }
  };

  if (loading) {
    return <div className={styles.loadingSpinner}>Loading activities...</div>;
  }

  return (
    <div className={styles.activityList}>
      {activities.map(activity => (
        <div key={activity.id} className={styles.activityItem}>
          <div className={styles.activityIcon}>
            {activity.status === 'success' ? '✓' : '○'}
          </div>
          <div className={styles.activityContent}>
            <p className={styles.activityAction}>{activity.action}</p>
            <p className={styles.activityDetail}>
              {activity.project}
              {activity.amount && <span> • {activity.amount}</span>}
            </p>
            <span className={styles.activityTime}>{activity.time}</span>
          </div>
          <span 
            className={styles.activityStatus}
            style={{ background: getStatusColor(activity.status) }}
          >
            {activity.status}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ActivityList;