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

// react-router-dom components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiBadge from "components/SuiBadge";
import SuiButton from "components/SuiButton";

function DefaultPricingCard({ badge, price, specifications, action }) {
  const renderSpecifications = specifications.map(({ label, includes }) => (
    <SuiBox key={label} display="flex" alignItems="center" p={1}>
      <SuiBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="1.5rem"
        height="1.5rem"
        borderRadius="50%"
        boxShadow="regular"
        backgroundColor={includes ? "success" : "secondary"}
        backgroundGradient
        mr={2}
      >
        <SuiTypography variant="button" textColor="white" customClass="line-height-0">
          <Icon className="font-bold">{includes ? "done" : "remove"}</Icon>
        </SuiTypography>
      </SuiBox>
      <SuiTypography variant="body2" textColor="text">
        {label}
      </SuiTypography>
    </SuiBox>
  ));

  return (
    <Card>
      <SuiBox pt={3} pb={2} px={2} textAlign="center">
        <SuiBadge
          variant="contained"
          color={badge.color}
          badgeContent={badge.label}
          circular
          container
        />
        <SuiBox my={1}>
          <SuiTypography variant="h1">
            <SuiTypography display="inline" component="small" variant="h2">
              {price.currency}
            </SuiTypography>
            {price.value}
          </SuiTypography>
        </SuiBox>
      </SuiBox>
      <SuiBox pb={3} px={3}>
        {renderSpecifications}
        {action.type === "internal" ? (
          <SuiBox mt={3}>
            <SuiButton
              component={Link}
              to={action.route}
              variant="gradient"
              buttonColor={action.color}
              fullWidth
            >
              {action.label}&nbsp;
              <Icon className="font-bold">arrow_forward</Icon>
            </SuiButton>
          </SuiBox>
        ) : (
          <SuiBox mt={3}>
            <SuiButton
              component="a"
              href={action.route}
              target="_blank"
              rel="noreferrer"
              variant="gradient"
              buttonColor={action.color}
              fullWidth
            >
              {action.label}&nbsp;
              <Icon className="font-bold">arrow_forward</Icon>
            </SuiButton>
          </SuiBox>
        )}
      </SuiBox>
    </Card>
  );
}

// Typechecking props for the DefaultPricingCard
DefaultPricingCard.propTypes = {
  badge: PropTypes.shape({
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
    label: PropTypes.string.isRequired,
  }).isRequired,
  price: PropTypes.shape({
    currency: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  specifications: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
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
  }).isRequired,
};

export default DefaultPricingCard;
