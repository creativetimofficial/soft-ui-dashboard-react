/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useEffect, useState } from "react";

// react-router-dom components
import { useLocation } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Sidenav from "examples/Sidenav";

// Soft UI Dashboard React context
import { useSoftUIController, setMiniSidenav, setLayout, setTransparentSidenav } from "context";

// Soft UI Dashboard React routes
import routes from "routes";

// Custom styles for the BaseLayout
import {
  baseLayout,
  baseLayoutBackground,
  baseLayoutContent,
} from "layouts/virtual-reality/components/BaseLayout/styles";

// Images
import brand from "assets/images/logo-ct.png";

function BaseLayout({ children }) {
  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, sidenavColor } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const { pathname } = useLocation();

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Change the document layout to VR for the VR view
  useEffect(() => {
    setLayout(dispatch, "vr");
    setTransparentSidenav(dispatch, false);
  }, [pathname]);

  return (
    <SuiBox sx={baseLayout}>
      <SuiBox mt={3} mx={3}>
        <DashboardNavbar />
      </SuiBox>
      <SuiBox sx={baseLayoutBackground}>
        <SuiBox display={{ xs: "block", lg: "none" }}>
          <Sidenav
            brand={brand}
            brandName="Soft UI Dashboard PRO"
            routes={routes}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          />
        </SuiBox>
        <SuiBox sx={baseLayoutContent}>
          <SuiBox display={{ xs: "none", lg: "block" }}>
            <Sidenav
              color={sidenavColor}
              brand={brand}
              brandName="Soft UI Dashboard PRO"
              routes={routes}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}
            />
          </SuiBox>
          <DashboardLayout>{children}</DashboardLayout>
        </SuiBox>
      </SuiBox>
      <SuiBox pb={2} pt={0.25}>
        <Footer />
      </SuiBox>
    </SuiBox>
  );
}

// Typechecking props for the BaseLayout
BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BaseLayout;
