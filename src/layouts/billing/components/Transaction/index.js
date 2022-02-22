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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";

function Transaction({ color, icon, name, description, value }) {
  return (
    <SuiBox key={name} component="li" py={1} pr={2} mb={1}>
      <SuiBox display="flex" justifyContent="space-between" alignItems="center">
        <SuiBox display="flex" alignItems="center">
          <SuiBox mr={2}>
            <SuiButton variant="outlined" color={color} size="small" iconOnly circular>
              <Icon sx={{ fontWeight: "bold" }}>{icon}</Icon>
            </SuiButton>
          </SuiBox>
          <SuiBox display="flex" flexDirection="column">
            <SuiTypography variant="button" fontWeight="medium" gutterBottom>
              {name}
            </SuiTypography>
            <SuiTypography variant="caption" color="text">
              {description}
            </SuiTypography>
          </SuiBox>
        </SuiBox>
        <SuiTypography variant="button" color={color} fontWeight="medium" textGradient>
          {value}
        </SuiTypography>
      </SuiBox>
    </SuiBox>
  );
}

// Typechecking props of the Transaction
Transaction.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]).isRequired,
  icon: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Transaction;
