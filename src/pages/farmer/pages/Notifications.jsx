import { useState } from 'react';
import styles from './Notifications.module.css';

const Notifications = ({ onBack }) => {
  const [filter, setFilter] = useState('all');
  
  const notifications = [
    {
      id: 1,
      type: 'success',
      title: 'Project Verified',
      message: 'Your Agroforestry Project has been successfully verified.',
      time: '2 hours ago',
      read: false
    },
    {
      id: 2,
      type: 'credit',
      title: 'Credits Earned',
      message: 'You have earned 850 tCO₂ credits from Tree Plantation project.',
      time: '1 day ago',
      read: false
    },
    {
      id: 3,
      type: 'payment',
      title: 'Payment Received',
      message: 'Payment of ₹8,500 has been credited to your account.',
      time: '3 days ago',
      read: true
    },
    {
      id: 4,
      type: 'reminder',
      title: 'Project Update Required',
      message: 'Please upload new photos for Mixed Farming project.',
      time: '5 days ago',
      read: true
    },
    {
      id: 5,
      type: 'system',
      title: 'Maintenance Alert',
      message: 'System will be under maintenance on Sunday, 2 AM - 4 AM.',
      time: '1 week ago',
      read: true
    }
  ];

  const getTypeIcon = (type) => {
    const seeds = {
      success: 'success_notification',
      credit: 'credit_notification',
      payment: 'payment_notification',
      reminder: 'reminder_notification',
      system: 'system_notification'
    };
    return `https://api.dicebear.com/7.x/identicon/svg?seed=${seeds[type]}&backgroundColor=ffffff&color=000000&size=24`;
  };

  const getTypeColor = (type) => {
    switch(type) {
      case 'success': return '#588157';
      case 'credit': return '#3a5a40';
      case 'payment': return '#344e41';
      case 'reminder': return '#a3b18a';
      default: return '#a3b18a';
    }
  };

  const filteredNotifications = filter === 'all' 
    ? notifications 
    : filter === 'unread' 
      ? notifications.filter(n => !n.read)
      : notifications;

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button onClick={onBack} className={styles.backButton}>
          <img 
            src="https://api.dicebear.com/7.x/identicon/svg?seed=back&backgroundColor=ffffff&color=000000&size=20" 
            alt="Back"
            className={styles.backIcon}
          />
          <span>Back to Dashboard</span>
        </button>
        <h2 className={styles.title}>Notifications</h2>
        {unreadCount > 0 && (
          <span className={styles.unreadBadge}>{unreadCount} unread</span>
        )}
      </div>

      <div className={styles.filterBar}>
        <button 
          className={`${styles.filterBtn} ${filter === 'all' ? styles.active : ''}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button 
          className={`${styles.filterBtn} ${filter === 'unread' ? styles.active : ''}`}
          onClick={() => setFilter('unread')}
        >
          Unread
        </button>
      </div>

      <div className={styles.notificationList}>
        {filteredNotifications.map(notification => (
          <div 
            key={notification.id} 
            className={`${styles.notificationCard} ${!notification.read ? styles.unread : ''}`}
          >
            <div className={styles.notificationIcon}>
              <img 
                src={getTypeIcon(notification.type)}
                alt={notification.type}
                style={{ borderLeft: `3px solid ${getTypeColor(notification.type)}` }}
              />
            </div>
            <div className={styles.notificationContent}>
              <div className={styles.notificationHeader}>
                <h4 className={styles.notificationTitle}>{notification.title}</h4>
                <span className={styles.notificationTime}>{notification.time}</span>
              </div>
              <p className={styles.notificationMessage}>{notification.message}</p>
            </div>
            {!notification.read && <span className={styles.unreadDot}></span>}
          </div>
        ))}
      </div>

      {filteredNotifications.length === 0 && (
        <div className={styles.emptyState}>
          <img 
            src="https://api.dicebear.com/7.x/identicon/svg?seed=empty_notifications&backgroundColor=ffffff&color=000000&size=80" 
            alt="No notifications"
            className={styles.emptyIcon}
          />
          <h3>No notifications</h3>
          <p>You're all caught up!</p>
        </div>
      )}
    </div>
  );
};

export default Notifications;