// react-router-dom components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Contenedor from "../Contenedor";
// Sustituye MKTypography
import TextSection from "../TextSection";
import telefono from "../../assets/images/PURP_WEB/ADVERTENCIA/cel.png";
import Facebook from "../../assets/images/PURP_WEB/ADVERTENCIA/facebook.svg";
import Twitter from "../../assets/images/PURP_WEB/ADVERTENCIA/twitter.svg";
import Instagram from "../../assets/images/PURP_WEB/ADVERTENCIA/instagram.svg";

const theme = createTheme({
  typography: {
    h2: {
      fontSize: "0.8rem",
      "@media (min-width:600px)": { fontSize: "0.8rem" },
      "@media (min-width:960px)": { fontSize: "1rem" },
      "@media (min-width:1280px)": { fontSize: "1.1rem" },
    },
    h6: {
      fontSize: "0.7rem",
      "@media (min-width:600px)": { fontSize: "0.7rem" },
      "@media (min-width:960px)": { fontSize: "0.7rem" },
      "@media (min-width:1280px)": { fontSize: "0.7rem" },
    },
  },
});
/* theme.typography.h6 = {
  fontSize: "0.8rem",
  "@media (min-width:600px)": {
    fontSize: "2rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.1rem",
  },
  [theme.breakpoints.up("xs")]: {
    fontSize: "0.7rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1rem",
  },
}; */

// eslint-disable-next-line react/prop-types
function Footer({ content, ColorFondo }) {
  const { menus, copyright, Title, Aviso } = content;

  return (
    <Contenedor
      sx={{
        p: 1,
        m: -1,
        bgcolor: ColorFondo,
      }}
    >
      <Grid container item xs={12} justifyContent="center" alignItems="center" sx={{ mx: "auto" }}>
        {Title}
      </Grid>
      <Grid item xs={12} spacing={8} alignItems="center" sx={{ mx: "auto" }}>
        <Contenedor
          component="footer"
          textAlign="center"
          mb={{ xs: 0, sm: -3, md: 0, lg: -1 }}
          mt={{ xs: 0, sm: 0, md: 0, lg: 0 }}
          p={1}
          method="post"
        >
          <Container>
            <Grid container spacing={3} mb={3}>
              {menus.map(({ name: title, items }) => (
                <Grid key={title} item xs={12} md={4} lg={4}>
                  <ThemeProvider theme={theme}>
                    <TextSection
                      display="block"
                      textAlign="center"
                      variant="h2"
                      sx={{ color: "#ffffff" }}
                      fontWeight="bold"
                      textTransform="capitalize"
                      mb={0}
                      mt={2}
                    >
                      {title}
                    </TextSection>
                  </ThemeProvider>
                  <Contenedor component="ul" p={0} m={0} sx={{ listStyle: "none" }}>
                    {items.map(({ name, route, href }) => (
                      <ThemeProvider theme={theme}>
                        <Contenedor key={name} component="li" p={0} m={0} lineHeight={1}>
                          {href ? (
                            <TextSection
                              component="a"
                              href={href}
                              target="_blank"
                              rel="noreferrer"
                              variant="h6"
                              underline=" "
                              sx={{
                                color: "white",
                                "&:hover": {
                                  cursor: "pointer",
                                  color: "#FFCC00",
                                },
                              }}
                              fontWeight="regular"
                              textTransform="capitalize"
                            >
                              {name}
                            </TextSection>
                          ) : (
                            <TextSection
                              component={Link}
                              to={route}
                              variant="h6"
                              fontWeight="regular"
                              textTransform="capitalize"
                            >
                              {name}
                            </TextSection>
                          )}
                        </Contenedor>
                      </ThemeProvider>
                    ))}
                  </Contenedor>
                </Grid>
              ))}
            </Grid>
          </Container>
          <Grid
            container // esta ocacionando que no fincionen los botone de COMPRAR AHORA
            spacing={{ xs: 2, sm: 8, md: 8, lg: 30 }}
            sx={{ px: "auto" }}
            justifyContent="center"
            textAlign="center"
          >
            <Grid item>
              <ThemeProvider theme={theme}>
                <Contenedor>
                  <Grid container mt={{ xs: 2, lg: 5 }}>
                    <Contenedor
                      component="img"
                      src={telefono}
                      maxWidth="2rem"
                      mt={{ xs: -0.5, md: 0, lg: 0 }}
                    />
                    <TextSection
                      variant="h6"
                      textAlign="center"
                      sx={{ color: "#ffffff", px: "auto" }}
                    >
                      (687) 872 4548
                    </TextSection>
                  </Grid>
                </Contenedor>
              </ThemeProvider>
            </Grid>
            <Grid item xs={3.8} sm={3} lg={3} sx={{ textAlign: "center" }}>
              {copyright}
              <Contenedor textAlign="center">
                <a
                  href="https://www.facebook.com/PURPGVE?mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Contenedor
                    component="img"
                    src={Facebook}
                    maxWidth="1.3rem"
                    sx={{
                      margin: "0 0.3rem",
                      transition: "transform 0.2s", // Agregamos una transición a la propiedad transform
                      "&:hover": {
                        transform: "scale(1.1)", // Escalamos la imagen al 110% cuando el cursor está encima
                      },
                    }}
                  />
                </a>

                <a
                  href="https://www.instagram.com/purp_oficial/?igshid=MTIyMzRjYmRlZg%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Contenedor
                    component="img"
                    src={Instagram}
                    maxWidth="1.2rem"
                    sx={{
                      margin: "0 0.3rem",
                      transition: "transform 0.2s",
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                    }}
                  />
                </a>
                <a
                  href="https://twitter.com/PURP_GVEOFICIAL"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Contenedor
                    component="img"
                    src={Twitter}
                    maxWidth="1.3rem"
                    sx={{
                      margin: "0 0.3rem",
                      transition: "transform 0.2s",
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                    }}
                  />
                </a>
              </Contenedor>
            </Grid>
            <Grid item>
              <ThemeProvider theme={theme}>
                <Contenedor>
                  <Grid mt={2}>{Aviso}</Grid>
                </Contenedor>
              </ThemeProvider>
            </Grid>
          </Grid>
        </Contenedor>
      </Grid>
    </Contenedor>
  );
}

// Typechecking props for the Footer
Footer.propTypes = {
  content: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.object, PropTypes.array])).isRequired,
};

export default Footer;
