import { useState } from "react";
import Slide from "@mui/material/Slide";
import { Link } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Contenedor from "components/Contenedor";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Icontext from "./IconText";
import ContenedorBloques from "./ContendorBloques";
import Button from "../../components/Button";
import TextSection from "../../components/TextSection";

// ICON
import telefono from "../../assets/images/PURP_WEB/ADVERTENCIA/cel.png";
import facebook from "../../assets/images/PURP_WEB/ADVERTENCIA/facebook.svg";
import insta from "../../assets/images/PURP_WEB/ADVERTENCIA/instagram.svg";
import twitter from "../../assets/images/PURP_WEB/ADVERTENCIA/twitter.svg";

const theme = createTheme();

theme.typography.h2 = {
  fontSize: "1rem",
  "@media (min-width:600px)": {
    fontSize: "2rem",
  },
};
theme.typography.h4 = {
  fontSize: "0.8rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
  },
};
theme.typography.h5 = {
  fontSize: "0.8rem",
  "@media (min-width:600px)": {
    fontSize: "1.2rem",
  },
};
theme.typography.h6 = {
  fontSize: "0.6rem",
  "@media (min-width:600px)": {
    fontSize: "1rem",
  },
};

// eslint-disable-next-line react/prop-types
function Advertencia({ advertenciaShow }) {
  // eslint-disable-next-line no-unneeded-ternary
  const [show, setShow] = useState(advertenciaShow ? advertenciaShow : false);
  const toggleModal = () => setShow(!show);

  return (
    <Contenedor
      open={show}
      onClose={toggleModal}
      sx={{ position: "sticky", top: 0, zIndex: 10 }}
      top={{ xs: 270, sm: 510, md: 200, lg: 408, xxl: 530 }}
    >
      <Slide direction="up" in={show} timeout={500}>
        <Contenedor position="absolute" width="100%" bgColor="black" opacity={0.8}>
          <Container>
            <Grid>
              <Contenedor zindex={1}>
                <Grid xs={10} sm={10} md={12} lg={12} xxl={12}>
                  <ThemeProvider theme={theme}>
                    <TextSection variant="h2" sx={{ color: "white" }}>
                      ¡NO SEA VÍCTIMA DE FRAUDE!
                    </TextSection>
                    <TextSection
                      variant="h5"
                      sx={{ color: "white" }}
                      fontWeight="regular"
                      textAlign="justify"
                    >
                      Alerta de estafadores que se hacen pasar por nuestra marca.
                    </TextSection>
                    <TextSection variant="h4" sx={{ color: "white" }} mt={2} mb={2}>
                      Únicos datos oficiales de contacto:
                    </TextSection>
                  </ThemeProvider>
                </Grid>
                <Grid display="flex">
                  <Grid item xs={6} sm={5} md={4} lg={10}>
                    <ThemeProvider theme={theme}>
                      <Icontext
                        color="white"
                        imagen={telefono}
                        maxWidth="3rem"
                        variante="h6"
                        Texto="(+52) 687 8724548"
                        mt={{ xs: -1, lg: -1.5 }}
                      />
                    </ThemeProvider>
                  </Grid>
                  <Grid item xs={5} sm={4} md={3} lg={8}>
                    <Link
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.facebook.com/PURPGVE?mibextid=ZbWKwL"
                      underline="hover"
                    >
                      <ThemeProvider theme={theme}>
                        <Icontext
                          color="white"
                          imagen={facebook}
                          maxWidth="3rem"
                          variante="h6"
                          Texto="PURPGVE"
                          mt={-1.5}
                        />
                      </ThemeProvider>
                    </Link>
                  </Grid>
                  <Grid item xs={5} sm={4} md={3} lg={8}>
                    <Link
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.instagram.com/purp_oficial/?igshid=MTIyMzRjYmRlZg%3D%3D"
                      underline="hover"
                    >
                      <ThemeProvider theme={theme}>
                        <Icontext
                          color="white"
                          imagen={insta}
                          maxWidth="3rem"
                          variante="h6"
                          Texto="purp_oficial"
                          mt={-1.5}
                        />
                      </ThemeProvider>
                    </Link>
                  </Grid>
                  <Grid item xs={3} sm={5} md={3} lg={12}>
                    <Link
                      target="_blank"
                      rel="noreferrer"
                      href="https://twitter.com/PURP_GVEOFICIAL"
                      underline="hover"
                    >
                      <ThemeProvider theme={theme}>
                        <Icontext
                          color="white"
                          imagen={twitter}
                          maxWidth="3rem"
                          variante="h6"
                          Texto="PURP_GVEOFICIAL"
                          mt={-1.5}
                        />
                      </ThemeProvider>
                    </Link>
                  </Grid>
                  <Grid item justifyContent="flex-end" direction="row-reverse">
                    <Contenedor
                      mx={{ xs: -20, lg: 10 }}
                      mt={{ xs: -8, md: 0, lg: -10 }}
                      mb={{ xs: 1, md: 0, lg: 4 }}
                    >
                      <Button variant="outlined" size="large" color="white" onClick={toggleModal}>
                        Cerrar
                      </Button>
                    </Contenedor>
                  </Grid>
                </Grid>
              </Contenedor>
            </Grid>
          </Container>
          <ContenedorBloques bgColor="#FFCC00" ContainerSize={0.5} />
        </Contenedor>
      </Slide>
    </Contenedor>
  );
}

export default Advertencia;
