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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Soft UI Dashboard React base styles
import colors from "assets/theme/base/colors";

function CreditCard({ color, size }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 42 42"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>credit-card</title>
      <g id="Basic-Elements" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g
          id="Rounded-Icons"
          transform="translate(-2169.000000, -745.000000)"
          fill={colors[color] ? colors[color].main : colors.dark.main}
          fillRule="nonzero"
        >
          <g id="Icons-with-opacity" transform="translate(1716.000000, 291.000000)">
            <g id="credit-card" transform="translate(453.000000, 454.000000)">
              <path
                d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"
                id="Path"
                opacity="0.593633743"
              />
              <path d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

// Setting default values for the props of CreditCard
CreditCard.defaultProps = {
  color: "dark",
  size: "16px",
};

// Typechecking props for the CreditCard
CreditCard.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
    "white",
  ]),
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default CreditCard;
