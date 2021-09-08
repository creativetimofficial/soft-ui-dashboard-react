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

export default makeStyles(({ palette }) => ({
  breadcrumbs: {
    "& .MuiBreadcrumbs-separator": {
      color: ({ light }) => (light ? palette.white.main : palette.grey[600]),
    },
  },
}));
