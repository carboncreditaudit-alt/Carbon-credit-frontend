import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import AppSidebar from "../components/AppSidebar";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import { CContainer } from "@coreui/react";
import "../styles/DashboardLayout.css";

const DashboardLayout = () => {
  const sidebarShow = useSelector((state) => state.sidebarShow);

  return (
    <div className="layout-root">
      <AppSidebar />

      <div
        className="layout-content"
        style={{ marginLeft: sidebarShow ? "256px" : "0px" }}
      >
        <AppHeader />

        <div className="layout-body">
          <CContainer fluid>
            <Outlet />
          </CContainer>
        </div>

        <AppFooter />
      </div>
    </div>
  );
};

export default DashboardLayout;