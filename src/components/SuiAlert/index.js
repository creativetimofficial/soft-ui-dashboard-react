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

import { useState } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Fade from "@mui/material/Fade";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";

// Custom styles for the SuiAlert
import SuiAlertRoot from "components/SuiAlert/SuiAlertRoot";
import SuiAlertCloseIcon from "components/SuiAlert/SuiAlertCloseIcon";

function SuiAlert({ color, dismissible, children, ...rest }) {
  const [alertStatus, setAlertStatus] = useState("mount");

  const handleAlertStatus = () => setAlertStatus("fadeOut");

  // The base template for the alert
  const alertTemplate = (mount = true) => (
    <Fade in={mount} timeout={300}>
      <SuiAlertRoot ownerState={{ color }} {...rest}>
        <SuiBox display="flex" alignItems="center" color="white">
          {children}
        </SuiBox>
        {dismissible ? (
          <SuiAlertCloseIcon onClick={mount ? handleAlertStatus : null}>&times;</SuiAlertCloseIcon>
        ) : null}
      </SuiAlertRoot>
    </Fade>
  );

  switch (true) {
    case alertStatus === "mount":
      return alertTemplate();
    case alertStatus === "fadeOut":
      setTimeout(() => setAlertStatus("unmount"), 400);
      return alertTemplate(false);
    default:
      alertTemplate();
      break;
  }

  return null;
}

// Setting default values for the props of SuiAlert
SuiAlert.defaultProps = {
  color: "info",
  dismissible: false,
};

// Typechecking props of the SuiAlert
SuiAlert.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  dismissible: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default SuiAlert;
