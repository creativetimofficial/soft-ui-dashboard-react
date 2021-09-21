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
import InputBase from "@mui/material/InputBase";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";

// Custom styles for SuiInput
import styles from "components/SuiInput/styles";

// Soft UI Dashboard PRO React contexts
import { useSoftUIController } from "context";

const SuiInput = forwardRef(
  ({ size, withIcon, error, success, customClass, disabled, ...rest }, ref) => {
    let template;
    const [controller] = useSoftUIController();
    const { direction } = controller;
    const classes = styles({ size, error, success, withIcon, direction, disabled });

    if (withIcon.icon && withIcon.direction === "left") {
      template = (
        <SuiBox ref={ref} customClass={clsx(classes.suiInputIcon, customClass)}>
          <SuiBox customClass={classes.suiInputIcon_right}>
            <Icon className={classes.suiInputIcon_icon} fontSize="small">
              {withIcon.icon}
            </Icon>
          </SuiBox>
          <InputBase
            {...rest}
            className={clsx(classes.suiInput, classes.suiInputIcon_input, {
              [classes.suiInput_error]: error,
              [classes.suiInput_success]: success,
              [classes[`suiInput_${size}`]]: size,
            })}
            classes={{
              focused: classes.suiInput_focused,
              disabled: classes.suiInput_disabled,
              error: classes.suiInput_error,
              multiline: classes.suiInput_multiline,
            }}
          />
        </SuiBox>
      );
    } else if (withIcon.icon && withIcon.direction === "right") {
      template = (
        <SuiBox customClass={clsx(classes.suiInputIcon, customClass)}>
          <InputBase
            {...rest}
            className={clsx(classes.suiInput, classes.suiInputIcon_input, {
              [classes.suiInput_error]: error,
              [classes.suiInput_success]: success,
              [classes[`suiInput_${size}`]]: size,
            })}
            classes={{
              focused: classes.suiInput_focused,
              disabled: classes.suiInput_disabled,
              error: classes.suiInput_error,
              multiline: classes.suiInput_multiline,
            }}
          />
          <SuiBox customClass={classes.suiInputIcon_right}>
            <Icon className={classes.suiInputIcon_icon} fontSize="small">
              {withIcon.icon}
            </Icon>
          </SuiBox>
        </SuiBox>
      );
    } else {
      template = (
        <InputBase
          {...rest}
          className={clsx(classes.suiInput, customClass, {
            [classes.suiInput_error]: error,
            [classes.suiInput_success]: success,
            [classes[`suiInput_${size}`]]: size,
          })}
          classes={{
            focused: classes.suiInput_focused,
            disabled: classes.suiInput_disabled,
            error: classes.suiInput_error,
            multiline: classes.suiInput_multiline,
          }}
        />
      );
    }

    return template;
  }
);

// Setting default values for the props of SuiInput
SuiInput.defaultProps = {
  size: "medium",
  withIcon: {
    icon: false,
    direction: "none",
  },
  error: false,
  success: false,
  customClass: "",
  disabled: false,
};

// Typechecking props for the SuiInput
SuiInput.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  withIcon: PropTypes.shape({
    icon: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
    direction: PropTypes.oneOf(["none", "left", "right"]),
  }),
  error: PropTypes.bool,
  success: PropTypes.bool,
  customClass: PropTypes.string,
  disabled: PropTypes.bool,
};

export default SuiInput;
