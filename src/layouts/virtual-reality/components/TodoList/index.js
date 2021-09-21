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
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

function TodoList() {
  return (
    <Card className="h-100">
      <SuiBox p={3}>
        <SuiBox display="flex">
          <SuiBox mr={2}>
            <SuiTypography variant="h6" fontWeight="medium">
              08:00
            </SuiTypography>
          </SuiBox>
          <SuiBox lineHeight={1}>
            <SuiTypography variant="h6" fontWeight="medium">
              Synk up with Mark
            </SuiTypography>
            <SuiTypography variant="button" fontWeight="regular" textColor="secondary">
              Hangouts
            </SuiTypography>
          </SuiBox>
        </SuiBox>
        <Divider />
        <SuiBox display="flex">
          <SuiBox mr={2}>
            <SuiTypography variant="h6" fontWeight="medium">
              09:30
            </SuiTypography>
          </SuiBox>
          <SuiBox lineHeight={1}>
            <SuiTypography variant="h6" fontWeight="medium">
              Gym
            </SuiTypography>
            <SuiTypography variant="button" fontWeight="regular" textColor="secondary">
              World Class
            </SuiTypography>
          </SuiBox>
        </SuiBox>
        <Divider />
        <SuiBox display="flex">
          <SuiBox mr={2}>
            <SuiTypography variant="h6" fontWeight="medium">
              11:00
            </SuiTypography>
          </SuiBox>
          <SuiBox lineHeight={1}>
            <SuiTypography variant="h6" fontWeight="medium">
              Design Review
            </SuiTypography>
            <SuiTypography variant="button" fontWeight="regular" textColor="secondary">
              Zoom
            </SuiTypography>
          </SuiBox>
        </SuiBox>
      </SuiBox>
      <SuiBox backgroundColor="grey-100" mt="auto">
        <Tooltip title="Show More" placement="top" className="cursor-pointer">
          <SuiBox textAlign="center" py={0.5} lineHeight={0}>
            <Icon className="font-bold text-info" fontSize="medium">
              keyboard_arrow_down
            </Icon>
          </SuiBox>
        </Tooltip>
      </SuiBox>
    </Card>
  );
}

export default TodoList;
