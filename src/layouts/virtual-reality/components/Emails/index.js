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

// @mui material components
import Card from "@mui/material/Card";
import Tooltip from "@mui/material/Tooltip";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

function Emails() {
  return (
    <Card>
      <SuiBox display="flex" justifyContent="space-between" p={3} lineHeight={1}>
        <SuiTypography variant="body2" color="text">
          Emails (21)
        </SuiTypography>
        <Tooltip title="Check your emails" placement="top">
          <SuiBox component="a" href="#">
            <SuiTypography variant="body2">Check</SuiTypography>
          </SuiBox>
        </Tooltip>
      </SuiBox>
    </Card>
  );
}

export default Emails;
