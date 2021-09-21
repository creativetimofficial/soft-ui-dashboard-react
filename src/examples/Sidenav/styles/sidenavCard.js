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
import BackgroundImage from "assets/images/curved-images/white-curved.jpeg";

export default makeStyles(
  ({ palette, boxShadows, borders, functions, transitions, breakpoints }) => {
    const { white, dark, gradients, transparent } = palette;
    const { regular } = boxShadows;
    const { borderRadius } = borders;
    const { pxToRem, linearGradient } = functions;

    return {
      card: {
        minWidth: "auto",
        backgroundImage: `url(${BackgroundImage})`,
        backgroundPosition: "50%",
        backgroundSize: "cover",
        borderRadius: borderRadius.xl,
        boxShadow: "none",

        [breakpoints.up("xl")]: {
          maxHeight: ({ miniSidenav }) => (miniSidenav ? pxToRem(64) : pxToRem(192)),
          transition: transitions.create("max-height", {
            easing: transitions.easing.easeInOut,
            duration: transitions.duration.standard,
          }),
        },
      },

      card_content: {
        color: white.main,
        position: "relative",
        zIndex: 2,
        padding: pxToRem(16),
        width: "100%",
        height: "100%",

        "&::after": {
          content: '""',
          backgroundImage: ({ sidenavColor }) =>
            sidenavColor === "default"
              ? linearGradient(gradients.secondary.main, gradients.secondary.state)
              : linearGradient(gradients[sidenavColor].main, gradients[sidenavColor].state),
          display: "block",
          height: "100%",
          width: "100%",
          borderRadius: borderRadius.xl,
          position: "absolute",
          top: 0,
          left: 0,
          opacity: 0.65,
          zIndex: -1,
        },

        "& .MuiButton-root": {
          color: dark.main,
        },

        "&:last-child": {
          paddingBottom: pxToRem(16),
        },
      },

      card_iconBox: {
        background: white.main,
        width: pxToRem(32),
        height: pxToRem(32),
        borderRadius: borderRadius.md,
        marginBottom: pxToRem(16),
        display: "grid",
        placeItems: "center",
        boxShadow: regular,
        transition: transitions.create("margin", {
          easing: transitions.easing.easeInOut,
          duration: transitions.duration.standard,
        }),
      },

      card_icon: {
        backgroundImage: ({ sidenavColor }) =>
          sidenavColor === "default"
            ? linearGradient(gradients.dark, gradients.dark.state)
            : linearGradient(gradients[sidenavColor].main, gradients[sidenavColor].state),
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: transparent.main,
      },
    };
  }
);
