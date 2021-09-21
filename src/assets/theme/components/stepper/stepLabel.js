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

// Soft UI Dashboard PRO React base styles
import typography from "assets/theme/base/typography";
import colors from "assets/theme/base/colors";

// Soft UI Dashboard PRO React helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const { size, fontWeightRegular } = typography;
const { grey, dark, secondary } = colors;

export default {
  styleOverrides: {
    label: {
      marginTop: `${pxToRem(8)} !important`,
      fontWeight: fontWeightRegular,
      fontSize: size.regular,
      color: grey[300],

      "&.Mui-active": {
        fontWeight: `${fontWeightRegular} !important`,
        color: `${dark.main} !important`,
      },

      "&.Mui-completed": {
        fontWeight: `${fontWeightRegular} !important`,
        color: `${secondary.main} !important`,
      },
    },
  },
};
