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
import rgba from "assets/theme/functions/rgba";
import pxToRem from "assets/theme/functions/pxToRem";

const { black, white, transparent } = colors;

export default {
  root: {
    backgroundColor: transparent.main,
    backgroundImage: `linear-gradient(to right, ${rgba(black.main, 0)}, ${rgba(
      black.main,
      0.4
    )}, ${rgba(black.main, 0)})`,
    margin: `${pxToRem(16)} 0`,
    opacity: 0.25,
  },

  vertical: {
    backgroundColor: transparent.main,
    backgroundImage: `linear-gradient(to bottom, ${rgba(black.main, 0)}, ${rgba(
      black.main,
      0.4
    )}, ${rgba(black.main, 0)})`,
    margin: `0 ${pxToRem(16)}`,
  },

  light: {
    backgroundColor: transparent.main,
    backgroundImage: `linear-gradient(to right, ${rgba(white.main, 0)}, ${rgba(
      white.main,
      1
    )}, ${rgba(white.main, 0)})`,

    "&.MuiDivider-vertical": {
      backgroundImage: `linear-gradient(to bottom, ${rgba(white.main, 0)}, ${rgba(
        white.main,
        1
      )}, ${rgba(white.main, 0)}) !important`,
    },
  },
};
