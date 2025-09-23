import { useState } from "react";

// react-router components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Collapse from "@mui/material/Collapse";
import MuiLink from "@mui/material/Link";

// Sustituye MKBox
import Contenedor from "../Contenedor";
// Sustituye MKTypography
import TextSection from "../TextSection";

// Material Kit 2 React example components
import NavbarDropdown from "./NavbarDropdown";

function NavbarMobile({ routes, open }) {
  const [collapse, setCollapse] = useState("");

  const handleSetCollapse = (name) => (collapse === name ? setCollapse(false) : setCollapse(name));

  const renderNavbarItems = routes.map(
    ({ name, icon, collapse: routeCollapses, href, route, collapse: navCollapse, notVisible }) => {
      if (!notVisible) {
        return (
          <NavbarDropdown
            // Color de items e iconos en dropdown
            fontColor="white"
            key={name}
            name={name}
            icon={icon}
            collapseStatus={name === collapse}
            onClick={() => handleSetCollapse(name)}
            href={href}
            route={route}
            collapse={Boolean(navCollapse)}
          >
            <Contenedor sx={{ height: "8rem", maxHeight: "15rem", overflowY: "scroll" }}>
              {routeCollapses &&
                routeCollapses.map((item) => (
                  <Contenedor key={item.name} px={2}>
                    {item.collapse ? (
                      <>
                        <TextSection
                          display="block"
                          variant="button"
                          fontWeight="bold"
                          textTransform="capitalize"
                          textColor="white"
                          py={1}
                          px={0.5}
                        >
                          {
                            // Titulo de separador item en lista de menu
                          }
                          {item.name}
                        </TextSection>
                        {item.collapse.map((el) => (
                          <TextSection
                            key={el.name}
                            component={el.route ? Link : MuiLink}
                            to={el.route ? el.route : ""}
                            href={el.href ? el.href : ""}
                            target={el.href ? "_blank" : ""}
                            rel={el.href ? "noreferrer" : "noreferrer"}
                            minWidth="11.25rem"
                            display="block"
                            variant="button"
                            color="text"
                            // Color de items en submenu
                            textColor="white"
                            textTransform="capitalize"
                            fontWeight="regular"
                            py={0.625}
                            px={2}
                            // eslint-disable-next-line no-unused-vars
                            sx={({ palette: { grey, dark }, borders: { borderRadius } }) => ({
                              borderRadius: borderRadius.md,
                              cursor: "pointer",
                              transition: "all 300ms linear",
                              // Color de items en dro
                              color: "white",

                              "&:hover": {
                                backgroundColor: grey[200],
                                color: "black",
                              },
                            })}
                          >
                            {
                              // Nombre item en lista de menu
                            }
                            {el.name}
                          </TextSection>
                        ))}
                      </>
                    ) : (
                      <Contenedor
                        key={item.key}
                        display="block"
                        component={item.route ? Link : MuiLink}
                        to={item.route ? item.route : ""}
                        href={item.href ? item.href : ""}
                        target={item.href ? "_blank" : ""}
                        rel={item.href ? "noreferrer" : "noreferrer"}
                        sx={({ borders: { borderRadius } }) => ({
                          borderRadius: borderRadius.md,
                          cursor: "pointer",
                          transition: "all 300ms linear",
                          py: 1,
                          px: 3.625,

                          "&:hover": {
                            backgroundColor: "#FFCC00",
                            color: "black",

                            "& *": {
                              color: "black",
                            },
                          },
                        })}
                      >
                        <TextSection
                          display="block"
                          variant="h6"
                          fontWeight="bold"
                          textTransform="capitalize"
                          color="white"
                        >
                          {item.name}
                        </TextSection>
                        <TextSection
                          display="block"
                          variant="button"
                          color="text"
                          fontWeight="regular"
                          sx={{ transition: "all 300ms linear" }}
                        >
                          {item.description}
                        </TextSection>
                      </Contenedor>
                    )}
                  </Contenedor>
                ))}
            </Contenedor>
          </NavbarDropdown>
        );
      }
      return null;
    }
  );

  return (
    <Collapse in={Boolean(open)} timeout="auto" unmountOnExit>
      <Contenedor width="calc(100% + 1rem)" my={2} ml={-2}>
        {renderNavbarItems}
      </Contenedor>
    </Collapse>
  );
}

// Typechecking props for the NavbarMobile
NavbarMobile.propTypes = {
  routes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  open: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
};

export default NavbarMobile;
