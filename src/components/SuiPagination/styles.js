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

export default makeStyles(({ borders, functions, typography, palette }) => {
  const { borderColor } = borders;
  const { pxToRem } = functions;
  const { fontWeightRegular, size: fontSize } = typography;
  const { light } = palette;

  return {
    suiPagination: {
      borderColor,
      margin: `0 ${pxToRem(2)}`,
      pointerEvents: ({ active }) => (active ? "none" : "auto"),
      fontWeight: fontWeightRegular,
      fontSize: fontSize.sm,

      minWidth: ({ paginationSize }) => {
        let minWidth;

        if (paginationSize === "small") {
          minWidth = pxToRem(30);
        } else if (paginationSize === "large") {
          minWidth = pxToRem(46);
        } else {
          minWidth = pxToRem(36);
        }

        return minWidth;
      },

      width: ({ paginationSize }) => {
        let width;

        if (paginationSize === "small") {
          width = pxToRem(30);
        } else if (paginationSize === "large") {
          width = pxToRem(46);
        } else {
          width = pxToRem(36);
        }

        return width;
      },

      minHeight: ({ paginationSize }) => {
        let minHeight;

        if (paginationSize === "small") {
          minHeight = pxToRem(30);
        } else if (paginationSize === "large") {
          minHeight = pxToRem(46);
        } else {
          minHeight = pxToRem(36);
        }

        return minHeight;
      },

      height: ({ paginationSize }) => {
        let height;

        if (paginationSize === "small") {
          height = pxToRem(30);
        } else if (paginationSize === "large") {
          height = pxToRem(46);
        } else {
          height = pxToRem(36);
        }

        return height;
      },

      "&:hover, &:focus, &:active": {
        transform: "none",
        boxShadow: ({ variant }) =>
          variant !== "gradient" || (variant !== "contained" && "none !important"),
        opacity: "1 !important",
      },

      "&:hover": {
        backgroundColor: light.main,
      },
    },
  };
});
