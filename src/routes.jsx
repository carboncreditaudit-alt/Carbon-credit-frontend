import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import ProtectedRoute from "./components/ProtectedRoute";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import AdminDashboard from "./pages/admin/Dashboard";
import FarmerDashboard from "./pages/farmer/Dashboard";
import CompanyDashboard from "./pages/company/Dashboard";
import NgoDashboard from "./pages/ngo/Dashboard";
import AboutUs from "./pages/AboutUs";

const AppRoutes = () => {
  return (
    <Routes>
      {/* 🌐 Public */}
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/about-us" element={<AboutUs />} />

      {/* 🧱 Dashboard Layout */}
      <Route element={<DashboardLayout />}>
       

        <Route path="/admin-dashboard" element={<ProtectedRoute roles={["admin"]}><AdminDashboard /></ProtectedRoute>} />
        
        <Route path="/farmer-dashboard" element={<ProtectedRoute roles={["farmer"]}><FarmerDashboard /></ProtectedRoute>} />
     
        <Route path="/company-dashboard" element={<ProtectedRoute roles={["company"]}><CompanyDashboard /></ProtectedRoute>} />

        <Route path="/ngo-dashboard" element={<ProtectedRoute roles={["ngo"]}><NgoDashboard /></ProtectedRoute>} />
    

      </Route>

      {/* ❌ 404 */}
      <Route path="*" element={<div className="h-screen flex items-center justify-center text-2xl font-semibold">404 — Page Not Found</div>} />
    </Routes>
  );
};

export default AppRoutes;