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
import boxShadows from "assets/theme/base/boxShadows";

// Soft UI Dashboard Material-UI Helper Functions
import pxToRem from "assets/theme/functions/pxToRem";

const { white, text, info, secondary } = colors;
const { size } = typography;
const { buttonBoxShadow } = boxShadows;

export default {
  base: {
    backgroundColor: white.main,
    minHeight: pxToRem(40),
    color: text.main,
    boxShadow: buttonBoxShadow.main,
    padding: `${pxToRem(12)} ${pxToRem(24)}`,

    "&:hover": {
      backgroundColor: white.main,
      boxShadow: buttonBoxShadow.stateOf,
    },

    "&:focus": {
      boxShadow: buttonBoxShadow.stateOf,
    },

    "&:active, &:active:focus, &:active:hover": {
      opacity: 0.85,
      boxShadow: buttonBoxShadow.stateOf,
    },

    "&:disabled": {
      boxShadow: buttonBoxShadow.main,
    },
  },

  small: {
    minHeight: pxToRem(32),
    padding: `${pxToRem(8)} ${pxToRem(32)}`,
    fontSize: size.xs,

    "& .material-icons": {
      fontSize: pxToRem(12),
    },
  },

  large: {
    minHeight: pxToRem(47),
    padding: `${pxToRem(14)} ${pxToRem(64)}`,
    fontSize: size.sm,

    "& .material-icons": {
      fontSize: pxToRem(22),
    },
  },

  primary: {
    backgroundColor: info.main,

    "&:hover": {
      backgroundColor: info.main,
    },

    "&:focus:not(:hover)": {
      backgroundColor: info.focus,
      boxShadow: buttonBoxShadow.stateOfNotHover,
    },
  },

  secondary: {
    backgroundColor: secondary.main,

    "&:hover": {
      backgroundColor: secondary.main,
    },

    "&:focus:not(:hover)": {
      backgroundColor: secondary.focus,
      boxShadow: buttonBoxShadow.stateOfNotHover,
    },
  },
};
