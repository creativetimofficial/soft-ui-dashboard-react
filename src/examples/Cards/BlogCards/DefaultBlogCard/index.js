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

// react-router components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import MuiLink from "@mui/material/Link";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";

function DefaultBlogCard({ image, category, title, description, author, action }) {
  return (
    <Card>
      <SoftBox mt={2} mx={2}>
        {action.type === "internal" ? (
          <Link to={action.route}>
            <SoftBox component="img" src={image} alt={title} width="100%" borderRadius="lg" />
          </Link>
        ) : (
          <MuiLink href={action.route} target="_blank" rel="noreferrer">
            <SoftBox component="img" src={image} alt={title} width="100%" borderRadius="lg" />
          </MuiLink>
        )}
      </SoftBox>
      <SoftBox pb={3} px={3}>
        {category && (
          <SoftTypography
            variant="caption"
            color={category.color}
            textTransform="uppercase"
            fontWeight="medium"
            textGradient
          >
            {category.label}
          </SoftTypography>
        )}
        <SoftBox display="block" mt={0.5} mb={1}>
          {action.type === "internal" ? (
            <Link to={action.route}>
              <SoftTypography
                display="inline"
                variant="h5"
                textTransform="capitalize"
                className="color-background"
              >
                {title}
              </SoftTypography>
            </Link>
          ) : (
            <MuiLink href={action.route} target="_blank" rel="noreferrer">
              <SoftTypography
                display="inline"
                variant="h5"
                textTransform="capitalize"
                className="color-background"
              >
                {title}
              </SoftTypography>
            </MuiLink>
          )}
        </SoftBox>
        <SoftTypography variant="body2" component="p" color="text">
          {description}
        </SoftTypography>
        {author && (
          <SoftBox display="flex" alignItems="center" mt={3}>
            <SoftAvatar variant="rounded" src={author.image} alt={author.name} shadow="md" />
            <SoftBox pl={2} lineHeight={0}>
              <SoftTypography component="h6" variant="button" fontWeight="medium" gutterBottom>
                {author.name}
              </SoftTypography>
              <SoftTypography variant="caption" color="text">
                {author.date}
              </SoftTypography>
            </SoftBox>
          </SoftBox>
        )}
      </SoftBox>
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
