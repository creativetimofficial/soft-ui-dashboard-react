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
import Button from "@mui/material/Button";

// Custom styles for SuiButton
import styles from "components/SuiButton/styles";

const SuiButton = forwardRef(
  ({ buttonColor, variant, size, circular, iconOnly, children, customClass, ...rest }, ref) => {
    const classes = styles({ buttonColor, variant, size, iconOnly });
    return (
      <Button
        {...rest}
        ref={ref}
        color="primary"
        variant={variant === "gradient" ? "contained" : variant}
        size={size}
        className={clsx(classes[variant], customClass, {
          [classes.circular]: circular,
          [classes.iconOnly]: iconOnly,
        })}
      >
        {children}
      </Button>
    );
  }
);

// Setting default values for the props of SuiButton
SuiButton.defaultProps = {
  size: "medium",
  variant: "contained",
  buttonColor: "white",
  circular: false,
  iconOnly: false,
  customClass: "",
};

// Typechecking props for the SuiButton
SuiButton.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  variant: PropTypes.oneOf(["text", "contained", "outlined", "gradient"]),
  buttonColor: PropTypes.oneOf([
    "white",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  circular: PropTypes.bool,
  iconOnly: PropTypes.bool,
  children: PropTypes.node.isRequired,
  customClass: PropTypes.string,
};

export default SuiButton;
