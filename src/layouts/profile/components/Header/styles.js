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

// @mui material components
import { makeStyles } from "@mui/styles";

// Images
import curved0 from "assets/images/curved-images/curved0.jpg";

export default makeStyles(({ palette, functions, borders, boxShadows }) => {
  const { gradients, white } = palette;
  const { linearGradient, rgba, pxToRem } = functions;
  const { borderRadius } = borders;
  const { navbarBoxShadow } = boxShadows;

  return {
    profileHeader_background: {
      backgroundImage: `${linearGradient(
        rgba(gradients.info.main, 0.6),
        rgba(gradients.info.state, 0.6)
      )}, url(${curved0})`,
      backgroundSize: "cover",
      backgroundPosition: "50%",
      display: "flex",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
      minHeight: pxToRem(300),
      borderRadius: borderRadius.xl,
    },

    profileHeader_profile: {
      backdropFilter: `saturate(200%) blur(${pxToRem(30)})`,
      backgroundColor: rgba(white.main, 0.8),
      boxShadow: navbarBoxShadow,
      margin: `${pxToRem(-64)} ${pxToRem(24)} 0`,
      padding: pxToRem(16),
      position: "relative",
    },
  };
});
