import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import LoginForm from './components/LoginForm/LoginForm';
import styles from './Login.module.css';

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    setLoading(true);
    setError('');

    try {
      const response = await login(formData);
      
      // Redirect based on role
      switch(response.user.role) {
        case 'FARMER':
          navigate('/farmer/dashboard');
          break;
        case 'NGO':
          navigate('/ngo/dashboard');
          break;
        case 'COMPANY':
          navigate('/company/dashboard');
          break;
        case 'ADMIN':
          navigate('/admin/dashboard');
          break;
        default:
          navigate('/');
      }
    } catch (err) {
      setError(err.message || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <img src="/vite.svg" alt="Logo" className={styles.logo} />
          <h1 className={styles.title}>Welcome Back</h1>
          <p className={styles.subtitle}>Sign in to your account</p>
        </div>

        {error && <div className={styles.error}>{error}</div>}

        <LoginForm onSubmit={handleSubmit} loading={loading} />

        <div className={styles.footer}>
          <p>
            Don't have an account?{' '}
            <Link to="/register" className={styles.link}>Create Account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;