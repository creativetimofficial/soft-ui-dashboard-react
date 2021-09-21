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

export default makeStyles(({ palette, boxShadows, functions, typography, borders }) => {
  const { inputColors, grey, light, white, dark, transparent } = palette;
  const { inputBoxShadow } = boxShadows;
  const { pxToRem, boxShadow } = functions;
  const { size: fontSize, fontWeightBold } = typography;
  const { borderRadius, borderWidth } = borders;

  return {
    suiInput: {
      backgroundColor: ({ disabled }) => (disabled ? grey[200] : white.main),
    },

    suiInput_small: {
      fontSize: fontSize.xs,
      padding: `${pxToRem(4)} ${pxToRem(12)}`,
    },

    suiInput_large: {
      padding: pxToRem(12),
    },

    suiInput_focused: {
      borderColor: ({ error, success }) => {
        let borderColorValue;

        if (error) {
          borderColorValue = inputColors.error;
        } else if (success) {
          borderColorValue = inputColors.success;
        } else {
          borderColorValue = inputColors.borderColor.focus;
        }

        return borderColorValue;
      },
      paddingLeft: ({ direction, withIcon }) => {
        let paddingLeftValue;

        if (direction === "rtl" && withIcon.direction === "left") {
          paddingLeftValue = 0;
        } else if (direction === "rtl" && withIcon.direction === "right") {
          paddingLeftValue = `${pxToRem(12)} !important`;
        } else if (direction === "ltr" && withIcon.direction === "right") {
          paddingLeftValue = 0;
        } else if (direction === "ltr" && withIcon.direction === "left") {
          paddingLeftValue = `${pxToRem(12)} !important`;
        }

        return paddingLeftValue;
      },
      paddingRight: ({ direction, withIcon }) => {
        let paddingRightValue;

        if (direction === "rtl" && withIcon.direction === "left") {
          paddingRightValue = `${pxToRem(12)} !important`;
        } else if (direction === "rtl" && withIcon.direction === "right") {
          paddingRightValue = 0;
        } else if (direction === "ltr" && withIcon.direction === "right") {
          paddingRightValue = `${pxToRem(12)} !important`;
        } else if (direction === "ltr" && withIcon.direction === "left") {
          paddingRightValue = 0;
        }

        return paddingRightValue;
      },
      outline: 0,
      boxShadow: ({ error, success }) => {
        let boxShadowValue;
        if (error) {
          boxShadowValue = inputBoxShadow.error;
        } else if (success) {
          boxShadowValue = inputBoxShadow.success;
        } else {
          boxShadowValue = boxShadow([0, 0], [0, 2], inputColors.boxShadow, 1);
        }

        return boxShadowValue;
      },
    },

    suiInput_disabled: {
      backgroundColor: light.main,
      color: grey[700],
      opacity: 1,
    },

    suiInput_error: {
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23fd5c70' viewBox='0 0 12 12'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23fd5c70' stroke='none'/%3E%3C/svg%3E\")",
      backgroundRepeat: "no-repeat",
      backgroundPosition: `right ${pxToRem(12)} center`,
      backgroundSize: `${pxToRem(16)} ${pxToRem(16)}`,
      borderColor: inputColors.error,
    },

    suiInput_success: {
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 8'%3E%3Cpath fill='%2366d432' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E\")",
      backgroundRepeat: "no-repeat",
      backgroundPosition: `right ${pxToRem(12)} center`,
      backgroundSize: `${pxToRem(16)} ${pxToRem(16)}`,
      borderColor: inputColors.success,
    },

    suiInput_multiline: {
      padding: `${pxToRem(10)} ${pxToRem(12)}`,
    },

    suiInputIcon: {
      display: "flex",
      alignItems: "center",
      backgroundColor: ({ disabled }) => (disabled ? grey[200] : white.main),
      border: `${borderWidth[1]} solid`,
      borderRadius: borderRadius.md,
      borderColor: ({ error, success }) => {
        let borderColor;

        if (error) {
          borderColor = inputColors.error;
        } else if (success) {
          borderColor = inputColors.success;
        } else {
          borderColor = inputColors.borderColor.main;
        }

        return borderColor;
      },

      "& .MuiInputBase-input": {
        height: pxToRem(20),
      },
    },

    suiInputIcon_right: {
      lineHeight: 0,
      padding: ({ size }) =>
        size === "small" ? `${pxToRem(4)} ${pxToRem(10)}` : `${pxToRem(8)} ${pxToRem(10)}`,
      width: pxToRem(39),
      height: "100%",
      color: dark.main,
    },

    suiInputIcon_input: {
      borderColor: transparent.main,
      borderRadius: ({ direction, withIcon }) => {
        let borderRadiusValue;

        if (direction === "rtl" && withIcon.direction === "left") {
          borderRadiusValue = `${borderRadius.md} 0 0 ${borderRadius.md}`;
        } else if (direction === "rtl" && withIcon.direction === "right") {
          borderRadiusValue = `0 ${borderRadius.md} ${borderRadius.md} 0`;
        } else if (direction === "ltr" && withIcon.direction === "right") {
          borderRadiusValue = `${borderRadius.md} 0 0 ${borderRadius.md}`;
        } else {
          borderRadiusValue = `0 ${borderRadius.md} ${borderRadius.md} 0`;
        }

        return borderRadiusValue;
      },
      paddingLeft: ({ direction, withIcon }) => {
        let paddingLeftValue;

        if (direction === "rtl" && withIcon.direction === "left") {
          paddingLeftValue = pxToRem(12);
        } else if (direction === "rtl" && withIcon.direction === "right") {
          paddingLeftValue = 0;
        } else if (direction === "ltr" && withIcon.direction === "right") {
          paddingLeftValue = pxToRem(12);
        } else if (direction === "ltr" && withIcon.direction === "left") {
          paddingLeftValue = 0;
        }

        return paddingLeftValue;
      },
      paddingRight: ({ direction, withIcon }) => {
        let paddingRightValue;

        if (direction === "rtl" && withIcon.direction === "left") {
          paddingRightValue = 0;
        } else if (direction === "rtl" && withIcon.direction === "right") {
          paddingRightValue = pxToRem(12);
        } else if (direction === "ltr" && withIcon.direction === "right") {
          paddingRightValue = 0;
        } else if (direction === "ltr" && withIcon.direction === "left") {
          paddingRightValue = pxToRem(12);
        }

        return paddingRightValue;
      },
    },

    suiInputIcon_icon: {
      fontWeight: fontWeightBold,
      fontSize: ({ size }) => size === "small" && `${fontSize.regular} !important`,
    },
  };
});
