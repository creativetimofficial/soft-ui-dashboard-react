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
import borders from "assets/theme/base/borders";

// Soft UI Dashboard Material-UI helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const { borderRadius } = borders;

export default {
  root: {
    display: "block",
    padding: `${pxToRem(16)} ${pxToRem(16)} 0  ${pxToRem(16)}`,
    borderRadius: `${borderRadius.xl} ${borderRadius.xl} 0 0`,
  },
};
