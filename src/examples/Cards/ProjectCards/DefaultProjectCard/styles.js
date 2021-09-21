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

export default makeStyles(({ palette, boxShadows, functions, borders }) => {
  const { transparent, white } = palette;
  const { regular, xl } = boxShadows;
  const { pxToRem } = functions;
  const { borderRadius, borderWidth } = borders;

  return {
    projectCard: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: transparent.main,
      boxShadow: "none",
      overflow: "visible",
    },

    projectCard_imageContainer: {
      boxShadow: xl,
      width: "100.25%",
      borderRadius: borderRadius.xl,
      position: "relative",
    },

    projectCard_image: {
      maxWidth: "100%",
      margin: 0,
      boxShadow: regular,
      objectFit: "cover",
      objectPosition: "center",
    },

    projectCard_avatar: {
      border: `${borderWidth[2]} solid ${white.main}`,
      marginLeft: pxToRem(-12),
      cursor: "pointer",
      position: "relative",

      "&:hover, &:focus": {
        zIndex: "10",
      },
    },
  };
});
