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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// clsx is a utility for constructing className strings conditionally
import clsx from "clsx";

// @mui material components
import Badge from "@mui/material/Badge";

// Custom styles for the SuiBadge
import styles from "components/SuiBadge/styles";

const SuiBadge = forwardRef(
  (
    {
      color,
      variant,
      size,
      badgeContent,
      circular,
      indicator,
      border,
      container,
      children,
      ...rest
    },
    ref
  ) => {
    const classes = styles({ color, circular, border, size });

    return (
      <Badge
        {...rest}
        ref={ref}
        badgeContent={badgeContent}
        color="default"
        className={clsx(`${classes[variant]}`, {
          [classes.badge]: !indicator,
          [classes.badge_indicator]: indicator,
          [classes.badge_childNode]: !children && !container,
          [classes.badge_container]: container,
        })}
      >
        {children}
      </Badge>
    );
  }
);

// Setting default values for the props of SuiBadge
SuiBadge.defaultProps = {
  color: "info",
  variant: "gradient",
  size: "small",
  circular: false,
  indicator: false,
  border: false,
  children: false,
  container: false,
};

// Typechecking props of the SuiBadge
SuiBadge.propTypes = {
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
  variant: PropTypes.oneOf(["gradient", "contained"]),
  size: PropTypes.oneOf(["extra-small", "small", "medium", "large"]),
  badgeContent: PropTypes.node.isRequired,
  circular: PropTypes.bool,
  indicator: PropTypes.bool,
  border: PropTypes.bool,
  children: PropTypes.node,
  container: PropTypes.bool,
};

export default SuiBadge;
