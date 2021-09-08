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

// Soft UI Dashboard Material-UI base styles
import colors from "assets/theme/base/colors";

// Soft UI Dashboard Material-UI helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const { transparent } = colors;

export default {
  select: {
    display: "grid",
    alignItems: "center",
    padding: `0 ${pxToRem(12)} !important`,

    "&:focus": {
      backgroundColor: transparent.main,
    },
  },

  selectMenu: {
    background: "none",
    height: "none",
    minHeight: "none",
    overflow: "unset",
  },

  icon: {
    display: "none",
  },
};
