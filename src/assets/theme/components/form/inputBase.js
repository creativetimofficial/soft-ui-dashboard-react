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
import borders from "assets/theme/base/borders";

// Soft UI Dashboard PRO helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const { dark, white, grey, inputColors } = colors;
const { size, fontWeightRegular } = typography;
const { borderWidth, borderRadius } = borders;

export default {
  root: {
    display: "grid",
    placeItems: "center",
    width: "100%",
    height: "auto",
    padding: `${pxToRem(8)} ${pxToRem(12)}`,
    fontSize: size.sm,
    fontWeight: fontWeightRegular,
    lineHeight: 1.4,
    color: grey[700],
    backgroundColor: white.main,
    backgroundClip: "padding-box",
    border: `${borderWidth[1]} solid ${inputColors.borderColor.main}`,
    appearance: "none",
    borderRadius: borderRadius.md,
    transition: "box-shadow 150ms ease, border-color 150ms ease, padding 150ms ease",
  },

  input: {
    width: "100%",
    height: pxToRem(22),
    padding: 0,

    "&::-webkit-input-placeholder": {
      color: dark.main,
    },
  },
};
