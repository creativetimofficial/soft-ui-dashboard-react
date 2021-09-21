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
import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO Material-UI components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Soft UI Dashboard PRO Material-UI example components
import TimelineItem from "examples/Timeline/TimelineItem";

function OrdersOverview() {
  return (
    <Card className="h-100">
      <SuiBox pt={3} px={3}>
        <SuiTypography variant="h6" fontWeight="medium">
          Orders overview
        </SuiTypography>
        <SuiBox mt={1} mb={2}>
          <SuiTypography variant="button" textColor="text" fontWeight="regular">
            <SuiTypography display="inline" variant="body2" verticalAlign="middle">
              <Icon className="font-bold text-success">arrow_upward</Icon>
            </SuiTypography>
            &nbsp;
            <SuiTypography variant="button" textColor="text" fontWeight="medium">
              24%
            </SuiTypography>{" "}
            this month
          </SuiTypography>
        </SuiBox>
      </SuiBox>
      <SuiBox p={2}>
        <TimelineItem
          color="success"
          icon="notifications"
          title="$2400, Design changes"
          dateTime="22 DEC 7:20 PM"
        />
        <TimelineItem
          color="error"
          icon="inventory_2"
          title="New order #1832412"
          dateTime="21 DEC 11 PM"
        />
        <TimelineItem
          color="info"
          icon="shopping_cart"
          title="Server payments for April"
          dateTime="21 DEC 9:34 PM"
        />
        <TimelineItem
          color="warning"
          icon="payment"
          title="New card added for order #4395133"
          dateTime="20 DEC 2:20 AM"
        />
        <TimelineItem
          color="primary"
          icon="vpn_key"
          title="New card added for order #4395133"
          dateTime="18 DEC 4:54 AM"
        />
        <TimelineItem color="dark" icon="paid" title="New order #9583120" dateTime="17 DEC" />
      </SuiBox>
    </Card>
  );
}

export default OrdersOverview;
