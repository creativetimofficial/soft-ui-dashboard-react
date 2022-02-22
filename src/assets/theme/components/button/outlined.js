/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Soft UI Dashboard React Base Styles
import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";
import boxShadows from "assets/theme/base/boxShadows";

// Soft UI Dashboard React Helper Functions
import pxToRem from "assets/theme/functions/pxToRem";

const { transparent, light, info, secondary } = colors;
const { size } = typography;
const { buttonBoxShadow } = boxShadows;

const outlined = {
  base: {
    minHeight: pxToRem(42),
    color: light.main,
    borderColor: light.main,
    padding: `${pxToRem(12)} ${pxToRem(24)}`,

    "&:hover": {
      opacity: 0.75,
      backgroundColor: transparent.main,
    },

    "&:focus:not(:hover)": {
      boxShadow: buttonBoxShadow.stateOfNotHover,
    },

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(16)} !important`,
    },
  },

  small: {
    minHeight: pxToRem(34),
    padding: `${pxToRem(8)} ${pxToRem(32)}`,
    fontSize: size.xs,

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(12)} !important`,
    },
  },

  large: {
    minHeight: pxToRem(49),
    padding: `${pxToRem(14)} ${pxToRem(64)}`,
    fontSize: size.sm,

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(22)} !important`,
    },
  },

  primary: {
    backgroundColor: transparent.main,
    borderColor: info.main,

    "&:hover": {
      backgroundColor: transparent.main,
    },

    "&:focus:not(:hover)": {
      boxShadow: buttonBoxShadow.stateOfNotHover,
    },
  },

  secondary: {
    backgroundColor: transparent.main,
    borderColor: secondary.main,

    "&:hover": {
      backgroundColor: transparent.main,
    },

    "&:focus:not(:hover)": {
      boxShadow: buttonBoxShadow.stateOfNotHover,
    },
  },
};

export default outlined;
