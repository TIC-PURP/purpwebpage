/* eslint-disable react/prop-types */
/* eslint-disable no-param-reassign */

import { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Icon from "@mui/material/Icon";
import Popper from "@mui/material/Popper";
import Grow from "@mui/material/Grow";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import MuiLink from "@mui/material/Link";
import Fade from "@mui/material/Fade";
import breakpoints from "assets/theme/base/breakpoints";
import Contenedor from "../Contenedor";
import TextSection from "../TextSection";
import Button from "../Button";
import NavbarDropdown from "./NavbarDropdown";
import NavbarMobile from "./NavbarMobile";
import purpWhite from "../../assets/images/images_purp/logos/purp_white.png";

function DefaultNavbar({
  routes,
  transparent,
  light,
  action,
  sticky,
  relative,
  center,
  bgColor,
  bgColor1,
  bgColor2,
  variant,
}) {
  const [dropdown, setDropdown] = useState("");
  const [dropdownEl, setDropdownEl] = useState("");
  const [dropdownName, setDropdownName] = useState("");
  const [nestedDropdown, setNestedDropdown] = useState("");
  const [nestedDropdownEl, setNestedDropdownEl] = useState("");
  const [nestedDropdownName, setNestedDropdownName] = useState("");
  const [arrowRef, setArrowRef] = useState(null);
  const [mobileNavbar, setMobileNavbar] = useState(true);
  const [mobileView, setMobileView] = useState(false);

  const openMobileNavbar = () => setMobileNavbar(!mobileNavbar);

  useEffect(() => {
    function displayMobileNavbar() {
      if (window.innerWidth < breakpoints.values.lg) {
        setMobileView(true);
        setMobileNavbar(false);
      } else {
        setMobileView(false);
        setMobileNavbar(false);
      }
    }

    window.addEventListener("resize", displayMobileNavbar);
    displayMobileNavbar();

    return () => window.removeEventListener("resize", displayMobileNavbar);
  }, []);

  const renderNavbarItems = routes.map(
    ({ name, icon, image, href, route, collapse, notVisible }) => {
      if (!notVisible) {
        return (
          <NavbarDropdown
            key={name}
            name={name}
            icon={icon}
            href={href}
            route={route}
            image={image}
            collapse={Boolean(collapse)}
            onMouseEnter={({ currentTarget }) => {
              if (collapse) {
                setDropdown(currentTarget);
                setDropdownEl(currentTarget);
                setDropdownName(name);
              }
            }}
            onMouseLeave={() => (collapse ? setDropdown(null) : null)}
            light={light}
            bgColor={bgColor}
            variant={variant}
          />
        );
      }
      return null;
    }
  );

  const renderRoutes = routes.map(({ name, collapse, columns, rowsPerColumn }) => {
    let template;

    if (collapse && columns && name === dropdownName) {
      const calculateColumns = collapse.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / rowsPerColumn);

        if (!resultArray[chunkIndex]) {
          resultArray[chunkIndex] = [];
        }

        resultArray[chunkIndex].push(item);

        return resultArray;
      }, []);

      template = (
        <Grid key={name} container spacing={3} py={1} px={1.5}>
          {calculateColumns.map((cols, key) => {
            const gridKey = `grid-${key}`;
            const dividerKey = `divider-${key}`;

            return (
              <Grid key={gridKey} item xs={12 / columns} sx={{ position: "relative" }}>
                {cols.map((col, index) => (
                  <Fragment key={col.name}>
                    <TextSection
                      display="block"
                      variant="button"
                      fontWeight="regular"
                      textTransform="capitalize"
                      py={1}
                      px={0.5}
                      mt={index !== 0 ? 2 : 0}
                    >
                      {col.name}
                    </TextSection>
                    {col.collapse.map((item) => (
                      <TextSection
                        key={item.name}
                        component={item.route ? Link : MuiLink}
                        to={item.route ? item.route : ""}
                        href={item.href ? item.href : (e) => e.preventDefault()}
                        target={item.href ? "_blank" : ""}
                        rel={item.href ? "noreferrer" : "noreferrer"}
                        minWidth="11.25rem"
                        display="block"
                        variant="button"
                        color="text"
                        textTransform="capitalize"
                        fontWeight="regular"
                        py={0.625}
                        px={2}
                        sx={({ palette: { grey, dark }, borders: { borderRadius } }) => ({
                          borderRadius: borderRadius.md,
                          cursor: "pointer",
                          transition: "all 300ms linear",

                          "&:hover": {
                            backgroundColor: grey[200],
                            color: dark.main,
                          },
                        })}
                      >
                        {item.name}
                      </TextSection>
                    ))}
                  </Fragment>
                ))}
                {key !== 0 && (
                  <Divider
                    key={dividerKey}
                    orientation="vertical"
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "-4px",
                      transform: "translateY(-45%)",
                      height: "90%",
                    }}
                  />
                )}
              </Grid>
            );
          })}
        </Grid>
      );
    } else if (collapse && name === dropdownName) {
      template = collapse.map((item) => {
        const linkComponent = {
          component: MuiLink,
          href: item.href,
          target: "_blank",
          rel: "noreferrer",
        };

        const routeComponent = {
          component: Link,
          to: item.route,
        };

        return (
          <TextSection
            key={item.name}
            {...(item.route ? routeComponent : linkComponent)}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            variant="button"
            textTransform="capitalize"
            minWidth={item.description ? "14rem" : "12rem"}
            color={item.description ? "red" : "text"}
            fontWeight={item.description ? "bold" : "regular"}
            py={item.description ? 1 : 0.625}
            px={2}
            sx={({ palette: { grey, dark }, borders: { borderRadius } }) => ({
              borderRadius: borderRadius.md,
              cursor: "pointer",
              transition: "all 300ms linear",

              "&:hover": {
                backgroundColor: grey[200],
                color: dark.main,

                "& *": {
                  color: dark.main,
                },
              },
            })}
            onMouseEnter={({ currentTarget }) => {
              if (item.dropdown) {
                setNestedDropdown(currentTarget);
                setNestedDropdownEl(currentTarget);
                setNestedDropdownName(item.name);
              }
            }}
            onMouseLeave={() => {
              if (item.dropdown) {
                setNestedDropdown(null);
              }
            }}
          >
            {item.description ? (
              <Contenedor>
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
            ) : (
              item.name
            )}
            {item.collapse && (
              <Icon
                fontSize="small"
                sx={{ fontWeight: "regular", verticalAlign: "middle", mr: -0.5 }}
              >
                keyboard_arrow_right
              </Icon>
            )}
          </TextSection>
        );
      });
    }

    return template;
  });

  const dropdownMenu = (
    <Popper
      anchorEl={dropdown}
      popperRef={null}
      open={Boolean(dropdown)}
      placement="top-start"
      transition
      style={{ zIndex: 10 }}
      modifiers={[
        {
          name: "arrow",
          enabled: true,
          options: {
            element: arrowRef,
          },
        },
      ]}
      onMouseEnter={() => setDropdown(dropdownEl)}
      onMouseLeave={() => {
        if (!nestedDropdown) {
          setDropdown(null);
          setDropdownName("");
        }
      }}
    >
      {({ TransitionProps }) => (
        <Grow
          {...TransitionProps}
          sx={{
            transformOrigin: "left top",
            background: ({ palette: { white } }) => white.main,
          }}
        >
          <Contenedor borderRadius="md">
            <TextSection variant="h1" color="white">
              <Icon ref={setArrowRef} sx={{ mt: -3 }}>
                arrow_drop_up
              </Icon>
            </TextSection>
            <Contenedor shadow="md" borderRadius="md" p={2} mt={3}>
              {renderRoutes}
            </Contenedor>
          </Contenedor>
        </Grow>
      )}
    </Popper>
  );

  const renderNestedRoutes = routes.map(({ collapse, columns }) =>
    collapse && !columns
      ? collapse.map(({ name: parentName, collapse: nestedCollapse }) => {
          let template;

          if (parentName === nestedDropdownName) {
            template =
              nestedCollapse &&
              nestedCollapse.map((item) => {
                const linkComponent = {
                  component: MuiLink,
                  href: item.href,
                  target: "_blank",
                  rel: "noreferrer",
                };

                const routeComponent = {
                  component: Link,
                  to: item.route,
                };

                return (
                  <TextSection
                    key={item.name}
                    {...(item.route ? routeComponent : linkComponent)}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    variant="button"
                    textTransform="capitalize"
                    minWidth={item.description ? "14rem" : "12rem"}
                    color={item.description ? "dark" : "text"}
                    fontWeight={item.description ? "bold" : "regular"}
                    py={item.description ? 1 : 0.625}
                    px={2}
                    sx={({ palette: { grey, dark }, borders: { borderRadius } }) => ({
                      borderRadius: borderRadius.md,
                      cursor: "pointer",
                      transition: "all 300ms linear",

                      "&:hover": {
                        backgroundColor: grey[200],
                        color: dark.main,

                        "& *": {
                          color: dark.main,
                        },
                      },
                    })}
                  >
                    {item.description ? (
                      <Contenedor>
                        {item.name}
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
                    ) : (
                      item.name
                    )}
                    {item.collapse && (
                      <Icon
                        fontSize="small"
                        sx={{ fontWeight: "regular", verticalAlign: "middle", mr: -0.5 }}
                      >
                        keyboard_arrow_right
                      </Icon>
                    )}
                  </TextSection>
                );
              });
          }

          return template;
        })
      : null
  );

  const nestedDropdownMenu = (
    <Popper
      anchorEl={nestedDropdown}
      popperRef={null}
      open={Boolean(nestedDropdown)}
      placement="right-start"
      transition
      style={{ zIndex: 10 }}
      onMouseEnter={() => {
        setNestedDropdown(nestedDropdownEl);
      }}
      onMouseLeave={() => {
        setNestedDropdown(null);
        setNestedDropdownName("");
        setDropdown(null);
      }}
    >
      {({ TransitionProps }) => (
        <Grow
          {...TransitionProps}
          sx={{
            transformOrigin: "left top",
            background: ({ palette: { white } }) => white.main,
          }}
        >
          <Contenedor ml={2.5} mt={-2.5} borderRadius="lg">
            <Contenedor shadow="lg" borderRadius="lg" py={1.5} px={1} mt={2}>
              {renderNestedRoutes}
            </Contenedor>
          </Contenedor>
        </Grow>
      )}
    </Popper>
  );

  return (
    <Contenedor sx={sticky ? { position: "sticky", top: 0, zIndex: 10 } : null}>
      <Contenedor
        py={1}
        px={{ xs: 0, sm: transparent ? 0 : 0, lg: transparent ? 0 : 0 }}
        my={relative ? 0 : 0}
        mx={relative ? 0 : 0}
        width="100%"
        borderRadius="none"
        color={light ? "white" : "dark"}
        position={relative ? "relative" : "absolute"}
        left={0}
        zIndex={3}
        sx={() => ({
          backgroundImage: `linear-gradient(to right, ${bgColor1},  ${bgColor2})`,
          backdropFilter: transparent ? "none" : `saturate(200%) blur(30px)`,
        })}
      >
        <Contenedor
          bgColor={bgColor}
          variant={variant}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Contenedor
            bgColor={bgColor}
            variant={variant}
            component={Link}
            to="/"
            lineHeight={1}
            py={transparent ? 1.5 : 1.25}
            pl={relative || transparent ? 0 : { xs: 2, lg: 3 }}
          >
            <Fade in timeout={1000}>
              <Contenedor
                component="img"
                src={purpWhite}
                sx={{
                  height: { xs: 25, lg: 38 },
                  filter: "drop-shadow(0 0 0.1rem black)",
                }}
                position="relative"
                zIndex={1}
              />
            </Fade>
          </Contenedor>
          <Contenedor
            color="inherit"
            display={{ xs: "none", lg: "flex" }}
            ml="auto"
            mr={center ? "auto" : 0}
          >
            {renderNavbarItems}
          </Contenedor>
          <Contenedor ml={{ xs: "auto", lg: 0 }}>
            {action &&
              (action.type === "internal" ? (
                <Button
                  component={Link}
                  to={action.route}
                  variant={
                    action.color === "white" || action.color === "default"
                      ? "contained"
                      : "gradient"
                  }
                  color={action.color ? action.color : "info"}
                  size="small"
                >
                  {action.label}
                </Button>
              ) : (
                <Button
                  component="a"
                  href={action.route}
                  target="_blank"
                  rel="noreferrer"
                  variant={
                    action.color === "white" || action.color === "default"
                      ? "contained"
                      : "gradient"
                  }
                  color={action.color ? action.color : "info"}
                  size="small"
                >
                  {action.label}
                </Button>
              ))}
          </Contenedor>
          <Contenedor
            display={{ xs: "inline-block", lg: "none" }}
            lineHeight={0}
            py={1.5}
            pl={1.5}
            color="white"
            sx={{ cursor: "pointer" }}
            onClick={openMobileNavbar}
          >
            <Icon fontSize="default">{mobileNavbar ? "close" : "menu"}</Icon>
          </Contenedor>
        </Contenedor>
        <Contenedor
          bgColor={transparent ? "white" : "transparent"}
          shadow={transparent ? "lg" : "none"}
          borderRadius="xl"
          px={transparent ? 2 : 0}
        >
          {mobileView && <NavbarMobile routes={routes} open={mobileNavbar} />}
        </Contenedor>
        <Contenedor
          py={0.5}
          width="100%"
          position={relative ? "relative" : "absolute"}
          left={0}
          sx={() => ({
            backgroundColor: "#FFCC00",
            backdropFilter: transparent ? "none" : `saturate(200%) blur(30px)`,
          })}
        />
      </Contenedor>
      {dropdownMenu}
      {nestedDropdownMenu}
    </Contenedor>
  );
}

DefaultNavbar.defaultProps = {
  brand: "PURP TITLE",
  transparent: false,
  light: false,
  action: false,
  sticky: false,
  relative: false,
  center: false,
};

DefaultNavbar.propTypes = {
  brand: PropTypes.string,
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.string,
      image: PropTypes.string,
      href: PropTypes.string,
      route: PropTypes.string,
      collapse: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          route: PropTypes.string,
          href: PropTypes.string,
          description: PropTypes.string,
          collapse: PropTypes.arrayOf(
            PropTypes.shape({
              name: PropTypes.string.isRequired,
              route: PropTypes.string,
              href: PropTypes.string,
              description: PropTypes.string,
              collapse: PropTypes.arrayOf(
                PropTypes.shape({
                  name: PropTypes.string.isRequired,
                  route: PropTypes.string,
                  href: PropTypes.string,
                  description: PropTypes.string,
                })
              ),
            })
          ),
        })
      ),
      notVisible: PropTypes.bool,
    })
  ).isRequired,
  transparent: PropTypes.bool,
  light: PropTypes.bool,
  action: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      type: PropTypes.oneOf(["external", "internal"]).isRequired,
      route: PropTypes.string.isRequired,
      color: PropTypes.oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "dark",
        "light",
        "default",
        "white",
      ]),
      label: PropTypes.string.isRequired,
    }),
  ]),
  sticky: PropTypes.bool,
  relative: PropTypes.bool,
  center: PropTypes.bool,
};

export default DefaultNavbar;
