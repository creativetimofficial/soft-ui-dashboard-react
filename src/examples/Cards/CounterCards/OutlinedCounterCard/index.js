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

// react-countup components
import CountUp from "react-countup";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Soft UI Dashboard React base styles
import colors from "assets/theme/base/colors";
import borders from "assets/theme/base/borders";

function OutlinedCounterCard({ color, count, title, prefix, suffix }) {
  const { secondary } = colors;
  const { borderWidth } = borders;

  return (
    <SuiBox
      borderRadius="md"
      border={`${borderWidth[1]} dashed ${secondary.main}`}
      textAlign="center"
      py={2}
    >
      <SuiTypography variant="h6" color={color} fontWeight="medium" textTransform="capitalize">
        {title}
      </SuiTypography>
      <SuiTypography variant="h4" fontWeight="bold">
        {prefix && (
          <SuiTypography component="span" variant="h5" fontWeight="bold">
            {prefix}
          </SuiTypography>
        )}
        <SuiBox display="inline-block" mx={0.5}>
          <CountUp end={count} duration={1} separator="," />
        </SuiBox>
        {suffix && (
          <SuiTypography component="span" variant="h5" fontWeight="bold">
            {suffix}
          </SuiTypography>
        )}
      </SuiTypography>
    </SuiBox>
  );
}

// Setting default values for the props of OutlinedCounterCard
OutlinedCounterCard.defaultProps = {
  color: "info",
  prefix: "",
  suffix: "",
};

// Typechecking props for the BlogCard
OutlinedCounterCard.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  prefix: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  suffix: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default OutlinedCounterCard;
