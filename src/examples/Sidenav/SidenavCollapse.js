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

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Collapse from "@mui/material/Collapse";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";

// Custom styles for the SidenavCollapse
import styles from "examples/Sidenav/styles/sidenavCollapse";

// Soft UI Dashboard React context
import { useSoftUIController } from "context";

function SidenavCollapse({ icon, name, children, active, noCollapse, open, ...rest }) {
  const [controller] = useSoftUIController();
  const { miniSidenav, transparentSidenav, sidenavColor } = controller;

  const classes = styles({
    active,
    noCollapse,
    open,
    miniSidenav,
    transparentSidenav,
    sidenavColor,
  });

  return (
    <>
      <ListItem component="li">
        <SuiBox {...rest} customClass={classes.collapse_item}>
          <ListItemIcon className={classes.collapse_iconBox}>
            {typeof icon === "string" ? (
              <Icon className={classes.collapse_icon}>{icon}</Icon>
            ) : (
              icon
            )}
          </ListItemIcon>

          <ListItemText primary={name} classes={{ root: classes.collapse_text }} />
        </SuiBox>
      </ListItem>
      {children && (
        <Collapse in={open} unmountOnExit>
          {children}
        </Collapse>
      )}
    </>
  );
}

// Setting default values for the props of SidenavCollapse
SidenavCollapse.defaultProps = {
  active: false,
  noCollapse: false,
  children: false,
  open: false,
};

// Typechecking props for the SidenavCollapse
SidenavCollapse.propTypes = {
  icon: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
  active: PropTypes.bool,
  noCollapse: PropTypes.bool,
  open: PropTypes.bool,
};

export default SidenavCollapse;
