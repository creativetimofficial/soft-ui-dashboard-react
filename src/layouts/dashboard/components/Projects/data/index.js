// @mui material components
import Tooltip from "@mui/material/Tooltip";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiAvatar from "components/SuiAvatar";
import SuiProgress from "components/SuiProgress";

// Custom styles for the Projects
import styles from "layouts/dashboard/components/Projects/styles";

// Images
import logoXD from "assets/images/small-logos/logo-xd.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoJira from "assets/images/small-logos/logo-jira.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {
  const classes = styles();

  const avatars = (members) =>
    members.map(([image, name]) => (
      <Tooltip key={name} title={name} placeholder="bottom">
        <SuiAvatar src={image} alt="name" size="xs" customClass={classes.projects_tableAvatar} />
      </Tooltip>
    ));

  return {
    columns: [
      { name: "companies", align: "left" },
      { name: "members", align: "left" },
      { name: "budget", align: "center" },
      { name: "completion", align: "center" },
    ],

    rows: [
      {
        companies: [logoXD, "Soft UI XD Version"],
        members: (
          <SuiBox display="flex" py={1}>
            {avatars([
              [team1, "Ryan Tompson"],
              [team2, "Romina Hadid"],
              [team3, "Alexander Smith"],
              [team4, "Jessica Doe"],
            ])}
          </SuiBox>
        ),
        budget: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            $14,000
          </SuiTypography>
        ),
        completion: (
          <SuiBox width="8rem" textAlign="left">
            <SuiProgress value={60} color="info" gradient />
          </SuiBox>
        ),
      },
      {
        companies: [logoAtlassian, "Add Progress Track"],
        members: (
          <SuiBox display="flex" py={1}>
            {avatars([
              [team2, "Romina Hadid"],
              [team4, "Jessica Doe"],
            ])}
          </SuiBox>
        ),
        budget: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            $3,000
          </SuiTypography>
        ),
        completion: (
          <SuiBox width="8rem" textAlign="left">
            <SuiProgress value={10} color="info" gradient />
          </SuiBox>
        ),
      },
      {
        companies: [logoSlack, "Fix Platform Errors"],
        members: (
          <SuiBox display="flex" py={1}>
            {avatars([
              [team1, "Ryan Tompson"],
              [team3, "Alexander Smith"],
            ])}
          </SuiBox>
        ),
        budget: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            Not set
          </SuiTypography>
        ),
        completion: (
          <SuiBox width="8rem" textAlign="left">
            <SuiProgress value={100} color="success" gradient />
          </SuiBox>
        ),
      },
      {
        companies: [logoSpotify, "Launch our Mobile App"],
        members: (
          <SuiBox display="flex" py={1}>
            {avatars([
              [team4, "Jessica Doe"],
              [team3, "Alexander Smith"],
              [team2, "Romina Hadid"],
              [team1, "Ryan Tompson"],
            ])}
          </SuiBox>
        ),
        budget: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            $20,500
          </SuiTypography>
        ),
        completion: (
          <SuiBox width="8rem" textAlign="left">
            <SuiProgress value={100} color="success" gradient />
          </SuiBox>
        ),
      },
      {
        companies: [logoJira, "Add the New Pricing Page"],
        members: (
          <SuiBox display="flex" py={1}>
            {avatars([[team4, "Jessica Doe"]])}
          </SuiBox>
        ),
        budget: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            $500
          </SuiTypography>
        ),
        completion: (
          <SuiBox width="8rem" textAlign="left">
            <SuiProgress value={25} color="info" gradient />
          </SuiBox>
        ),
      },
      {
        companies: [logoInvesion, "Redesign New Online Shop"],
        members: (
          <SuiBox display="flex" py={1}>
            {avatars([
              [team1, "Ryan Tompson"],
              [team4, "Jessica Doe"],
            ])}
          </SuiBox>
        ),
        budget: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            $2,000
          </SuiTypography>
        ),
        completion: (
          <SuiBox width="8rem" textAlign="left">
            <SuiProgress value={40} color="info" gradient />
          </SuiBox>
        ),
      },
    ],
  };
}
