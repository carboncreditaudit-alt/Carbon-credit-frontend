import styles from './RoleTabs.module.css';

const RoleTabs = ({ roles, activeRole, onRoleChange }) => {
  return (
    <div className={styles.tabContainer}>
      {roles.map((role) => (
        <button
          key={role.id}
          type="button"
          onClick={() => {
            console.log('Switching to:', role.id); // This will show in browser console
            onRoleChange(role.id);
          }}
          className={`${styles.tab} ${activeRole === role.id ? styles.active : ''}`}
          style={{
            backgroundColor: activeRole === role.id ? '#588157' : '#dad7cd',
            color: activeRole === role.id ? 'white' : '#344e41',
          }}
        >
          <span className={styles.icon}>{role.icon}</span>
          <span className={styles.label}>{role.label}</span>
        </button>
      ))}
    </div>
  );
};

export default RoleTabs;