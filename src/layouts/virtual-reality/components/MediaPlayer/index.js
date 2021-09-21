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
import Tooltip from "@mui/material/Tooltip";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";

// Custom styles for the MediaPlayer
import styles from "layouts/virtual-reality/components/MediaPlayer/styles";

function MediaPlayer() {
  const classes = styles();

  return (
    <Card className={classes.mediaPlayer}>
      <SuiBox p={3} position="relative" lineHeight={0}>
        <SuiTypography variant="h5" textColor="white" fontWeight="medium">
          Some Kind Of Blues
        </SuiTypography>
        <SuiTypography variant="button" textColor="white" fontWeight="regular">
          Deftones
        </SuiTypography>
        <SuiBox display="flex" mt={6} pt={1}>
          <SuiBox display="flex" alignItems="center" justifyContent="center">
            <Tooltip title="Prev" placement="top">
              <SuiButton
                variant="outlined"
                size="large"
                circular
                iconOnly
                customClass={classes.mediaPlayer_button}
              >
                <Icon className="material-icons-round">skip_previous</Icon>
              </SuiButton>
            </Tooltip>
            <Tooltip title="Pause" placement="top">
              <SuiButton
                variant="outlined"
                size="large"
                circular
                iconOnly
                customClass={classes.mediaPlayer_button}
              >
                <Icon className="material-icons-round">play_arrow</Icon>
              </SuiButton>
            </Tooltip>
            <Tooltip title="Next" placement="top">
              <SuiButton
                variant="outlined"
                size="large"
                circular
                iconOnly
                customClass={classes.mediaPlayer_button}
              >
                <Icon className="material-icons-round">skip_next</Icon>
              </SuiButton>
            </Tooltip>
          </SuiBox>
        </SuiBox>
      </SuiBox>
    </Card>
  );
}

export default MediaPlayer;
