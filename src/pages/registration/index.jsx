import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import RoleTabs from './components/RoleTabs/RoleTabs';
import FarmerForm from './forms/FarmerForm';
import NGOForm from './forms/NGOForm';
import CompanyForm from './forms/CompanyForm';
import AdminForm from './forms/AdminForm';
import styles from './Registration.module.css';

const ROLES = [
  { id: 'FARMER', label: 'Farmer', icon: '👨‍🌾' },
  { id: 'NGO', label: 'NGO', icon: '🤝' },
  { id: 'COMPANY', label: 'Company', icon: '🏢' },
  { id: 'ADMIN', label: 'Admin', icon: '⚙️' }
];

const RegistrationPage = () => {
  const [activeRole, setActiveRole] = useState('FARMER');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const registrationData = {
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
        role: activeRole,
        profile: {}
      };

      const { password, confirmPassword, termsAccepted, ...profileData } = formData;

      switch(activeRole) {
        case 'FARMER':
          registrationData.profile = {
            fullName: profileData.fullName,
            village: profileData.village,
            state: profileData.state,
            district: profileData.district,
            landSize: parseFloat(profileData.landSize),
            landUnit: profileData.landUnit,
            primaryCrop: profileData.primaryCrop || null
          };
          break;
        case 'NGO':
          registrationData.profile = {
            orgName: profileData.orgName,
            regNumber: profileData.regNumber,
            establishedYear: parseInt(profileData.establishedYear),
            contactPerson: profileData.contactPerson,
            focusAreas: profileData.focusAreas ? profileData.focusAreas.split(',') : [],
            farmersCount: parseInt(profileData.farmersCount) || 0,
            address: profileData.address,
            website: profileData.website || null
          };
          break;
        case 'COMPANY':
          registrationData.profile = {
            companyName: profileData.companyName,
            regNumber: profileData.regNumber,
            industryType: profileData.industryType,
            contactPerson: profileData.contactPerson,
            companySize: profileData.companySize,
            sustainabilityGoals: profileData.sustainabilityGoals ? profileData.sustainabilityGoals.split(',') : [],
            website: profileData.website || null
          };
          break;
        case 'ADMIN':
          registrationData.profile = {
            fullName: profileData.fullName,
            employeeId: profileData.employeeId,
            department: profileData.department,
            accessCode: profileData.accessCode
          };
          break;
      }

      const response = await register(registrationData);
      
      setSuccess(response.message || 'Registration successful! Please wait for admin verification.');
      
      setTimeout(() => {
        navigate('/login', { 
          state: { message: 'Your account is pending verification. Please check back later.' } 
        });
      }, 3000);

    } catch (err) {
      setError(err.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <img src="/vite.svg" alt="Logo" className={styles.logo} />
          <h1 className={styles.title}>Create Account</h1>
          <p className={styles.subtitle}>Join our carbon credit community</p>
        </div>

        <RoleTabs 
          roles={ROLES}
          activeRole={activeRole}
          onRoleChange={setActiveRole}
        />

        {error && <div className={styles.error}>{error}</div>}
        {success && <div className={styles.success}>{success}</div>}

        <div className={styles.formContainer}>
          {activeRole === 'FARMER' && (
            <FarmerForm onSubmit={handleSubmit} loading={loading} />
          )}
          {activeRole === 'NGO' && (
            <NGOForm onSubmit={handleSubmit} loading={loading} />
          )}
          {activeRole === 'COMPANY' && (
            <CompanyForm onSubmit={handleSubmit} loading={loading} />
          )}
          {activeRole === 'ADMIN' && (
            <AdminForm onSubmit={handleSubmit} loading={loading} />
          )}
        </div>

        <div className={styles.footer}>
          <p>
            Already have an account?{' '}
            <a href="/login" className={styles.link}>Sign in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;