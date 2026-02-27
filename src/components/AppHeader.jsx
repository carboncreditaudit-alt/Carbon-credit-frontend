import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  CContainer,
  CHeader,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilBell, cilEnvelopeOpen, cilMenu } from "@coreui/icons";
import { setSidebar } from "../store";

const AppHeader = () => {
  const headerRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const sidebarShow = useSelector((state) => state.sidebarShow);

  useEffect(() => {
    const onScroll = () => {
      if (headerRef.current) {
        headerRef.current.classList.toggle(
          "header-shadow",
          document.documentElement.scrollTop > 0
        );
      }
    };
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      localStorage.removeItem("user");
      navigate("/login", { replace: true });
    }
  };

  return (
    <CHeader className="header-green" position="sticky" ref={headerRef}>
      <CContainer fluid className="px-3">
        <CHeaderToggler onClick={() => dispatch(setSidebar(!sidebarShow))}>
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>

        <CHeaderNav className="ms-auto">
          <CNavItem>
            <CNavLink>
              <CIcon icon={cilBell} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink>
              <CIcon icon={cilEnvelopeOpen} size="lg" />
            </CNavLink>
          </CNavItem>
        </CHeaderNav>

        <CHeaderNav>
          <CNavItem>
            <CNavLink as="button" onClick={handleLogout}>
              Logout
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
      </CContainer>
    </CHeader>
  );
};

export default AppHeader;