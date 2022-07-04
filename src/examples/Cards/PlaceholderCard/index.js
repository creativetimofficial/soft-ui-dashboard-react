/**
=========================================================
* Soft UI Dashboard React - v4.0.0
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
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

function PlaceholderCard({ icon, title, hasBorder, outlined }) {
  return (
    <Card
      raised
      sx={({ borders: { borderWidth, borderColor } }) => ({
        height: "100%",
        backgroundColor: outlined && "transparent",
        boxShadow: outlined && "none",
        border: hasBorder || outlined ? `${borderWidth[1]} solid ${borderColor}` : "none",
      })}
    >
      <SoftBox
        display="flex"
        flexDirection="column"
        justifyContent="center"
        textAlign="center"
        height="100%"
        p={3}
      >
        <SoftBox color="secondary" mb={0.5}>
          <Icon fontSize="default" sx={{ fontWeight: "bold" }}>
            {icon}
          </Icon>
        </SoftBox>
        <SoftTypography variant={title.variant} color="secondary">
          {title.text}
        </SoftTypography>
      </SoftBox>
    </Card>
  );
}

// Setting default values for the props of PlaceholderCard
PlaceholderCard.defaultProps = {
  icon: "add",
  hasBorder: false,
  outlined: false,
};

// Typechecking props for the PlaceholderCard
PlaceholderCard.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.shape({
    variant: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  hasBorder: PropTypes.bool,
  outlined: PropTypes.bool,
};

export default PlaceholderCard;
