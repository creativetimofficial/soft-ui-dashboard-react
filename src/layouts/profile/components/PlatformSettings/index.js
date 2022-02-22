/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

function PlatformSettings() {
  const [followsMe, setFollowsMe] = useState(true);
  const [answersPost, setAnswersPost] = useState(false);
  const [mentionsMe, setMentionsMe] = useState(true);
  const [newLaunches, setNewLaunches] = useState(false);
  const [productUpdate, setProductUpdate] = useState(true);
  const [newsletter, setNewsletter] = useState(true);

  return (
    <Card>
      <SuiBox pt={2} px={2}>
        <SuiTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          platform settings
        </SuiTypography>
      </SuiBox>
      <SuiBox pt={1.5} pb={2} px={2} lineHeight={1.25}>
        <SuiTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
          account
        </SuiTypography>
        <SuiBox display="flex" py={1} mb={0.25}>
          <SuiBox mt={0.25}>
            <Switch checked={followsMe} onChange={() => setFollowsMe(!followsMe)} />
          </SuiBox>
          <SuiBox width="80%" ml={2}>
            <SuiTypography variant="button" fontWeight="regular" color="text">
              Email me when someone follows me
            </SuiTypography>
          </SuiBox>
        </SuiBox>
        <SuiBox display="flex" py={1} mb={0.25}>
          <SuiBox mt={0.25}>
            <Switch checked={answersPost} onChange={() => setAnswersPost(!answersPost)} />
          </SuiBox>
          <SuiBox width="80%" ml={2}>
            <SuiTypography variant="button" fontWeight="regular" color="text">
              Email me when someone answers on my post
            </SuiTypography>
          </SuiBox>
        </SuiBox>
        <SuiBox display="flex" py={1} mb={0.25}>
          <SuiBox mt={0.25}>
            <Switch checked={mentionsMe} onChange={() => setMentionsMe(!mentionsMe)} />
          </SuiBox>
          <SuiBox width="80%" ml={2}>
            <SuiTypography variant="button" fontWeight="regular" color="text">
              Email me when someone mentions me
            </SuiTypography>
          </SuiBox>
        </SuiBox>
        <SuiBox mt={3}>
          <SuiTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
            application
          </SuiTypography>
        </SuiBox>
        <SuiBox display="flex" py={1} mb={0.25}>
          <SuiBox mt={0.25}>
            <Switch checked={newLaunches} onChange={() => setNewLaunches(!newLaunches)} />
          </SuiBox>
          <SuiBox width="80%" ml={2}>
            <SuiTypography variant="button" fontWeight="regular" color="text">
              New launches and projects
            </SuiTypography>
          </SuiBox>
        </SuiBox>
        <SuiBox display="flex" py={1} mb={0.25}>
          <SuiBox mt={0.25}>
            <Switch checked={productUpdate} onChange={() => setProductUpdate(!productUpdate)} />
          </SuiBox>
          <SuiBox width="80%" ml={2}>
            <SuiTypography variant="button" fontWeight="regular" color="text">
              Monthly product updates
            </SuiTypography>
          </SuiBox>
        </SuiBox>
        <SuiBox display="flex" py={1} mb={0.25}>
          <SuiBox mt={0.25}>
            <Switch checked={newsletter} onChange={() => setNewsletter(!newsletter)} />
          </SuiBox>
          <SuiBox width="80%" ml={2}>
            <SuiTypography variant="button" fontWeight="regular" color="text">
              Subscribe to newsletter
            </SuiTypography>
          </SuiBox>
        </SuiBox>
      </SuiBox>
    </Card>
  );
}

export default PlatformSettings;
