/* eslint-disable react/prop-types */
// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiAvatar from "components/SuiAvatar";
import SuiBadge from "components/SuiBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

function Author({ image, name, email }) {
  return (
    <SuiBox display="flex" alignItems="center" px={1} py={0.5}>
      <SuiBox mr={2}>
        <SuiAvatar src={image} alt={name} size="sm" variant="rounded" />
      </SuiBox>
      <SuiBox display="flex" flexDirection="column">
        <SuiTypography variant="button" fontWeight="medium">
          {name}
        </SuiTypography>
        <SuiTypography variant="caption" color="secondary">
          {email}
        </SuiTypography>
      </SuiBox>
    </SuiBox>
  );
}

function Function({ job, org }) {
  return (
    <SuiBox display="flex" flexDirection="column">
      <SuiTypography variant="caption" fontWeight="medium" color="text">
        {job}
      </SuiTypography>
      <SuiTypography variant="caption" color="secondary">
        {org}
      </SuiTypography>
    </SuiBox>
  );
}

const authorsTableData = {
  columns: [
    { name: "author", align: "left" },
    { name: "function", align: "left" },
    { name: "status", align: "center" },
    { name: "employed", align: "center" },
    { name: "action", align: "center" },
  ],

  rows: [
    {
      author: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
      function: <Function job="Manager" org="Organization" />,
      status: (
        <SuiBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
      ),
      employed: (
        <SuiTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SuiTypography>
      ),
      action: (
        <SuiTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </SuiTypography>
      ),
    },
    {
      author: <Author image={team3} name="Alexa Liras" email="alexa@creative-tim.com" />,
      function: <Function job="Programator" org="Developer" />,
      status: (
        <SuiBadge variant="gradient" badgeContent="offline" color="secondary" size="xs" container />
      ),
      employed: (
        <SuiTypography variant="caption" color="secondary" fontWeight="medium">
          11/01/19
        </SuiTypography>
      ),
      action: (
        <SuiTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </SuiTypography>
      ),
    },
    {
      author: <Author image={team4} name="Laurent Perrier" email="laurent@creative-tim.com" />,
      function: <Function job="Executive" org="Projects" />,
      status: (
        <SuiBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
      ),
      employed: (
        <SuiTypography variant="caption" color="secondary" fontWeight="medium">
          19/09/17
        </SuiTypography>
      ),
      action: (
        <SuiTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </SuiTypography>
      ),
    },
    {
      author: <Author image={team3} name="Michael Levi" email="michael@creative-tim.com" />,
      function: <Function job="Programator" org="Developer" />,
      status: (
        <SuiBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
      ),
      employed: (
        <SuiTypography variant="caption" color="secondary" fontWeight="medium">
          24/12/08
        </SuiTypography>
      ),
      action: (
        <SuiTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </SuiTypography>
      ),
    },
    {
      author: <Author image={team2} name="Richard Gran" email="richard@creative-tim.com" />,
      function: <Function job="Manager" org="Executive" />,
      status: (
        <SuiBadge variant="gradient" badgeContent="offline" color="secondary" size="xs" container />
      ),
      employed: (
        <SuiTypography variant="caption" color="secondary" fontWeight="medium">
          04/10/21
        </SuiTypography>
      ),
      action: (
        <SuiTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </SuiTypography>
      ),
    },
    {
      author: <Author image={team4} name="Miriam Eric" email="miriam@creative-tim.com" />,
      function: <Function job="Programtor" org="Developer" />,
      status: (
        <SuiBadge variant="gradient" badgeContent="offline" color="secondary" size="xs" container />
      ),
      employed: (
        <SuiTypography variant="caption" color="secondary" fontWeight="medium">
          14/09/20
        </SuiTypography>
      ),
      action: (
        <SuiTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </SuiTypography>
      ),
    },
  ],
};

export default authorsTableData;
