import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import ProtectedRoute from "./components/ProtectedRoute";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import AboutUs from "./pages/AboutUs";

// Admin
import AdminDashboard from "./pages/admin/Dashboard";
import Approvals from "./pages/admin/Approvals";

// Farmer
import FarmerDashboard from "./pages/farmer/Dashboard";

// Company
import CompanyDashboard from "./pages/company/Dashboard";

// NGO
import NgoDashboard from "./pages/ngo/Dashboard";

const AppRoutes = () => {
  return (
    <Routes>
      {/* 🌐 PUBLIC */}
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/about-us" element={<AboutUs />} />

      {/* 🧱 DASHBOARD LAYOUT */}
      <Route element={<DashboardLayout />}>

        {/* ================= ADMIN ================= */}
        <Route path="admin-dashboard">
          <Route
            index
            element={
              <ProtectedRoute roles={["admin"]}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="approvals"
            element={
              <ProtectedRoute roles={["admin"]}>
                <Approvals />
              </ProtectedRoute>
            }
          />

          {/* 👉 future routes */}
          {/* <Route path="users" element={<Users />} /> */}
          {/* <Route path="reports" element={<Reports />} /> */}
        </Route>

        {/* ================= FARMER ================= */}
        <Route path="farmer-dashboard">
          <Route
            index
            element={
              <ProtectedRoute roles={["farmer"]}>
                <FarmerDashboard />
              </ProtectedRoute>
            }
          />
        </Route>

        {/* ================= COMPANY ================= */}
        <Route path="company-dashboard">
          <Route
            index
            element={
              <ProtectedRoute roles={["company"]}>
                <CompanyDashboard />
              </ProtectedRoute>
            }
          />
        </Route>

        {/* ================= NGO ================= */}
        <Route path="ngo-dashboard">
          <Route
            index
            element={
              <ProtectedRoute roles={["ngo"]}>
                <NgoDashboard />
              </ProtectedRoute>
            }
          />
        </Route>

      </Route>

      {/* ❌ 404 */}
      <Route
        path="*"
        element={
          <div className="d-flex vh-100 align-items-center justify-content-center fs-3 fw-semibold">
            404 — Page Not Found
          </div>
        }
      />
    </Routes>
  );
};

export default AppRoutes;