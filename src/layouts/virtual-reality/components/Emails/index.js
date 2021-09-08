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
import Card from "@material-ui/core/Card";
import Tooltip from "@material-ui/core/Tooltip";

// Soft UI Dashboard Material-UI components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

function Emails() {
  return (
    <Card>
      <SuiBox display="flex" justifyContent="space-between" p={3}>
        <SuiTypography variant="body2" textColor="text">
          Emails (21)
        </SuiTypography>
        <Tooltip title="Check your emails" placement="top">
          <SuiBox component="a" href="#" className="link">
            Check
          </SuiBox>
        </Tooltip>
      </SuiBox>
    </Card>
  );
}

export default Emails;
