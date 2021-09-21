/**
=========================================================
* Soft UI Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import { makeStyles } from "@mui/styles";

// Images
import curved14 from "assets/images/curved-images/curved14.jpg";
import pxToRem from "assets/theme/functions/pxToRem";

export default makeStyles(({ functions, palette, boxShadows }) => {
  const { linearGradient, rgba } = functions;
  const { gradients } = palette;
  const { xl } = boxShadows;

  return {
    masterCard: {
      background: ({ color }) =>
        `${linearGradient(
          rgba(gradients[color].main, 0.8),
          rgba(gradients[color].state, 0.8)
        )}, url(${curved14})`,
      boxShadow: xl,
    },

    masterCard_number: {
      marginTop: pxToRem(24),
      marginBottom: pxToRem(40),
      paddingBottom: pxToRem(8),
    },
  };
});
