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
import borders from "assets/theme/base/borders";
import colors from "assets/theme/base/colors";

// Soft UI Dashboard Material-UI helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const { size, fontWeightRegular } = typography;
const { borderRadius } = borders;
const { dark } = colors;

export default {
  root: {
    flex: "1 1 auto",
    textAlign: "center",
    maxWidth: "unset !important",
    minWidth: "unset !important",
    minHeight: "unset !important",
    fontSize: size.regular,
    fontWeight: fontWeightRegular,
    textTransform: "none",
    lineHeight: "inherit",
    padding: pxToRem(4),
    borderRadius: borderRadius.md,
    color: `${dark.main} !important`,
    opacity: "1 !important",
  },

  wrapper: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",

    "& .material-icons": {
      marginBottom: "0 !important",
      marginRight: pxToRem(4),
    },

    "& svg": {
      marginBottom: "0 !important",
      marginRight: pxToRem(6),
    },
  },

  labelIcon: {
    paddingTop: pxToRem(4),
  },
};
