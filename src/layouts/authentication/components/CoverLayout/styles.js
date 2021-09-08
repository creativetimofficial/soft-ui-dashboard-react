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

// @material-ui core components
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(({ functions, borders }) => {
  const { pxToRem } = functions;
  const { borderRadius } = borders;

  return {
    coverLayout: {
      minHeight: "75vh",
      margin: 0,
    },

    coverLayout_imageBox: {
      transform: "skewX(-10deg)",
      height: "100%",
      overflow: "hidden",
      marginRight: pxToRem(-128),
      borderBottomLeftRadius: borderRadius.lg,
    },

    coverLayout_image: {
      backgroundImage: ({ image }) => `url(${image})`,
      backgroundSize: "cover",
      transform: "skewX(10deg)",
      marginLeft: pxToRem(-64),
      height: "100%",
    },
  };
});
