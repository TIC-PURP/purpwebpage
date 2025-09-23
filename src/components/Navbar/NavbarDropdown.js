import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Collapse from "@mui/material/Collapse";
import Contenedor from "../Contenedor";
import TextSection from "../TextSection";

function NavbarDropdown({
  name,
  icon,
  children,
  collapseStatus,
  light,
  href,
  route,
  bgColor,
  variant,
  fontColor,
  ...rest
}) {
  // Define componentes de enlace
  const linkComponent = href
    ? {
        component: "a",
        href,
        target: "_blank",
        rel: "noreferrer",
      }
    : null;

  const routeComponent = route
    ? {
        component: Link,
        to: route,
      }
    : null;

  // Determina el color de fuente
  const setFontColor = () => fontColor || (light ? "white" : "dark");

  return (
    <Contenedor
      {...rest}
      mx={{ xs: 3, lg: 0.5 }}
      p={0.5}
      display="flex"
      alignItems="baseline"
      color={setFontColor()}
      variant={variant}
      bgColor={bgColor}
      sx={{ cursor: "pointer", userSelect: "none" }}
      {...(routeComponent && routeComponent)}
      {...(linkComponent && linkComponent)}
    >
      <TextSection variant="h6" lineHeight={1} color="inherit" sx={{ alignSelf: "center" }}>
        {icon}
      </TextSection>
      <TextSection
        variant="h6"
        fontWeight="regular"
        textTransform="capitalize"
        color={setFontColor()}
      >
        {name}
      </TextSection>
      {children && (
        <Collapse in={Boolean(collapseStatus)} timeout={400} unmountOnExit>
          {children}
        </Collapse>
      )}
    </Contenedor>
  );
}

NavbarDropdown.defaultProps = {
  children: false,
  collapseStatus: false,
  light: false,
  href: "",
  route: "",
  fontColor: "",
  bgColor: "",
  variant: "",
};

NavbarDropdown.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  children: PropTypes.node,
  collapseStatus: PropTypes.bool,
  light: PropTypes.bool,
  href: PropTypes.string,
  route: PropTypes.string,
  fontColor: PropTypes.string,
  bgColor: PropTypes.string,
  variant: PropTypes.string,
};

export default NavbarDropdown;
