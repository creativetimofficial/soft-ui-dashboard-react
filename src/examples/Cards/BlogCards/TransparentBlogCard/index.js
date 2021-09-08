/**
=========================================================
* Soft UI Dashboard Material-UI - v1.0.0
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

// @material-ui core components
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Icon from "@material-ui/core/Icon";
import MuiLink from "@material-ui/core/Link";

// Soft UI Dashboard Material-UI components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Custom styles for the TransparentBlogCard
import styles from "examples/Cards/BlogCards/TransparentBlogCard/styles";

function TransparentBlogCard({ image, title, description, action }) {
  const classes = styles();

  return (
    <Card className={classes.card}>
      {action.type === "internal" ? (
        <Link to={action.route}>
          <CardMedia src={image} component="img" title={title} className={classes.card_image} />
        </Link>
      ) : (
        <MuiLink href={action.route} target="_blank" rel="noreferrer">
          <CardMedia src={image} component="img" title={title} className={classes.card_image} />
        </MuiLink>
      )}
      <SuiBox py={3}>
        {action.type === "internal" ? (
          <Link to={action.route} className={classes.card_action}>
            <SuiTypography variant="h5" gutterBottom>
              {title}
            </SuiTypography>
          </Link>
        ) : (
          <MuiLink
            href={action.route}
            target="_blank"
            rel="noreferrer"
            className={classes.card_action}
          >
            <SuiTypography variant="h5" gutterBottom>
              {title}
            </SuiTypography>
          </MuiLink>
        )}
        <SuiBox mb={2}>
          <SuiTypography variant="body2" component="p" textColor="text">
            {description}
          </SuiTypography>
        </SuiBox>
        {action.type === "internal" ? (
          <Link to={action.route} className={classes.card_action}>
            <SuiTypography
              variant="body2"
              textColor={action.color}
              textTransform="capitalize"
              component="span"
            >
              {action.label}
              <Icon className="material-icons-round font-bold">arrow_forward</Icon>
            </SuiTypography>
          </Link>
        ) : (
          <MuiLink
            href={action.route}
            target="_blank"
            rel="noreferrer"
            className={classes.card_action}
          >
            <SuiTypography
              variant="body2"
              textColor={action.color}
              textTransform="capitalize"
              component="span"
            >
              {action.label}
              <Icon className="material-icons-round font-bold">arrow_forward</Icon>
            </SuiTypography>
          </MuiLink>
        )}
      </SuiBox>
    </Card>
  );
}

// Typechecking props for the TransparentBlogCard
TransparentBlogCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]),
    route: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
      "inherit",
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "light",
      "dark",
      "text",
    ]).isRequired,
  }).isRequired,
};

export default TransparentBlogCard;
