import React from "react";
import CIcon from "@coreui/icons-react";
import { cilSpeedometer, cilPeople, cilChart, cilInfo, cilDescription } from "@coreui/icons";
import { CNavItem, CNavGroup } from "@coreui/react";

export const getNavigation = (role) => {
  let navigation = [];

  /* ================= ADMIN ================= */
  if (role === "admin") {
    navigation = [
      {
        component: CNavItem,
        name: "Dashboard",
        to: "/admin-dashboard",
        icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
      },
      {component: CNavItem,
        name: "User Approvals",
        to: "/admin-dashboard/approvals",
        icon: <CIcon icon={cilChart} customClassName="nav-icon" />,
      },
       {component: CNavItem,
        name: "Companies",
        to: "/admin-dashboard/Companies",
        icon: <CIcon icon={cilChart} customClassName="nav-icon" />,
      },
      {component: CNavItem,
        name: "Farmers",
        to: "/admin-dashboard/Farmers",
        icon: <CIcon icon={cilChart} customClassName="nav-icon" />,
      },
       {component: CNavItem,
        name: "NGOs",
        to: "/admin-dashboard/NGOs",
        icon: <CIcon icon={cilChart} customClassName="nav-icon" />,
      },
       {component: CNavItem,
        name: "Settings",
        to: "/admin-dashboard/settings",
        icon: <CIcon icon={cilChart} customClassName="nav-icon" />,
      },
      {component: CNavItem,
        name: "Projects",
        to: "/admin-dashboard/Projects",
        icon: <CIcon icon={cilChart} customClassName="nav-icon" />,
      },
      {component: CNavItem,
        name: "Approval Market Listing",
        to: "/admin-dashboard/approvalmarketlisting",
        icon: <CIcon icon={cilChart} customClassName="nav-icon" />,
      },
      {component: CNavItem,
        name: "Escrow",
        to: "/admin-dashboard/escrow",
        icon: <CIcon icon={cilChart} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: "Approvals",
        to: "/admin-dashboard/approvals",
        icon: <CIcon icon={cilChart} customClassName="nav-icon" />,
      },
    ];
  }

  /* ================= FARMER ================= */
  if (role === "farmer") {
    navigation = [
      {
        component: CNavItem,
        name: "Dashboard",
        to: "/farmer-dashboard",
        icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: "My Activities",
        to: "/farmer/activities",
      },
      {
        component: CNavItem,
        name: "Benefits",
        to: "/farmer/benefits",
      },
      {
        component: CNavItem,
        name: "AddProjects",
        to: "farmer-dashboard/addproject",
      },
      {
        component: CNavItem,
        name: "MarketListing",
        to: "/farmer-dashboard/marketlisting",
      },
      {
        component: CNavItem,
        name: "Wallet",
        to: "/farmer-dashboard/Wallet",
      },
    ];
  }

  /* ================= NGO ================= */
  if (role === "ngo") {
    navigation = [
      {
        component: CNavItem,
        name: "Dashboard",
        to: "/ngo-dashboard",
        icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: "Programs",
        to: "/ngo/programs",
      },
      {
        component: CNavItem,
        name: "Farmers",
        to: "/ngo/farmers",
      },
    ];
  }

  /* ================= COMPANY ================= */
  if (role === "company") {
    navigation = [
      {
        component: CNavItem,
        name: "Dashboard",
        to: "/company-dashboard",
        icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: "Projects",
        to: "/company/projects",
      },
      {
        component: CNavItem,
        name: "Analytics",
        to: "/company/analytics",
      },
      {
        component: CNavItem,
        name: "Market Place Listings",
        to: "/company-dashboard/marketplacelisting",
      },
    ];
  }

  /* ================= COMMON ================= */
  navigation.push({
    component: CNavGroup,
    name: "Help & About",
    icon: <CIcon icon={cilInfo} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "Help",
        to: "/help",
        icon: <CIcon icon={cilInfo} customClassName="nav-icon" />,
        className: "ms-4",
      },
      {
        component: CNavItem,
        name: "About",
        to: "/about-us",
        icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
        className: "ms-4",
      },
    ],
  });

  return navigation;
};

export default getNavigation;