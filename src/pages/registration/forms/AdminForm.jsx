import { useState } from 'react';
import styles from './Forms.module.css';

const AdminForm = ({ onSubmit, loading }) => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    employeeId: '',
    department: '',
    accessCode: '',
    termsAccepted: false
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';

    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.fullName) newErrors.fullName = 'Full name is required';
    if (!formData.employeeId) newErrors.employeeId = 'Employee ID is required';
    if (!formData.department) newErrors.department = 'Department is required';
    if (!formData.accessCode) newErrors.accessCode = 'Access code is required';
    if (!formData.termsAccepted) newErrors.termsAccepted = 'You must accept terms';

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      onSubmit(formData);
    } else {
      setErrors(newErrors);
    }
  };

  const departments = [
    'Administration',
    'Verification',
    'Finance',
    'Technical',
    'Customer Support',
    'Management'
  ];

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.formTitle}>Admin Registration</h2>
      <p className={styles.note}>Note: Admin registration requires special access code</p>

      <div className={styles.fieldGroup}>
        <label className={styles.label}>Email <span className={styles.required}>*</span></label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`${styles.input} ${errors.email ? styles.error : ''}`}
        />
        {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
      </div>

      <div className={styles.fieldGroup}>
        <label className={styles.label}>Phone <span className={styles.required}>*</span></label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`${styles.input} ${errors.phone ? styles.error : ''}`}
        />
        {errors.phone && <span className={styles.errorMessage}>{errors.phone}</span>}
      </div>

      <div className={styles.row}>
        <div className={styles.fieldGroup}>
          <label className={styles.label}>Password <span className={styles.required}>*</span></label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`${styles.input} ${errors.password ? styles.error : ''}`}
          />
          {errors.password && <span className={styles.errorMessage}>{errors.password}</span>}
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label}>Confirm Password <span className={styles.required}>*</span></label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={`${styles.input} ${errors.confirmPassword ? styles.error : ''}`}
          />
          {errors.confirmPassword && <span className={styles.errorMessage}>{errors.confirmPassword}</span>}
        </div>
      </div>

      <div className={styles.fieldGroup}>
        <label className={styles.label}>Full Name <span className={styles.required}>*</span></label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className={`${styles.input} ${errors.fullName ? styles.error : ''}`}
        />
        {errors.fullName && <span className={styles.errorMessage}>{errors.fullName}</span>}
      </div>

      <div className={styles.row}>
        <div className={styles.fieldGroup}>
          <label className={styles.label}>Employee ID <span className={styles.required}>*</span></label>
          <input
            type="text"
            name="employeeId"
            value={formData.employeeId}
            onChange={handleChange}
            className={`${styles.input} ${errors.employeeId ? styles.error : ''}`}
          />
          {errors.employeeId && <span className={styles.errorMessage}>{errors.employeeId}</span>}
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label}>Department <span className={styles.required}>*</span></label>
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            className={`${styles.select} ${errors.department ? styles.error : ''}`}
          >
            <option value="">Select Department</option>
            {departments.map(dept => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>
          {errors.department && <span className={styles.errorMessage}>{errors.department}</span>}
        </div>
      </div>

      <div className={styles.fieldGroup}>
        <label className={styles.label}>Access Code <span className={styles.required}>*</span></label>
        <input
          type="password"
          name="accessCode"
          value={formData.accessCode}
          onChange={handleChange}
          className={`${styles.input} ${errors.accessCode ? styles.error : ''}`}
          placeholder="Enter special access code"
        />
        {errors.accessCode && <span className={styles.errorMessage}>{errors.accessCode}</span>}
      </div>

      <div className={styles.fieldGroup}>
        <label className={styles.checkbox}>
          <input
            type="checkbox"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
          />
          <span>
            I agree to the <a href="/terms" target="_blank">Terms & Conditions</a>
            <span className={styles.required}>*</span>
          </span>
        </label>
        {errors.termsAccepted && <span className={styles.errorMessage}>{errors.termsAccepted}</span>}
      </div>

      <button type="submit" className={styles.submitButton} disabled={loading}>
        {loading ? 'Creating Account...' : 'Create Account'}
      </button>
    </form>
  );
};

export default AdminForm;