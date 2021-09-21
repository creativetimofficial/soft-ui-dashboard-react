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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiBadge from "components/SuiBadge";

// Custom styles for the TimelineItem
import styles from "examples/Timeline/TimelineItem/styles";

import { useTimeline } from "examples/Timeline/context";

function TimelineItem({ color, icon, title, dateTime, description, badges, lastItem }) {
  const isDark = useTimeline();
  const classes = styles({ color, lastItem, isDark });

  const renderBadges =
    badges.length > 0
      ? badges.map((badge, key) => {
          const badgeKey = `badge-${key}`;

          return (
            <SuiBox key={badgeKey} mr={key === badges.length - 1 ? 0 : 0.5}>
              <SuiBadge color={color} size="extra-small" badgeContent={badge} container />
            </SuiBox>
          );
        })
      : null;

  return (
    <SuiBox customClass={classes.timelineItem}>
      <SuiBox customClass={classes.timelineItem_iconBox}>
        <Icon className={classes.timelineItem_icon}>{icon}</Icon>
      </SuiBox>
      <SuiBox ml={5.75} pt={description ? 0.7 : 0.5} lineHeight={0} maxWidth="30rem">
        <SuiTypography variant="button" fontWeight="medium" textColor={isDark ? "white" : "dark"}>
          {title}
        </SuiTypography>
        <SuiBox mt={0.5}>
          <SuiTypography
            variant="caption"
            fontWeight="medium"
            textColor={isDark ? "secondary" : "text"}
          >
            {dateTime}
          </SuiTypography>
        </SuiBox>
        <SuiBox mt={2} mb={1.5}>
          {description ? (
            <SuiTypography variant="button" fontWeight="regular" textColor="text">
              {description}
            </SuiTypography>
          ) : null}
        </SuiBox>
        {badges.length > 0 ? (
          <SuiBox display="flex" pb={lastItem ? 1 : 2}>
            {renderBadges}
          </SuiBox>
        ) : null}
      </SuiBox>
    </SuiBox>
  );
}

// Setting default values for the props of TimelineItem
TimelineItem.defaultProps = {
  color: "info",
  badges: [],
  lastItem: false,
  description: "",
};

// Typechecking props for the TimelineItem
TimelineItem.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  dateTime: PropTypes.string.isRequired,
  description: PropTypes.string,
  badges: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  lastItem: PropTypes.bool,
};

export default TimelineItem;
