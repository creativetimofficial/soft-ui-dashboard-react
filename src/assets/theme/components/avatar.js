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

const { borderRadius } = borders;

export default {
  root: {
    transition: "all 200ms ease-in-out",
  },

  rounded: {
    borderRadius: borderRadius.lg,
  },

  img: {
    height: "auto",
  },
};
