import { useState } from 'react';
// import styles from './ApprovalCard.module.css';

const ApprovalCard = ({ approval, onApprove, onReject }) => {
  const [expanded, setExpanded] = useState(false);

  const getTypeIcon = (type) => {
    switch(type) {
      case 'FARMER': return '👨‍🌾';
      case 'NGO': return '🤝';
      case 'COMPANY': return '🏢';
      default: return '👤';
    }
  };

  const getTypeColor = (type) => {
    switch(type) {
      case 'FARMER': return '#588157';
      case 'NGO': return '#3a5a40';
      case 'COMPANY': return '#344e41';
      default: return '#a3b18a';
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'pending': return '#f39c12';
      case 'approved': return '#588157';
      case 'rejected': return '#e74c3c';
      default: return '#a3b18a';
    }
  };

  const renderDetails = () => {
    switch(approval.type) {
      case 'FARMER':
        return (
          <>
            <div className={styles.detailRow}>
              <span className={styles.detailLabel}>Village:</span>
              <span className={styles.detailValue}>{approval.village}</span>
            </div>
            <div className={styles.detailRow}>
              <span className={styles.detailLabel}>Land Size:</span>
              <span className={styles.detailValue}>{approval.landSize}</span>
            </div>
          </>
        );
      case 'NGO':
        return (
          <>
            <div className={styles.detailRow}>
              <span className={styles.detailLabel}>Registration No:</span>
              <span className={styles.detailValue}>{approval.regNumber}</span>
            </div>
            <div className={styles.detailRow}>
              <span className={styles.detailLabel}>Established:</span>
              <span className={styles.detailValue}>{approval.establishedYear}</span>
            </div>
            <div className={styles.detailRow}>
              <span className={styles.detailLabel}>Farmers:</span>
              <span className={styles.detailValue}>{approval.farmersCount}</span>
            </div>
          </>
        );
      case 'COMPANY':
        return (
          <>
            <div className={styles.detailRow}>
              <span className={styles.detailLabel}>Registration No:</span>
              <span className={styles.detailValue}>{approval.regNumber}</span>
            </div>
            <div className={styles.detailRow}>
              <span className={styles.detailLabel}>Industry:</span>
              <span className={styles.detailValue}>{approval.industryType}</span>
            </div>
            <div className={styles.detailRow}>
              <span className={styles.detailLabel}>Size:</span>
              <span className={styles.detailValue}>{approval.companySize}</span>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`${styles.card} ${styles[approval.status]}`}>
      <div className={styles.cardHeader}>
        <div className={styles.typeBadge} style={{ background: getTypeColor(approval.type) }}>
          <span className={styles.typeIcon}>{getTypeIcon(approval.type)}</span>
          <span className={styles.typeText}>{approval.type}</span>
        </div>
        <span className={styles.date}>Submitted: {approval.submittedDate}</span>
      </div>

      <div className={styles.cardBody}>
        <div className={styles.mainInfo}>
          <h3 className={styles.name}>{approval.name}</h3>
          <div className={styles.contact}>
            <span className={styles.email}>📧 {approval.email}</span>
            <span className={styles.phone}>📞 {approval.phone}</span>
          </div>
        </div>

        <div className={styles.statusBadge} style={{ background: getStatusColor(approval.status) }}>
          {approval.status}
        </div>
      </div>

      {expanded && (
        <div className={styles.expandedDetails}>
          <h4 className={styles.detailsTitle}>Additional Details</h4>
          {renderDetails()}
        </div>
      )}

      <div className={styles.cardFooter}>
        <button 
          className={styles.expandBtn}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? 'Show Less' : 'View Details'}
        </button>

        {approval.status === 'pending' && (
          <div className={styles.actionBtns}>
            <button 
              className={styles.approveBtn}
              onClick={() => onApprove(approval.id)}
            >
              ✓ Approve
            </button>
            <button 
              className={styles.rejectBtn}
              onClick={() => onReject(approval.id)}
            >
              ✗ Reject
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApprovalCard;