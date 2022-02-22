/* eslint-disable react/prop-types */
// @mui material components
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiProgress from "components/SuiProgress";

// Images
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import logoJira from "assets/images/small-logos/logo-jira.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoWebDev from "assets/images/small-logos/logo-webdev.svg";
import logoXD from "assets/images/small-logos/logo-xd.svg";

function Completion({ value, color }) {
  return (
    <SuiBox display="flex" alignItems="center">
      <SuiTypography variant="caption" color="text" fontWeight="medium">
        {value}%&nbsp;
      </SuiTypography>
      <SuiBox width="8rem">
        <SuiProgress value={value} color={color} variant="gradient" label={false} />
      </SuiBox>
    </SuiBox>
  );
}

const action = (
  <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small">
    more_vert
  </Icon>
);

const projectsTableData = {
  columns: [
    { name: "project", align: "left" },
    { name: "budget", align: "left" },
    { name: "status", align: "left" },
    { name: "completion", align: "center" },
    { name: "action", align: "center" },
  ],

  rows: [
    {
      project: [logoSpotify, "Spotift"],
      budget: (
        <SuiTypography variant="button" color="text" fontWeight="medium">
          $2,500
        </SuiTypography>
      ),
      status: (
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          working
        </SuiTypography>
      ),
      completion: <Completion value={60} color="info" />,
      action,
    },
    {
      project: [logoInvesion, "Invesion"],
      budget: (
        <SuiTypography variant="button" color="text" fontWeight="medium">
          $5,000
        </SuiTypography>
      ),
      status: (
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          done
        </SuiTypography>
      ),
      completion: <Completion value={100} color="success" />,
      action,
    },
    {
      project: [logoJira, "Jira"],
      budget: (
        <SuiTypography variant="button" color="text" fontWeight="medium">
          $3,400
        </SuiTypography>
      ),
      status: (
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          canceled
        </SuiTypography>
      ),
      completion: <Completion value={30} color="error" />,
      action,
    },
    {
      project: [logoSlack, "Slack"],
      budget: (
        <SuiTypography variant="button" color="text" fontWeight="medium">
          $1,400
        </SuiTypography>
      ),
      status: (
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          canceled
        </SuiTypography>
      ),
      completion: <Completion value={0} color="error" />,
      action,
    },
    {
      project: [logoWebDev, "Webdev"],
      budget: (
        <SuiTypography variant="button" color="text" fontWeight="medium">
          $14,000
        </SuiTypography>
      ),
      status: (
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          working
        </SuiTypography>
      ),
      completion: <Completion value={80} color="info" />,
      action,
    },
    {
      project: [logoXD, "Adobe XD"],
      budget: (
        <SuiTypography variant="button" color="text" fontWeight="medium">
          $2,300
        </SuiTypography>
      ),
      status: (
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          done
        </SuiTypography>
      ),
      completion: <Completion value={100} color="success" />,
      action,
    },
  ],
};

export default projectsTableData;
