import { useState } from 'react';
import styles from './Forms.module.css';

const FarmerForm = ({ onSubmit, loading }) => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    village: '',
    state: '',
    district: '',
    landSize: '',
    landUnit: 'acres',
    primaryCrop: '',
    termsAccepted: false
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';

    if (!formData.phone) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Phone must be 10 digits';

    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.fullName) newErrors.fullName = 'Full name is required';
    if (!formData.village) newErrors.village = 'Village is required';
    if (!formData.state) newErrors.state = 'State is required';
    if (!formData.district) newErrors.district = 'District is required';
    if (!formData.landSize) newErrors.landSize = 'Land size is required';
    if (!formData.termsAccepted) newErrors.termsAccepted = 'You must accept terms';

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
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

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.formTitle}>Farmer Registration</h2>

      <div className={styles.fieldGroup}>
        <label className={styles.label}>
          Email <span className={styles.required}>*</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`${styles.input} ${errors.email ? styles.error : ''}`}
          placeholder="farmer@example.com"
        />
        {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
      </div>

      <div className={styles.fieldGroup}>
        <label className={styles.label}>
          Phone Number <span className={styles.required}>*</span>
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`${styles.input} ${errors.phone ? styles.error : ''}`}
          placeholder="10 digit mobile number"
        />
        {errors.phone && <span className={styles.errorMessage}>{errors.phone}</span>}
      </div>

      <div className={styles.row}>
        <div className={styles.fieldGroup}>
          <label className={styles.label}>
            Password <span className={styles.required}>*</span>
          </label>
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
          <label className={styles.label}>
            Confirm Password <span className={styles.required}>*</span>
          </label>
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
        <label className={styles.label}>
          Full Name <span className={styles.required}>*</span>
        </label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className={`${styles.input} ${errors.fullName ? styles.error : ''}`}
          placeholder="As per government ID"
        />
        {errors.fullName && <span className={styles.errorMessage}>{errors.fullName}</span>}
      </div>

      <div className={styles.row}>
        <div className={styles.fieldGroup}>
          <label className={styles.label}>
            Village/Area <span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            name="village"
            value={formData.village}
            onChange={handleChange}
            className={`${styles.input} ${errors.village ? styles.error : ''}`}
          />
          {errors.village && <span className={styles.errorMessage}>{errors.village}</span>}
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label}>
            District <span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            name="district"
            value={formData.district}
            onChange={handleChange}
            className={`${styles.input} ${errors.district ? styles.error : ''}`}
          />
          {errors.district && <span className={styles.errorMessage}>{errors.district}</span>}
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.fieldGroup}>
          <label className={styles.label}>
            State <span className={styles.required}>*</span>
          </label>
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            className={`${styles.select} ${errors.state ? styles.error : ''}`}
          >
            <option value="">Select State</option>
            <option value="ANDHRA_PRADESH">Andhra Pradesh</option>
            <option value="TELANGANA">Telangana</option>
            <option value="TAMIL_NADU">Tamil Nadu</option>
            <option value="KARNATAKA">Karnataka</option>
            <option value="KERALA">Kerala</option>
            <option value="MAHARASHTRA">Maharashtra</option>
            <option value="MADHYA_PRADESH">Madhya Pradesh</option>
            <option value="UTTAR_PRADESH">Uttar Pradesh</option>
          </select>
          {errors.state && <span className={styles.errorMessage}>{errors.state}</span>}
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label}>
            Land Size <span className={styles.required}>*</span>
          </label>
          <div className={styles.inputGroup}>
            <input
              type="number"
              name="landSize"
              value={formData.landSize}
              onChange={handleChange}
              className={`${styles.input} ${errors.landSize ? styles.error : ''}`}
              step="0.01"
              min="0"
            />
            <select
              name="landUnit"
              value={formData.landUnit}
              onChange={handleChange}
              className={styles.unitSelect}
            >
              <option value="acres">Acres</option>
              <option value="hectares">Hectares</option>
            </select>
          </div>
          {errors.landSize && <span className={styles.errorMessage}>{errors.landSize}</span>}
        </div>
      </div>

      <div className={styles.fieldGroup}>
        <label className={styles.label}>Primary Crop (Optional)</label>
        <input
          type="text"
          name="primaryCrop"
          value={formData.primaryCrop}
          onChange={handleChange}
          className={styles.input}
          placeholder="e.g., Rice, Wheat, Vegetables"
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

      <button 
        type="submit" 
        className={styles.submitButton}
        disabled={loading}
      >
        {loading ? 'Creating Account...' : 'Create Account'}
      </button>
    </form>
  );
};

export default FarmerForm;