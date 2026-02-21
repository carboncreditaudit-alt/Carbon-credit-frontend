import { useState } from 'react';
import styles from './Forms.module.css';

const CompanyForm = ({ onSubmit, loading }) => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    companyName: '',
    regNumber: '',
    industryType: '',
    contactPerson: '',
    companySize: '',
    sustainabilityGoals: '',
    website: '',
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

    if (!formData.companyName) newErrors.companyName = 'Company name is required';
    if (!formData.regNumber) newErrors.regNumber = 'Registration number is required';
    if (!formData.industryType) newErrors.industryType = 'Industry type is required';
    if (!formData.contactPerson) newErrors.contactPerson = 'Contact person is required';
    if (!formData.companySize) newErrors.companySize = 'Company size is required';
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

  const industries = [
    'Technology',
    'Manufacturing',
    'Finance',
    'Energy',
    'Agriculture',
    'Transportation',
    'Retail',
    'Healthcare',
    'Real Estate',
    'Other'
  ];

  const companySizes = [
    '1-10 employees',
    '11-50 employees',
    '51-200 employees',
    '201-500 employees',
    '501-1000 employees',
    '1000+ employees'
  ];

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.formTitle}>Company Registration</h2>

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
        <label className={styles.label}>Company Name <span className={styles.required}>*</span></label>
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          className={`${styles.input} ${errors.companyName ? styles.error : ''}`}
        />
        {errors.companyName && <span className={styles.errorMessage}>{errors.companyName}</span>}
      </div>

      <div className={styles.row}>
        <div className={styles.fieldGroup}>
          <label className={styles.label}>Registration Number <span className={styles.required}>*</span></label>
          <input
            type="text"
            name="regNumber"
            value={formData.regNumber}
            onChange={handleChange}
            className={`${styles.input} ${errors.regNumber ? styles.error : ''}`}
          />
          {errors.regNumber && <span className={styles.errorMessage}>{errors.regNumber}</span>}
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label}>Industry Type <span className={styles.required}>*</span></label>
          <select
            name="industryType"
            value={formData.industryType}
            onChange={handleChange}
            className={`${styles.select} ${errors.industryType ? styles.error : ''}`}
          >
            <option value="">Select Industry</option>
            {industries.map(ind => (
              <option key={ind} value={ind}>{ind}</option>
            ))}
          </select>
          {errors.industryType && <span className={styles.errorMessage}>{errors.industryType}</span>}
        </div>
      </div>

      <div className={styles.fieldGroup}>
        <label className={styles.label}>Contact Person <span className={styles.required}>*</span></label>
        <input
          type="text"
          name="contactPerson"
          value={formData.contactPerson}
          onChange={handleChange}
          className={`${styles.input} ${errors.contactPerson ? styles.error : ''}`}
        />
        {errors.contactPerson && <span className={styles.errorMessage}>{errors.contactPerson}</span>}
      </div>

      <div className={styles.row}>
        <div className={styles.fieldGroup}>
          <label className={styles.label}>Company Size <span className={styles.required}>*</span></label>
          <select
            name="companySize"
            value={formData.companySize}
            onChange={handleChange}
            className={`${styles.select} ${errors.companySize ? styles.error : ''}`}
          >
            <option value="">Select Size</option>
            {companySizes.map(size => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
          {errors.companySize && <span className={styles.errorMessage}>{errors.companySize}</span>}
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label}>Website</label>
          <input
            type="url"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className={styles.input}
            placeholder="https://"
          />
        </div>
      </div>

      <div className={styles.fieldGroup}>
        <label className={styles.label}>Sustainability Goals (comma separated)</label>
        <input
          type="text"
          name="sustainabilityGoals"
          value={formData.sustainabilityGoals}
          onChange={handleChange}
          className={styles.input}
          placeholder="e.g., Net Zero, Carbon Neutral, ESG Reporting"
        />
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

export default CompanyForm;