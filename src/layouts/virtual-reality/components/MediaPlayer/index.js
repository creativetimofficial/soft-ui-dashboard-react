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
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

// Images
import curved1 from "assets/images/curved-images/curved1.jpg";

function MediaPlayer() {
  const mediaPlayerButtonStyles = ({ functions: { pxToRem } }) => ({
    width: pxToRem(46),
    height: pxToRem(46),
    minWidth: pxToRem(46),
    minHeight: pxToRem(46),
    mr: 1,
  });

  return (
    <Card
      sx={({ functions: { linearGradient, rgba }, palette: { gradients } }) => ({
        backgroundImage: `${linearGradient(
          rgba(gradients.dark.main, 0.85),
          rgba(gradients.dark.state, 0.85)
        )}, url(${curved1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      })}
    >
      <SoftBox p={3} position="relative" lineHeight={0}>
        <SoftTypography variant="h5" color="white" fontWeight="medium">
          Some Kind Of Blues
        </SoftTypography>
        <SoftTypography variant="button" color="white" fontWeight="regular">
          Deftones
        </SoftTypography>
        <SoftBox display="flex" mt={6} pt={1}>
          <SoftBox display="flex" alignItems="center" justifyContent="center">
            <Tooltip title="Prev" placement="top">
              <SoftButton
                variant="outlined"
                size="large"
                circular
                iconOnly
                sx={mediaPlayerButtonStyles}
              >
                <Icon>skip_previous</Icon>
              </SoftButton>
            </Tooltip>
            <Tooltip title="Pause" placement="top">
              <SoftButton
                variant="outlined"
                size="large"
                circular
                iconOnly
                sx={mediaPlayerButtonStyles}
              >
                <Icon>play_arrow</Icon>
              </SoftButton>
            </Tooltip>
            <Tooltip title="Next" placement="top">
              <SoftButton
                variant="outlined"
                size="large"
                circular
                iconOnly
                sx={mediaPlayerButtonStyles}
              >
                <Icon>skip_next</Icon>
              </SoftButton>
            </Tooltip>
          </SoftBox>
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

export default MediaPlayer;
