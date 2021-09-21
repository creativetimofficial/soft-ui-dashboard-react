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

export default makeStyles(({ functions, breakpoints }) => {
  const { pxToRem } = functions;

  return {
    footer_list: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
      listStyle: "none",
      padding: 0,
      marginTop: pxToRem(24),
      marginBottom: 0,

      [breakpoints.up("lg")]: {
        marginTop: 0,
      },
    },
  };
});
