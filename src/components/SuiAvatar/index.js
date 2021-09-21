/**
=========================================================
* Soft UI Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { forwardRef } from "react";

// clsx is a utility for constructing className string conditionally
import clsx from "clsx";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Avatar from "@mui/material/Avatar";

// Custom styles for SuiAvatar
import styles from "components/SuiAvatar/styles";

const SuiAvatar = forwardRef(({ backgroundColor, size, boxShadow, customClass, ...rest }, ref) => {
  const classes = styles({ boxShadow, backgroundColor });

  return (
    <Avatar
      ref={ref}
      {...rest}
      className={clsx(classes.suiAvatar, customClass, {
        [classes[`suiAvatar_${size}`]]: size,
        [classes.suiAvatar_boxShadow]: boxShadow !== "none",
      })}
    />
  );
});

// Setting default values for the props of SuiAvatar
SuiAvatar.defaultProps = {
  backgroundColor: "transparent",
  size: "md",
  boxShadow: "none",
  customClass: "",
};

// Typechecking props for the SuiAvatar
SuiAvatar.propTypes = {
  backgroundColor: PropTypes.oneOf([
    "transparent",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "xxl"]),
  boxShadow: PropTypes.oneOf(["none", "xs", "sm", "regular", "lg", "xl", "xxl", "inset"]),
  customClass: PropTypes.string,
};

export default SuiAvatar;
