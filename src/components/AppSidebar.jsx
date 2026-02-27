import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CSidebar, CSidebarBrand } from "@coreui/react";
import logo from "../assets/react.svg";

import getNavigation from "../_nav";
import { AppSidebarNav } from "./AppSidebarNav";
import { setSidebar } from "../store";

const AppSidebar = () => {
  const dispatch = useDispatch();

  const sidebarShow = useSelector((state) => state.sidebarShow);
  const role = useSelector((state) => state.userRole);

  // fallback if Redux not yet set
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const resolvedRole = role || storedUser?.user?.role?.toLowerCase();

  const navigation = getNavigation(resolvedRole);

  return (
    <CSidebar
      className="sidebar-green"
      position="fixed"
      visible={sidebarShow}
      onVisibleChange={(visible) => dispatch(setSidebar(visible))}
    >
      <CSidebarBrand to="/">
        <img src={logo} alt="Logo" className="sidebar-brand-full" height={70} />
      </CSidebarBrand>
      <AppSidebarNav items={navigation} />
    </CSidebar>
  );
};

export default AppSidebar;