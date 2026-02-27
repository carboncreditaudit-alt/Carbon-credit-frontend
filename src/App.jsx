import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import AppRoutes from "./routes";
import { setUserRole } from "./store";

import "@coreui/coreui/dist/css/coreui.min.css";
import "@coreui/icons/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initUser = () => {
      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (storedUser?.user?.role) {
        const role = storedUser.user.role.toLowerCase();

        dispatch(setUserRole(role));

        const roleToRoute = {
          admin: "/admin-dashboard",
          farmer: "/farmer-dashboard",
          ngo: "/ngo-dashboard",
          company: "/company-dashboard",
        };

        navigate(roleToRoute[role] || "/", { replace: true });
      }

      setLoading(false);
    };

    initUser();
  }, [dispatch, navigate]);

  if (loading) {
    return <div className="p-3">Loading...</div>;
  }

  return (
    <>
      <AppRoutes />
    </>
  );
};

export default App;