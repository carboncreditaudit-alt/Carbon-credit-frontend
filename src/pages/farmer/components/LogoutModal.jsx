import { useNavigate } from 'react-router-dom';
import styles from './LogoutModal.module.css';

const LogoutModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleLogout = () => {
    // Clear any auth data
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    
    // Redirect to landing page
    navigate('/');
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <img 
            src="https://api.dicebear.com/7.x/identicon/svg?seed=logout&backgroundColor=ffffff&color=000000&size=40" 
            alt="Logout"
            className={styles.modalIcon}
          />
          <h3>Confirm Logout</h3>
        </div>
        
        <p className={styles.modalMessage}>
          Are you sure you want to logout? You'll need to login again to access your dashboard.
        </p>
        
        <div className={styles.modalActions}>
          <button onClick={onClose} className={styles.cancelBtn}>
            Cancel
          </button>
          <button onClick={handleLogout} className={styles.logoutBtn}>
            Yes, Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;