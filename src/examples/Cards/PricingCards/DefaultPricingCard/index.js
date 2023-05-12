/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

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
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftBadge from "components/SoftBadge";
import SoftButton from "components/SoftButton";

function DefaultPricingCard({ badge, price, specifications, action }) {
  const renderSpecifications = specifications.map(({ label, includes }) => (
    <SoftBox key={label} display="flex" alignItems="center" p={1}>
      <SoftBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="1.5rem"
        height="1.5rem"
        borderRadius="50%"
        shaodw="md"
        bgColor={includes ? "success" : "secondary"}
        variant="gradient"
        mr={2}
      >
        <SoftTypography variant="button" color="white" sx={{ lineHeight: 0 }}>
          <Icon sx={{ fontWeight: "bold" }}>{includes ? "done" : "remove"}</Icon>
        </SoftTypography>
      </SoftBox>
      <SoftTypography variant="body2" color="text">
        {label}
      </SoftTypography>
    </SoftBox>
  ));

  return (
    <Card>
      <SoftBox pt={3} pb={2} px={2} textAlign="center">
        <SoftBadge
          variant="contained"
          color={badge.color}
          size="sm"
          badgeContent={badge.label}
          circular
          container
        />
        <SoftBox my={1}>
          <SoftTypography variant="h1">
            <SoftTypography display="inline" component="small" variant="h2">
              {price.currency}
            </SoftTypography>
            {price.value}
          </SoftTypography>
        </SoftBox>
      </SoftBox>
      <SoftBox pb={3} px={3}>
        {renderSpecifications}
        {action.type === "internal" ? (
          <SoftBox mt={3}>
            <SoftButton
              component={Link}
              to={action.route}
              variant="gradient"
              color={action.color}
              fullWidth
            >
              {action.label}&nbsp;
              <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
            </SoftButton>
          </SoftBox>
        ) : (
          <SoftBox mt={3}>
            <SoftButton
              component="a"
              href={action.route}
              target="_blank"
              rel="noreferrer"
              variant="gradient"
              color={action.color}
              fullWidth
            >
              {action.label}&nbsp;
              <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
            </SoftButton>
          </SoftBox>
        )}
      </SoftBox>
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
