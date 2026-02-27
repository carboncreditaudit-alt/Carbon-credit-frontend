import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Landing from './pages/landing/Landing';
import RegistrationPage from './pages/registration';
import LoginPage from './pages/login';
import FarmerDashboard from './pages/farmer/Dashboard';
import FarmerSettings from './pages/farmer/pages/Settings';
import FarmerProfile from './pages/farmer/pages/Profile';
import FarmerNotifications from './pages/farmer/pages/Notifications';
import CompanyDashboard from './pages/company/Dashboard';
import NgoDashboard from './pages/ngo/Dashboard';
import AdminDashboard from './pages/admin/Dashboard';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Landing Page - Common Entry Point */}
          <Route path="/" element={<Landing />} />
          
          {/* Auth Routes */}
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          
          {/* Farmer Dashboard & Sub-pages */}
          <Route path="/farmer/dashboard" element={<FarmerDashboard />} />
          <Route path="/farmer/settings" element={<FarmerSettings />} />
          <Route path="/farmer/profile" element={<FarmerProfile />} />
          <Route path="/farmer/notifications" element={<FarmerNotifications />} />
          
          {/* Other Dashboards */}
          <Route path="/company/dashboard" element={<CompanyDashboard />} />
          <Route path="/ngo/dashboard" element={<NgoDashboard />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;