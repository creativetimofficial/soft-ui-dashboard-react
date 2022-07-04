/**
=========================================================
* Soft UI Dashboard React - v4.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

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
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

function TodoList() {
  return (
    <Card sx={{ height: "100%" }}>
      <SoftBox p={3}>
        <SoftBox display="flex" lineHeight={1}>
          <SoftBox mr={2}>
            <SoftTypography variant="h6" fontWeight="medium">
              08:00
            </SoftTypography>
          </SoftBox>
          <SoftBox>
            <SoftTypography variant="h6" fontWeight="medium">
              Synk up with Mark
            </SoftTypography>
            <SoftTypography variant="button" fontWeight="regular" color="secondary">
              Hangouts
            </SoftTypography>
          </SoftBox>
        </SoftBox>
        <Divider />
        <SoftBox display="flex" lineHeight={0}>
          <SoftBox mr={2}>
            <SoftTypography variant="h6" fontWeight="medium">
              09:30
            </SoftTypography>
          </SoftBox>
          <SoftBox>
            <SoftTypography variant="h6" fontWeight="medium">
              Gym
            </SoftTypography>
            <SoftTypography variant="button" fontWeight="regular" color="secondary">
              World Class
            </SoftTypography>
          </SoftBox>
        </SoftBox>
        <Divider />
        <SoftBox display="flex" lineHeight={1}>
          <SoftBox mr={2}>
            <SoftTypography variant="h6" fontWeight="medium">
              11:00
            </SoftTypography>
          </SoftBox>
          <SoftBox>
            <SoftTypography variant="h6" fontWeight="medium">
              Design Review
            </SoftTypography>
            <SoftTypography variant="button" fontWeight="regular" color="secondary">
              Zoom
            </SoftTypography>
          </SoftBox>
        </SoftBox>
      </SoftBox>
      <SoftBox bgColor="grey-100" mt="auto">
        <Tooltip title="Show More" placement="top" sx={{ cursor: "pointer" }}>
          <SoftBox textAlign="center" py={0.5} color="info" lineHeight={0}>
            <Icon sx={{ fontWeight: "bold" }} color="inherit" fontSize="default">
              keyboard_arrow_down
            </Icon>
          </SoftBox>
        </Tooltip>
      </SoftBox>
    </Card>
  );
}

export default TodoList;
