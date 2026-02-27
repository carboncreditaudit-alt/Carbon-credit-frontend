import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import AppRoutes from "./routes";
import { setUserRole } from "./store";

import "@coreui/coreui/dist/css/coreui.min.css";
import "@coreui/icons/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

function RouteDebugger() {
  const location = useLocation();
  console.log("CURRENT ROUTE:", location.pathname);
  return null;
}

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser?.user?.role) {
      const role = storedUser.user.role.toLowerCase();
      dispatch(setUserRole(role));

      // ✅ Redirect ONLY if user is on public entry pages
      if (location.pathname === "/" || location.pathname === "/login") {
        const roleToRoute = {
          admin: "/admin-dashboard",
          farmer: "/farmer-dashboard",
          ngo: "/ngo-dashboard",
          company: "/company-dashboard",
        };

        navigate(roleToRoute[role], { replace: true });
      }
    }

    setInitialized(true);
  }, []); // 🚫 no navigate or location deps (prevents loop)

  if (!initialized) {
    return <div className="p-3">Loading...</div>;
  }

  return (
    <>
      <RouteDebugger />
      <AppRoutes />
    </>
  );
};

export default App;