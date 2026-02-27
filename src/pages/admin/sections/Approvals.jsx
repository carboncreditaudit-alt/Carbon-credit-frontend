import { useState } from 'react';
import ApprovalCard from '../components/ApprovalCard/ApprovalCard';
import styles from '../Dashboard.module.css';

const Approvals = () => {
  const [filter, setFilter] = useState('all');
  const [approvals, setApprovals] = useState([
    {
      id: 1,
      type: 'FARMER',
      name: 'Rajesh Kumar',
      email: 'rajesh@example.com',
      phone: '9876543210',
      village: 'Village A',
      landSize: '2.5 acres',
      submittedDate: '2024-02-20',
      status: 'pending'
    },
    {
      id: 2,
      type: 'NGO',
      name: 'Green Earth Foundation',
      email: 'contact@greenearth.org',
      phone: '9876543211',
      regNumber: 'NGO/2024/001',
      establishedYear: '2020',
      farmersCount: 45,
      submittedDate: '2024-02-19',
      status: 'pending'
    },
    {
      id: 3,
      type: 'COMPANY',
      name: 'EcoCorp Industries',
      email: 'info@ecocorp.com',
      phone: '9876543212',
      regNumber: 'CIN/2023/123',
      industryType: 'Technology',
      companySize: '201-500 employees',
      submittedDate: '2024-02-18',
      status: 'pending'
    },
    {
      id: 4,
      type: 'FARMER',
      name: 'Priya Sharma',
      email: 'priya@example.com',
      phone: '9876543213',
      village: 'Village B',
      landSize: '3.2 acres',
      submittedDate: '2024-02-17',
      status: 'approved'
    },
    {
      id: 5,
      type: 'NGO',
      name: 'Farmers Help Initiative',
      email: 'info@farmershelp.org',
      phone: '9876543214',
      regNumber: 'NGO/2023/456',
      establishedYear: '2019',
      farmersCount: 78,
      submittedDate: '2024-02-16',
      status: 'rejected'
    },
  ]);

  const handleApprove = (id) => {
    setApprovals(prev => 
      prev.map(item => 
        item.id === id ? { ...item, status: 'approved' } : item
      )
    );
    alert(`✅ User approved successfully!`);
  };

  const handleReject = (id) => {
    setApprovals(prev => 
      prev.map(item => 
        item.id === id ? { ...item, status: 'rejected' } : item
      )
    );
    alert(`❌ User rejected.`);
  };

  const filteredApprovals = filter === 'all' 
    ? approvals 
    : filter === 'pending' 
      ? approvals.filter(a => a.status === 'pending')
      : filter === 'approved'
        ? approvals.filter(a => a.status === 'approved')
        : approvals.filter(a => a.status === 'rejected');

  const pendingCount = approvals.filter(a => a.status === 'pending').length;
  const approvedCount = approvals.filter(a => a.status === 'approved').length;
  const rejectedCount = approvals.filter(a => a.status === 'rejected').length;

  return (
    <div className={styles.approvalsPage}>
      <div className={styles.header}>
        <h2 className={styles.sectionTitle}>Approval Queue</h2>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statValue}>{pendingCount}</span>
            <span className={styles.statLabel}>Pending</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>{approvedCount}</span>
            <span className={styles.statLabel}>Approved</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>{rejectedCount}</span>
            <span className={styles.statLabel}>Rejected</span>
          </div>
        </div>
      </div>

      <div className={styles.filterBar}>
        <button 
          className={`${styles.filterBtn} ${filter === 'all' ? styles.active : ''}`}
          onClick={() => setFilter('all')}
        >
          All ({approvals.length})
        </button>
        <button 
          className={`${styles.filterBtn} ${filter === 'pending' ? styles.active : ''}`}
          onClick={() => setFilter('pending')}
        >
          Pending ({pendingCount})
        </button>
        <button 
          className={`${styles.filterBtn} ${filter === 'approved' ? styles.active : ''}`}
          onClick={() => setFilter('approved')}
        >
          Approved ({approvedCount})
        </button>
        <button 
          className={`${styles.filterBtn} ${filter === 'rejected' ? styles.active : ''}`}
          onClick={() => setFilter('rejected')}
        >
          Rejected ({rejectedCount})
        </button>

        <select className={styles.typeFilter}>
          <option value="all">All Types</option>
          <option value="farmer">Farmers</option>
          <option value="ngo">NGOs</option>
          <option value="company">Companies</option>
        </select>
      </div>

      <div className={styles.approvalsList}>
        {filteredApprovals.map(approval => (
          <ApprovalCard 
            key={approval.id} 
            approval={approval}
            onApprove={handleApprove}
            onReject={handleReject}
          />
        ))}
        
        {filteredApprovals.length === 0 && (
          <div className={styles.emptyState}>
            <span className={styles.emptyIcon}>✅</span>
            <h3>No approvals found</h3>
            <p>All caught up! No pending approvals.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Approvals;