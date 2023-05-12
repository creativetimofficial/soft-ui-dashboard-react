/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftAvatar from "components/SoftAvatar";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

// Soft UI Dashboard React base styles
import typography from "assets/theme/base/typography";

// VR dashboards components
import BaseLayout from "layouts/virtual-reality/components/BaseLayout";

// VRInfo dashboards components
import TodoList from "layouts/virtual-reality/components/TodoList";
import TodoCard from "layouts/virtual-reality/components/TodoCard";
import Emails from "layouts/virtual-reality/components/Emails";
import MediaPlayer from "layouts/virtual-reality/components/MediaPlayer";
import Messages from "layouts/virtual-reality/components/Messages";

// Images
import team1 from "assets/images/team-1.jpg";
import sunCloud from "assets/images/small-logos/icon-sun-cloud.png";

function VRInfo() {
  const { d1, h2, fontWeightMedium } = typography;

  return (
    <BaseLayout>
      <SoftBox
        minHeight="100vh"
        ml={{ xs: 0, md: 10 }}
        mt={{ xs: 0, md: 4 }}
        pt={{ xs: 16, md: 32 }}
        pb={{ xs: 0, md: 3 }}
        sx={{ transform: "scale(1.1)" }}
      >
        <Grid container>
          <Grid item xs={12} md={1}>
            <SoftBox
              display="flex"
              flexDirection={{ xs: "row", md: "column" }}
              justifyContent="center"
              alignItems="center"
              px={2}
              mb={{ xs: 8, md: 0 }}
            >
              <Tooltip title="My Profile" placement="right">
                <SoftAvatar
                  src={team1}
                  alt="Profile Picture"
                  size="lg"
                  variant="rounded"
                  sx={{ cursor: "pointer" }}
                />
              </Tooltip>

              <SoftBox my={{ xs: 0, md: 2 }} mx={{ xs: 2, md: 0 }}>
                <Tooltip title="Home" placement="right">
                  <SoftButton
                    size="large"
                    iconOnly
                    sx={({ palette: { dark }, borders: { borderRadius } }) => ({
                      color: dark.main,
                      borderRadius: borderRadius.lg,
                    })}
                  >
                    <Icon>home</Icon>
                  </SoftButton>
                </Tooltip>
              </SoftBox>
              <SoftBox mb={{ xs: 0, md: 2 }} mr={{ xs: 2, md: 0 }}>
                <Tooltip title="Search" placement="right">
                  <SoftButton
                    size="large"
                    iconOnly
                    sx={({ palette: { dark }, borders: { borderRadius } }) => ({
                      color: dark.main,
                      borderRadius: borderRadius.lg,
                    })}
                  >
                    <Icon>search</Icon>
                  </SoftButton>
                </Tooltip>
              </SoftBox>
              <Tooltip title="Minimize" placement="right">
                <SoftButton
                  size="large"
                  iconOnly
                  sx={({ palette: { dark }, borders: { borderRadius } }) => ({
                    color: dark.main,
                    borderRadius: borderRadius.lg,
                  })}
                >
                  <Icon>more_horiz</Icon>
                </SoftButton>
              </Tooltip>
            </SoftBox>
          </Grid>
          <Grid item xs={12} md={11} lg={10} xl={9}>
            <SoftBox
              display="flex"
              justifyContent="space-between"
              alignItems={{ xs: "center", md: "flex-start" }}
              ml={{ xs: 1, md: 4 }}
              mt={-1}
            >
              <SoftBox>
                <SoftBox
                  fontSize={{ xs: h2.fontSize, lg: d1.fontSize }}
                  fontWeight={fontWeightMedium}
                  lineHeight={1}
                >
                  28&deg;C
                </SoftBox>
                <SoftTypography variant="h6" fontWeight="medium" textTransform="uppercase">
                  cloudy
                </SoftTypography>
              </SoftBox>
              <SoftBox component="img" src={sunCloud} width="30%" />
            </SoftBox>
            <SoftBox mt={3} mb={8} ml={{ xs: 1, md: 4 }} mr={{ xs: 1, md: 0 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <TodoList />
                </Grid>
                <Grid item xs={12} md={4}>
                  <SoftBox mb={3}>
                    <TodoCard />
                  </SoftBox>
                  <Emails />
                </Grid>
                <Grid item xs={12} md={4}>
                  <SoftBox mb={3}>
                    <MediaPlayer />
                  </SoftBox>
                  <Messages />
                </Grid>
              </Grid>
            </SoftBox>
          </Grid>
        </Grid>
      </SoftBox>
    </BaseLayout>
  );
}

export default VRInfo;
