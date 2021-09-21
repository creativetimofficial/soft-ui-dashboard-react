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
import LinearProgress from "@mui/material/LinearProgress";

// Soft UI Dashboard PRO React components
import SuiTypography from "components/SuiTypography";

// Custom styles for SuiProgress
import styles from "components/SuiProgress/styles";

const SuiProgress = forwardRef(({ color, value, gradient, noLabel, ...rest }, ref) => {
  const classes = styles({ color, value });

  return (
    <>
      {!noLabel && (
        <SuiTypography variant="button" fontWeight="medium" textColor="text">
          {value}%
        </SuiTypography>
      )}
      <LinearProgress
        {...rest}
        ref={ref}
        variant="determinate"
        value={value}
        className={clsx(classes.progress, {
          [classes.progress_gradient]: gradient,
        })}
      />
    </>
  );
});

// Setting default values for the props of SuiProgress
SuiProgress.defaultProps = {
  color: "info",
  value: 0,
  gradient: false,
  noLabel: false,
};

// Typechecking props for the SuiProgress
SuiProgress.propTypes = {
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
  value: PropTypes.number,
  gradient: PropTypes.bool,
  noLabel: PropTypes.bool,
};

export default SuiProgress;
