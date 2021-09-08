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
import typography from "assets/theme/base/typography";
import colors from "assets/theme/base/colors";

// Soft UI Dashboard Material-UI helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const { size, fontWeightRegular } = typography;
const { grey, dark, secondary } = colors;

export default {
  label: {
    marginTop: `${pxToRem(8)} !important`,
    fontWeight: fontWeightRegular,
    fontSize: size.regular,
    color: grey[300],
  },

  active: {
    fontWeight: `${fontWeightRegular} !important`,
    color: `${dark.main} !important`,
  },

  completed: {
    fontWeight: `${fontWeightRegular} !important`,
    color: `${secondary.main} !important`,
  },
};
