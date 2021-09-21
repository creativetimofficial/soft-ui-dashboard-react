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

// react-router components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import MuiLink from "@mui/material/Link";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiAvatar from "components/SuiAvatar";

function DefaultBlogCard({ image, category, title, description, author, action }) {
  return (
    <Card>
      <SuiBox mt={2} mx={2}>
        {action.type === "internal" ? (
          <Link to={action.route}>
            <SuiBox component="img" src={image} alt={title} width="100%" borderRadius="lg" />
          </Link>
        ) : (
          <MuiLink href={action.route} target="_blank" rel="noreferrer">
            <SuiBox component="img" src={image} alt={title} width="100%" borderRadius="lg" />
          </MuiLink>
        )}
      </SuiBox>
      <SuiBox pb={3} px={3}>
        {category && (
          <SuiTypography
            variant="caption"
            textColor={category.color}
            textTransform="uppercase"
            fontWeight="medium"
            textGradient
          >
            {category.label}
          </SuiTypography>
        )}
        <SuiBox display="block" mt={0.5} mb={1}>
          {action.type === "internal" ? (
            <Link to={action.route}>
              <SuiTypography
                display="inline"
                variant="h5"
                textTransform="capitalize"
                customClass="link"
              >
                {title}
              </SuiTypography>
            </Link>
          ) : (
            <MuiLink href={action.route} target="_blank" rel="noreferrer">
              <SuiTypography
                display="inline"
                variant="h5"
                textTransform="capitalize"
                customClass="link"
              >
                {title}
              </SuiTypography>
            </MuiLink>
          )}
        </SuiBox>
        <SuiTypography variant="body2" component="p" textColor="text">
          {description}
        </SuiTypography>
        {author && (
          <SuiBox display="flex" alignItems="center" mt={3}>
            <SuiAvatar variant="rounded" src={author.image} alt={author.name} boxShadow="regular" />
            <SuiBox pl={2} lineHeight={0}>
              <SuiTypography component="h6" variant="button" fontWeight="medium" gutterBottom>
                {author.name}
              </SuiTypography>
              <SuiTypography variant="caption" textColor="text">
                {author.date}
              </SuiTypography>
            </SuiBox>
          </SuiBox>
        )}
      </SuiBox>
    </Card>
  );
}

// Setting default props for the DefaultBlogCard
DefaultBlogCard.defaultProps = {
  category: false,
  author: false,
};

// Typechecking props for the DefaultBlogCard
DefaultBlogCard.propTypes = {
  image: PropTypes.string.isRequired,
  category: PropTypes.oneOfType([
    PropTypes.shape({
      color: PropTypes.oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "dark",
      ]).isRequired,
      label: PropTypes.string.isRequired,
    }),
    PropTypes.bool,
  ]),
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.oneOfType([
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      date: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
    }),
    PropTypes.bool,
  ]),
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
  }).isRequired,
};

export default DefaultBlogCard;
