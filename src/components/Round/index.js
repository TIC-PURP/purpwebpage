import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Custom styles for MKAvatar
import RoundRoot from "./RoundRoot";

const Round = forwardRef(({ bgColor, size, shadow, ...rest }, ref) => (
  <RoundRoot ref={ref} ownerState={{ shadow, bgColor, size }} {...rest} />
));

// Setting default values for the props of Avatar
Round.defaultProps = {
  bgColor: "transparent",
  size: "md",
  shadow: "md",
};

// Typechecking props for the Avatar
Round.propTypes = {
  bgColor: PropTypes.oneOf([
    "transparent",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "xxl"]),
  shadow: PropTypes.oneOf(["none", "xs", "sm", "md", "lg", "xl", "xxl", "inset"]),
};

export default Round;
