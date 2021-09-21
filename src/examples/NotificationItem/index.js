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

import { forwardRef } from "react";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import MenuItem from "@mui/material/MenuItem";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Custom styles for the NotificationItem
import styles from "examples/NotificationItem/styles";

const NotificationItem = forwardRef(({ color, image, title, date, ...rest }, ref) => {
  const classes = styles({ color });

  return (
    <MenuItem {...rest} ref={ref} className={classes.notificationItem}>
      <SuiBox customClass={classes.notificationItem_img}>{image}</SuiBox>
      <SuiBox>
        <SuiTypography variant="button" textTransform="capitalize" fontWeight="regular">
          <strong>{title[0]}</strong> {title[1]}
        </SuiTypography>
        <SuiTypography
          variant="caption"
          textColor="secondary"
          customClass={classes.notificationItem_date}
        >
          <SuiTypography variant="button" textColor="secondary">
            <Icon className={classes.notificationItem_icon}>watch_later</Icon>
          </SuiTypography>
          {date}
        </SuiTypography>
      </SuiBox>
    </MenuItem>
  );
});

// Setting default values for the props of NotificationItem
NotificationItem.defaultProps = {
  color: "dark",
};

// Typechecking props for the NotificationItem
NotificationItem.propTypes = {
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
  image: PropTypes.node.isRequired,
  title: PropTypes.arrayOf(PropTypes.string).isRequired,
  date: PropTypes.string.isRequired,
};

export default NotificationItem;
