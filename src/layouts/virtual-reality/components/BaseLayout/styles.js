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
import vrBg from "assets/images/vr-bg.jpg";

export default makeStyles(({ functions, borders, breakpoints }) => {
  const { pxToRem } = functions;
  const { borderRadius } = borders;

  return {
    baseLayout: {
      width: "100vw",
      height: "100vh",
      overflow: "hidden",

      [breakpoints.down("lg")]: {
        "& .MuiDrawer-paper.makeStyles-sidenav_close-9": {
          transform: `translateX(${pxToRem(-640)})`,
        },
        "& .MuiDrawer-paper.makeStyles-sidenav_open-8": {
          transform: `translateX(${pxToRem(-280)})`,
        },
      },

      [breakpoints.down("md")]: {
        overflow: "auto",

        "& .MuiDrawer-paper.makeStyles-sidenav_close-9": {
          transform: `translateX(${pxToRem(-320)})`,
        },
        "& .MuiDrawer-paper.makeStyles-sidenav_open-8": {
          transform: `translateX(${pxToRem(0)})`,
        },
      },

      [breakpoints.down("sm")]: {
        height: "auto",
      },
    },

    baseLayout_background: {
      width: "calc(100% - 2rem)",
      height: "calc(100% - 11rem)",
      backgroundImage: `url(${vrBg})`,
      backgroundSize: "cover",
      margin: pxToRem(16),
      borderRadius: borderRadius.xl,
      position: "relative",
      overflow: "auto",

      [breakpoints.down("sm")]: {
        overflow: "hidden",
      },
    },

    baseLayout_content: {
      width: "100%",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%) scale(0.6)",

      [breakpoints.down("sm")]: {
        position: "static",
        transform: "translate(0) scale(1)",
      },
    },
  };
});
