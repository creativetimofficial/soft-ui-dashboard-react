/**
=========================================================
* Soft UI Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useEffect } from "react";

// react-router-dom components
import { useLocation, NavLink } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// clsx is a utility for constructing className strings conditionally
import clsx from "clsx";

// @mui material components
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";
import Link from "@mui/material/Link";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";

// Soft UI Dashboard React example components
import SidenavCollapse from "examples/Sidenav/SidenavCollapse";
import SidenavCard from "examples/Sidenav/SidenavCard";

// Custom styles for the Sidenav
import styles from "examples/Sidenav/styles/sidenav";

// Images
import SoftUILogo from "assets/images/logo-ct.png";

// Soft UI Dashboard React context
import { useSoftUIController } from "context";

function Sidenav({ routes, ...rest }) {
  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, transparentSidenav } = controller;
  const classes = styles({ miniSidenav, transparentSidenav });
  const location = useLocation();
  const { pathname } = location;
  const collapseName = pathname.split("/").slice(1)[0];

  const closeSizenav = () => dispatch({ type: "MINI_SIDENAV", value: true });

  useEffect(() => {
    // A function that sets the mini state of the sidenav.
    function handleMiniSidenav() {
      dispatch({
        type: "MINI_SIDENAV",
        value: window.innerWidth < 1200,
      });
    }

    /** 
     The event listener that's calling the handleMiniSidenav function when resizing the window.
    */
    window.addEventListener("resize", handleMiniSidenav);

    // Call the handleMiniSidenav function to set the state with the initial value.
    handleMiniSidenav();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleMiniSidenav);
  }, [dispatch, location]);

  // Render all the routes from the routes.js (All the visible items on the Sidenav)
  const renderRoutes = routes.map(({ type, name, icon, title, noCollapse, key, route, href }) => {
    let returnValue;

    if (type === "collapse") {
      returnValue = href ? (
        <Link
          href={href}
          key={key}
          target="_blank"
          rel="noreferrer"
          className={classes.sidenav_navlink}
        >
          <SidenavCollapse
            name={name}
            icon={icon}
            active={key === collapseName}
            noCollapse={noCollapse}
          />
        </Link>
      ) : (
        <NavLink to={route} key={key} className={classes.sidenav_navlink}>
          <SidenavCollapse
            name={name}
            icon={icon}
            active={key === collapseName}
            noCollapse={noCollapse}
          />
        </NavLink>
      );
    } else if (type === "title") {
      returnValue = (
        <SuiTypography
          key={key}
          variant="caption"
          fontWeight="bold"
          textTransform="uppercase"
          customClass={classes.sidenav_title}
        >
          {title}
        </SuiTypography>
      );
    } else if (type === "divider") {
      returnValue = <Divider key={key} />;
    }

    return returnValue;
  });

  return (
    <Drawer
      {...rest}
      variant="permanent"
      classes={{
        paper: clsx(classes.sidenav, {
          [classes.sidenav_open]: !miniSidenav,
          [classes.sidenav_close]: miniSidenav,
        }),
      }}
    >
      <SuiBox customClass={classes.sidenav_header}>
        <SuiBox
          display={{ xs: "block", xl: "none" }}
          position="absolute"
          top={0}
          right={0}
          p={1.625}
          customClass="cursor-pointer"
          onClick={closeSizenav}
        >
          <SuiTypography variant="h6" textColor="secondary">
            <Icon className="font-bold">close</Icon>
          </SuiTypography>
        </SuiBox>
        <NavLink to="/">
          <SuiBox
            component="img"
            src={SoftUILogo}
            alt="Soft UI Logo"
            customClass={classes.sidenav_logo}
          />
          <SuiBox customClass={classes.sidenav_logoLabel}>
            <SuiTypography component="h6" variant="button" fontWeight="medium">
              Soft UI Dashboard
            </SuiTypography>
          </SuiBox>
        </NavLink>
      </SuiBox>
      <Divider />
      <List>{renderRoutes}</List>
      <SuiBox customClass={classes.sidenav_footer}>
        <SidenavCard />
        <SuiBox mt={2}>
          <SuiButton
            component="a"
            href="https://creative-tim.com/product/soft-ui-dashboard-pro-react"
            target="_blank"
            rel="noreferrer"
            variant="gradient"
            buttonColor="info"
            fullWidth
          >
            upgrade to pro
          </SuiButton>
        </SuiBox>
      </SuiBox>
    </Drawer>
  );
}

// Typechecking props for the Sidenav
Sidenav.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Sidenav;
