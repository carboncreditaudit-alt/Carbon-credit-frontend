import { useState } from 'react';
import styles from './Forms.module.css';

const NGOForm = ({ onSubmit, loading }) => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    orgName: '',
    regNumber: '',
    establishedYear: '',
    contactPerson: '',
    address: '',
    focusAreas: '',
    farmersCount: '',
    website: '',
    termsAccepted: false
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.formTitle}>NGO Registration</h2>

      {/* ONLY NGO FIELDS - NO FARMER OR COMPANY FIELDS HERE! */}
      
      <div className={styles.fieldGroup}>
        <label className={styles.label}>Email <span className={styles.required}>*</span></label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={styles.input}
          required
        />
      </div>

      <div className={styles.fieldGroup}>
        <label className={styles.label}>Phone <span className={styles.required}>*</span></label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={styles.input}
          required
        />
      </div>

      <div className={styles.row}>
        <div className={styles.fieldGroup}>
          <label className={styles.label}>Password <span className={styles.required}>*</span></label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label}>Confirm Password <span className={styles.required}>*</span></label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
      </div>

      <div className={styles.fieldGroup}>
        <label className={styles.label}>Organization Name <span className={styles.required}>*</span></label>
        <input
          type="text"
          name="orgName"
          value={formData.orgName}
          onChange={handleChange}
          className={styles.input}
          required
        />
      </div>

      <div className={styles.row}>
        <div className={styles.fieldGroup}>
          <label className={styles.label}>Registration Number <span className={styles.required}>*</span></label>
          <input
            type="text"
            name="regNumber"
            value={formData.regNumber}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label}>Established Year <span className={styles.required}>*</span></label>
          <input
            type="number"
            name="establishedYear"
            value={formData.establishedYear}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
      </div>

      <div className={styles.fieldGroup}>
        <label className={styles.label}>Contact Person <span className={styles.required}>*</span></label>
        <input
          type="text"
          name="contactPerson"
          value={formData.contactPerson}
          onChange={handleChange}
          className={styles.input}
          required
        />
      </div>

      <div className={styles.fieldGroup}>
        <label className={styles.label}>Address <span className={styles.required}>*</span></label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          className={styles.textarea}
          rows="3"
          required
        />
      </div>

      <div className={styles.fieldGroup}>
        <label className={styles.label}>Focus Areas (comma separated)</label>
        <input
          type="text"
          name="focusAreas"
          value={formData.focusAreas}
          onChange={handleChange}
          className={styles.input}
          placeholder="e.g., Agroforestry, Reforestation"
        />
      </div>

      <div className={styles.row}>
        <div className={styles.fieldGroup}>
          <label className={styles.label}>Number of Farmers Supported</label>
          <input
            type="number"
            name="farmersCount"
            value={formData.farmersCount}
            onChange={handleChange}
            className={styles.input}
          />
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label}>Website</label>
          <input
            type="url"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
      </div>

      <div className={styles.fieldGroup}>
        <label className={styles.checkbox}>
          <input
            type="checkbox"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
            required
          />
          <span>I agree to the Terms & Conditions <span className={styles.required}>*</span></span>
        </label>
      </div>

      <button type="submit" className={styles.submitButton} disabled={loading}>
        {loading ? 'Creating Account...' : 'Create Account'}
      </button>
    </form>
  );
};

export default NGOForm;