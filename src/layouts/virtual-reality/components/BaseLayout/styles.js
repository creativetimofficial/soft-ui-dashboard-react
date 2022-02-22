/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Images
import vrBg from "assets/images/vr-bg.jpg";

function baseLayout({ functions, breakpoints }) {
  const { pxToRem } = functions;

  return {
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
  };
}

const baseLayoutBackground = ({ borders: { borderRadius }, breakpoints }) => ({
  width: "calc(100% - 2rem)",
  height: "calc(100% - 11rem)",
  backgroundImage: `url(${vrBg})`,
  backgroundSize: "cover",
  borderRadius: borderRadius.xl,
  position: "relative",
  overflow: "auto",
  my: 2,
  mx: 2,

  [breakpoints.down("sm")]: {
    overflow: "hidden",
  },
});

const baseLayoutContent = ({ breakpoints }) => ({
  width: "100%",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%) scale(0.6)",

  [breakpoints.down("sm")]: {
    position: "static",
    transform: "translate(0) scale(1)",
  },
});

export { baseLayout, baseLayoutBackground, baseLayoutContent };
