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
import CardContent from "@material-ui/core/CardContent";
import Icon from "@material-ui/core/Icon";
import Link from "@material-ui/core/Link";

// Soft UI Dashboard PRO Material-UI components
import SuiButton from "components/SuiButton";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Custom styles for the SidenavCard
import styles from "examples/Sidenav/styles/sidenavCard";

// Soft UI Dashboard PRO Material-UI context
import { useSoftUIController } from "context";

function SidenavCard() {
  const [controller] = useSoftUIController();
  const { miniSidenav, sidenavColor } = controller;
  const classes = styles({ miniSidenav, sidenavColor });

  return (
    <Card className={classes.card}>
      <CardContent className={classes.card_content}>
        <SuiBox customClass={classes.card_iconBox}>
          <Icon className={`material-icons-round ${classes.card_icon}`} fontSize="default">
            star
          </Icon>
        </SuiBox>
        <SuiBox>
          <SuiTypography variant="h6" textColor="white">
            Need help?
          </SuiTypography>
          <SuiBox mb={1.5} mt={-1}>
            <SuiTypography variant="caption" textColor="white" fontWeight="medium">
              Please check our docs
            </SuiTypography>
          </SuiBox>
          <SuiButton
            component={Link}
            href="https://www.creative-tim.com/learning-lab/material-ui/quick-start/soft-ui-dashboard"
            target="_blank"
            rel="noreferrer"
            size="small"
            color="default"
            fullWidth
          >
            documentation
          </SuiButton>
        </SuiBox>
      </CardContent>
    </Card>
  );
}

export default SidenavCard;
