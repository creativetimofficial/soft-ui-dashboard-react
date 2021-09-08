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
import Divider from "@material-ui/core/Divider";

// Soft UI Dashboard Material-UI components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

function Separator() {
  return (
    <SuiBox position="relative" py={0.25}>
      <Divider />
      <SuiBox
        backgroundColor="white"
        position="absolute"
        top="50%"
        left="50%"
        px={1.5}
        style={{ transform: "translate(-50%, -60%)" }}
      >
        <SuiTypography variant="button" fontWeight="medium" textColor="secondary">
          or
        </SuiTypography>
      </SuiBox>
    </SuiBox>
  );
}

export default Separator;
