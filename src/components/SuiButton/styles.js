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

export default makeStyles(({ palette, functions }) => {
  const { white, black, text, transparent, gradients } = palette;
  const { boxShadow, linearGradient, pxToRem, rgba } = functions;

  return {
    contained: {
      backgroundColor: ({ buttonColor }) => palette[buttonColor].main,
      color: ({ buttonColor }) => {
        let color;

        if (buttonColor === "white") {
          color = text.main;
        } else if (buttonColor === "light") {
          color = gradients.dark.state;
        } else {
          color = white.main;
        }

        return color;
      },

      "&:hover": {
        backgroundColor: ({ buttonColor }) => palette[buttonColor].main,
      },

      "&:focus:not(:hover)": {
        backgroundColor: ({ buttonColor }) => palette[buttonColor].focus,
        boxShadow: ({ buttonColor }) => boxShadow([0, 0], [0, 3.2], palette[buttonColor].main, 0.5),
      },

      "&:disabled": {
        backgroundColor: ({ buttonColor }) =>
          buttonColor === "default" ? white.main : palette[buttonColor].main,
        color: ({ buttonColor }) => {
          let textColor = black.main;

          if (buttonColor === "default") {
            textColor = text.main;
          } else if (
            buttonColor === "primary" ||
            buttonColor === "error" ||
            buttonColor === "dark"
          ) {
            textColor = white.main;
          }

          return textColor;
        },
      },
    },

    outlined: {
      backgroundColor: ({ buttonColor }) =>
        buttonColor === "white" ? rgba(white.main, 0.1) : transparent.main,
      color: ({ buttonColor }) => palette[buttonColor].main,
      borderColor: ({ buttonColor }) =>
        buttonColor === "white" ? rgba(white.main, 0.75) : palette[buttonColor].main,

      "&:hover": {
        backgroundColor: transparent.main,
        borderColor: ({ buttonColor }) => palette[buttonColor].main,
      },

      "&:focus:not(:hover)": {
        backgroundColor: ({ buttonColor }) =>
          buttonColor === "white" ? rgba(white.main, 0.1) : transparent.main,
        boxShadow: ({ buttonColor }) => boxShadow([0, 0], [0, 3.2], palette[buttonColor].main, 0.5),
      },

      "&:active:not(:hover)": {
        backgroundColor: ({ buttonColor }) => palette[buttonColor].main,
        color: white.main,
        opacity: 0.85,
      },

      "&:disabled": {
        color: ({ buttonColor }) => palette[buttonColor].main,
        borderColor: ({ buttonColor }) => palette[buttonColor].main,
      },
    },

    gradient: {
      background: ({ buttonColor }) => {
        let background;

        if (buttonColor === "white") {
          background = white.main;
        } else {
          background = linearGradient(gradients[buttonColor].main, gradients[buttonColor].state);
        }

        return background;
      },
      color: ({ buttonColor }) => {
        let color;

        if (buttonColor === "white") {
          color = text.main;
        } else if (buttonColor === "light") {
          color = gradients.dark.state;
        } else {
          color = white.main;
        }

        return color;
      },

      "&:focus:not(:hover)": {
        boxShadow: "none",
      },

      "&:disabled": {
        background: ({ buttonColor }) => {
          let background;

          if (buttonColor === "white") {
            background = white.main;
          } else {
            background = linearGradient(gradients[buttonColor].main, gradients[buttonColor].state);
          }

          return background;
        },
        color: ({ buttonColor }) => {
          let color;

          if (buttonColor === "white") {
            color = text.main;
          } else if (buttonColor === "light") {
            color = gradients.dark.state;
          } else {
            color = white.main;
          }

          return color;
        },
      },
    },

    text: {
      color: ({ buttonColor }) => palette[buttonColor].main,

      "&:hover": {
        color: ({ buttonColor }) => palette[buttonColor].focus,
      },

      "&:focus:not(:hover)": {
        color: ({ buttonColor }) => palette[buttonColor].focus,
      },
    },

    circular: {
      borderRadius: pxToRem(160),
    },

    iconOnly: {
      minWidth: ({ size }) => {
        let minWidth;

        if (size === "small") {
          minWidth = pxToRem(25.4);
        } else if (size === "large") {
          minWidth = pxToRem(52);
        } else {
          minWidth = pxToRem(38);
        }

        return minWidth;
      },

      width: ({ size }) => {
        let width;

        if (size === "small") {
          width = pxToRem(25.4);
        } else if (size === "large") {
          width = pxToRem(52);
        } else {
          width = pxToRem(38);
        }

        return width;
      },

      minHeight: ({ size }) => {
        let minHeight;

        if (size === "small") {
          minHeight = pxToRem(25.4);
        } else if (size === "large") {
          minHeight = pxToRem(52);
        } else {
          minHeight = pxToRem(38);
        }

        return minHeight;
      },

      height: ({ size }) => {
        let height;

        if (size === "small") {
          height = pxToRem(25.4);
        } else if (size === "large") {
          height = pxToRem(52);
        } else {
          height = pxToRem(38);
        }

        return height;
      },

      padding: ({ size }) => {
        let padding;

        if (size === "small") {
          padding = pxToRem(4.5);
        } else if (size === "large") {
          padding = pxToRem(16);
        } else {
          padding = `${pxToRem(11)} ${pxToRem(11)} ${pxToRem(10)}`;
        }

        return padding;
      },

      "& .material-icons": {
        marginTop: 0,
      },

      "&:hover, &:focus, &:active": {
        transform: "none",
      },
    },
  };
});
