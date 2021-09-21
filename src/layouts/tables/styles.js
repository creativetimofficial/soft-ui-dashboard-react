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

export default makeStyles(({ borders }) => {
  const { borderWidth, borderColor } = borders;

  return {
    tables_table: {
      "& .MuiTableRow-root:not(:last-child)": {
        "& td": {
          borderBottom: `${borderWidth[1]} solid ${borderColor}`,
        },
      },
    },
  };
});
