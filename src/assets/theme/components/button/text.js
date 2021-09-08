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

// Soft UI Dashboard Material-UI Base Styles
import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";

// Soft UI Dashboard Material-UI Helper Functions
import pxToRem from "assets/theme/functions/pxToRem";

const { transparent, info, secondary, grey } = colors;
const { size } = typography;

export default {
  base: {
    backgroundColor: transparent.main,
    height: "max-content",
    color: info.main,
    boxShadow: "none",
    padding: `${pxToRem(6)} ${pxToRem(12)}`,

    "&:hover": {
      backgroundColor: transparent.main,
      boxShadow: "none",
      color: info.focus,
    },

    "&:focus": {
      boxShadow: "none",
      color: info.focus,
    },

    "&:active, &:active:focus, &:active:hover": {
      opacity: 0.85,
      boxShadow: "none",
    },

    "&:disabled": {
      color: grey[600],
      boxShadow: "none",
    },
  },

  small: {
    fontSize: size.xs,

    "& .material-icons, span": {
      fontSize: pxToRem(12),
    },
  },

  large: {
    fontSize: size.sm,

    "& .material-icons, span": {
      fontSize: pxToRem(22),
    },
  },

  primary: {
    color: info.main,
    backgroundColor: transparent.main,

    "&:hover": {
      color: info.focus,
      backgroundColor: transparent.main,
    },

    "&:focus:not(:hover)": {
      color: info.focus,
      backgroundColor: transparent.focus,
      boxShadow: "none",
    },
  },

  secondary: {
    color: secondary.focus,
    backgroundColor: transparent.main,

    "&:hover": {
      color: secondary.focus,
      backgroundColor: transparent.main,
    },

    "&:focus:not(:hover)": {
      color: secondary.focus,
      backgroundColor: transparent.focus,
      boxShadow: "none",
    },
  },
};
