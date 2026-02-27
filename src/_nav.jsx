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
      {
        component: CNavItem,
        name: "Users",
        to: "/admin/users",
        icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: "Reports",
        to: "/admin/reports",
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