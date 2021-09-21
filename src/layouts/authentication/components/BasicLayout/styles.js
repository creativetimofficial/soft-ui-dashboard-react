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

export default makeStyles(({ palette, functions, borders }) => {
  const { gradients } = palette;
  const { linearGradient, rgba, pxToRem } = functions;
  const { borderRadius } = borders;

  return {
    basicLayout: {
      backgroundImage: ({ image }) =>
        image &&
        `${linearGradient(
          rgba(gradients.dark.main, 0.6),
          rgba(gradients.dark.state, 0.6)
        )}, url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      width: "calc(100% - 2rem)",
      minHeight: "50vh",
      margin: pxToRem(16),
      padding: `${pxToRem(48)} 0 ${pxToRem(224)}`,
      borderRadius: borderRadius.lg,
    },
  };
});
