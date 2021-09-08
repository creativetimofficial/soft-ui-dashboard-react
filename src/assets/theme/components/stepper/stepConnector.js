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
import colors from "assets/theme/base/colors";

const { dark } = colors;
const { borderWidth, borderColor } = borders;

export default {
  root: {
    color: borderColor,
    transition: "all 200ms linear",
  },

  alternativeLabel: {
    top: "14%",
    left: "-50%",
    right: "50%",
  },

  line: {
    borderWidth: `${borderWidth[2]} !important`,
    borderColor: "currentColor",
  },

  active: {
    color: dark.main,
  },

  completed: {
    color: dark.main,
  },
};
