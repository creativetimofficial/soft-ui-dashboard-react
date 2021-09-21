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

// @mui material components
import { makeStyles } from "@mui/styles";

export default makeStyles(({ palette, typography, functions, borders }) => {
  const { gradients, transparent, white, dark } = palette;
  const { size, fontWeightMedium } = typography;
  const { linearGradient, pxToRem } = functions;
  const { borderWidth, borderColor } = borders;

  return {
    timelineItem: {
      position: "relative",

      "&:after": {
        content: "''",
        position: "absolute",
        top: "10%",
        left: "14px",
        height: ({ lastItem }) => (lastItem ? "90%" : "100%"),
        borderRight: `${borderWidth[2]} solid ${borderColor}`,
      },
    },

    timelineItem_iconBox: {
      width: pxToRem(26),
      height: pxToRem(26),
      borderRadius: "50%",
      backgroundColor: ({ isDark }) => (isDark ? dark.main : white.main),
      position: "absolute",
      top: "3.25%",
      left: "2px",
      zIndex: 2,
    },

    timelineItem_icon: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-52%, -50%)",
      fontSize: size.xl,
      fontWeight: fontWeightMedium,
      zIndex: 1,
      backgroundImage: ({ color }) => linearGradient(gradients[color].main, gradients[color].state),
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: transparent.main,
    },
  };
});
