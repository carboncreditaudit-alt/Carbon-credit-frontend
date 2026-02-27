import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import ProtectedRoute from "./components/ProtectedRoute";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import AboutUs from "./pages/AboutUs";
import Approvals from "./pages/admin/Approvals";
import Companies from "./pages/admin/Companies";
import Farmers from "./pages/admin/Farmers";
import NGOs from "./pages/admin/NGOs";
import Settings from "./pages/admin/Settings";
import Register from "./pages/Register";
import AddProject from "./pages/farmer/AddProject";
import Projects from "./pages/admin/Projects";
import MarketListing from "./pages/farmer/MarketListing";
import ApprovalMarketListing from "./pages/admin/ApprovalMarketListing";
import MarketplaceListings from "./pages/company/MarketPlaceListings";
import Escrow from "./pages/admin/Escrow";
import Wallet from "./pages/farmer/Wallet";

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
      <Route path="/register" element={<Register />} />

      {/* 🧱 DASHBOARD LAYOUT */}
      <Route element={<DashboardLayout />}>

        <Route path="/admin-dashboard" element={<ProtectedRoute roles={["admin"]}><AdminDashboard /></ProtectedRoute>} />
        <Route path="/admin-dashboard/approvals" element={<ProtectedRoute roles={["admin"]}><Approvals /></ProtectedRoute>} />
        <Route path="/admin-dashboard/companies" element={<ProtectedRoute roles={["admin"]}><Companies /></ProtectedRoute>} />
        <Route path="/admin-dashboard/farmers" element={<ProtectedRoute roles={["admin"]}><Farmers /></ProtectedRoute>} />
        <Route path="/admin-dashboard/NGOs" element={<ProtectedRoute roles={["admin"]}><NGOs /></ProtectedRoute>} />
        <Route path="/admin-dashboard/settings" element={<ProtectedRoute roles={["admin"]}><Settings /></ProtectedRoute>} />
        <Route path="/admin-dashboard/projects" element={<ProtectedRoute roles={["admin"]}><Projects /></ProtectedRoute>} />
         <Route path="/admin-dashboard/approvalmarketlisting" element={<ProtectedRoute roles={["admin"]}><ApprovalMarketListing /></ProtectedRoute>} />
        <Route path="/admin-dashboard/escrow" element={<ProtectedRoute roles={["admin"]}><Escrow/></ProtectedRoute>} /> 
        



        <Route path="/farmer-dashboard" element={<ProtectedRoute roles={["farmer"]}><FarmerDashboard /></ProtectedRoute>} />
         <Route path="/farmer-dashboard/addproject" element={<ProtectedRoute roles={["farmer"]}><AddProject /></ProtectedRoute>} />
         <Route path="/farmer-dashboard/marketlisting" element={<ProtectedRoute roles={["farmer"]}><MarketListing/></ProtectedRoute>} />
        <Route path="/farmer-dashboard/wallet" element={<ProtectedRoute roles={["farmer"]}><Wallet/></ProtectedRoute>} /> 
         
     
     
        <Route path="/company-dashboard" element={<ProtectedRoute roles={["company"]}><CompanyDashboard /></ProtectedRoute>} />
        <Route path="/company-dashboard/marketplacelisting" element={<ProtectedRoute roles={["company"]}><MarketplaceListings /></ProtectedRoute>} />

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