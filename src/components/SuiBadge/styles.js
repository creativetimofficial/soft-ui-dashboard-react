/**
=========================================================
* Soft UI Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import { makeStyles } from "@mui/styles";

export default makeStyles(({ palette, typography, borders, functions }) => {
  const { white, gradients, badgeColors } = palette;
  const { size: fontSize, fontWeightBold } = typography;
  const { borderRadius, borderWidth } = borders;
  const { pxToRem, linearGradient } = functions;

  return {
    badge: {
      "& .MuiBadge-badge": {
        height: "auto",
        padding: ({ size }) => {
          let padding;

          if (size === "extra-small") {
            padding = "0.575em 0.775em 0.375em";
          } else if (size === "medium") {
            padding = "0.65em 1em";
          } else if (size === "large") {
            padding = "0.85em 1.375em";
          } else {
            padding = "0.55em 0.9em";
          }

          return padding;
        },
        fontSize: ({ size }) => (size === "extra-small" ? fontSize.xxs : fontSize.xs),
        fontWeight: fontWeightBold,
        textTransform: "uppercase",
        lineHeight: 1,
        textAlign: "center",
        whiteSpace: "nowrap",
        verticalAlign: "baseline",
        borderRadius: ({ size, circular }) => {
          let borderRadiusValue;

          if (circular) {
            borderRadiusValue = borderRadius.section;
          } else {
            borderRadiusValue = size === "extra-small" ? borderRadius.sm : borderRadius.md;
          }

          return borderRadiusValue;
        },
        border: ({ border }) => (border ? `${borderWidth[3]} solid ${white.main}` : "none"),
      },
    },

    badge_indicator: {
      "& .MuiBadge-badge": {
        width: ({ size }) => {
          let width;

          if (size === "medium") {
            width = pxToRem(24);
          } else if (size === "large") {
            width = pxToRem(32);
          } else {
            width = pxToRem(20);
          }

          return width;
        },
        height: ({ size }) => {
          let height;

          if (size === "medium") {
            height = pxToRem(24);
          } else if (size === "large") {
            height = pxToRem(32);
          } else {
            height = pxToRem(20);
          }

          return height;
        },
        display: "grid",
        placeItems: "center",
        textAlign: "center",
        borderRadius: "50%",
        padding: 0,
        border: ({ border }) => (border ? `${borderWidth[3]} solid ${white.main}` : "none"),
      },
    },

    gradient: {
      "& .MuiBadge-badge": {
        backgroundImage: ({ color }) =>
          linearGradient(gradients[color].main, gradients[color].state),
        color: white.main,
      },
    },

    contained: {
      "& .MuiBadge-badge": {
        background: ({ color }) => badgeColors[color].background,
        color: ({ color }) => badgeColors[color].text,
      },
    },

    badge_childNode: {
      "& .MuiBadge-badge": {
        position: "static",
        marginLeft: pxToRem(8),
        transform: "none",
        fontSize: pxToRem(9),
      },
    },

    badge_container: {
      "& .MuiBadge-badge": {
        position: "relative",
        transform: "none",
      },
    },
  };
});
