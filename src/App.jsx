import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import RegistrationPage from './pages/registration';
import LoginPage from './pages/login';  // Add this import

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />  {/* Add this line */}
          <Route path="/" element={<div>Home Page</div>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;