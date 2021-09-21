/**
=========================================================
* Soft UI Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { forwardRef, createContext, useContext } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiButton from "components/SuiButton";

// Custom styles for SuiPagination
import styles from "components/SuiPagination/styles";

// The Pagination main context
const Context = createContext();

const SuiPagination = forwardRef(
  ({ item, variant, color, size, active, children, ...rest }, ref) => {
    const context = item ? useContext(Context) : null;
    const paginationSize = context ? context.size : null;
    const classes = styles({ paginationSize, variant, active });

    return (
      <Context.Provider value={{ variant, color, size }}>
        {item ? (
          <SuiButton
            {...rest}
            ref={ref}
            variant={active ? context.variant : "outlined"}
            buttonColor={active ? context.color : "secondary"}
            iconOnly
            circular
            customClass={classes.suiPagination}
          >
            {children}
          </SuiButton>
        ) : (
          <SuiBox
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            customClass="no-list-style"
          >
            {children}
          </SuiBox>
        )}
      </Context.Provider>
    );
  }
);

// Setting default values for the props of SuiPagination
SuiPagination.defaultProps = {
  item: false,
  variant: "gradient",
  color: "info",
  size: "medium",
  active: false,
};

// Typechecking props for the SuiPagination
SuiPagination.propTypes = {
  item: PropTypes.bool,
  variant: PropTypes.oneOf(["gradient", "contained"]),
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  active: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default SuiPagination;
