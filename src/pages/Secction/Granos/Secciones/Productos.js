import { Container, Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Contenedor from "components/Contenedor";
import TextSection from "../../../../components/TextSection";
import Modalbutton from "../../../../components/ModalButton/index";
import Icontext from "../../../components/IconText";
import maiz from "../../../../assets/images/PURP_WEB/4.GRANOS/FONDO_MAIZ.jpg";
import frijol from "../../../../assets/images/PURP_WEB/4.GRANOS/FONDO_FRIJOL.jpg";
import garbanzo from "../../../../assets/images/PURP_WEB/4.GRANOS/FONDO_GARBANZO.jpg";
import sorgo from "../../../../assets/images/PURP_WEB/4.GRANOS/FONDO_SORGO.jpg";
import flecha from "../../../../assets/images/PURP_WEB/4.GRANOS/FLECHA_AMARILLA.png";
import FMaiz from "../../../../assets/images/PURP_WEB/4.GRANOS/Ficha_maiz.png";
import FFrijol from "../../../../assets/images/PURP_WEB/4.GRANOS/Ficha_frijol.png";
import FGarbanzo from "../../../../assets/images/PURP_WEB/4.GRANOS/Ficha_garbanzo.png";
import FSorgo from "../../../../assets/images/PURP_WEB/4.GRANOS/Ficha_sorgo.png";

const theme = createTheme();

theme.typography.h5 = {
  fontSize: "0.7rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
  },
};
theme.typography.h6 = {
  fontSize: "0.7rem",
  "@media (min-width:600px)": {
    fontSize: "1rem",
  },
};
theme.typography.h3 = {
  fontSize: "1rem",
  "@media (min-width:600px)": {
    fontSize: "1.8rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.5rem",
  },
};
theme.typography.h2 = {
  fontSize: "0.6rem",
  "@media (min-width:600px)": {
    fontSize: "2rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.9rem",
  },
};
theme.typography.h1 = {
  fontSize: "0.6rem",
  "@media (min-width:600px)": {
    fontSize: "2rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.9rem",
  },
};

function Productos() {
  return (
    <Contenedor bgColor="#dadada">
      <Contenedor
        minHeight="100%"
        width="100%"
        sx={{
          backgroundImage: `url(${frijol})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        id="frijol"
      >
        <Container>
          <Grid container direction="row-reverse">
            <Contenedor
              width="45%"
              sx={{
                backgroundImage: ({ palette: { azul }, functions: { linearGradient, rgba } }) =>
                  `${linearGradient(rgba(azul.main, 0.7), rgba(azul.main, 0.7))}`,
                backgroundSize: "cover",
              }}
              mt={{ xs: 0, md: 0, lg: 0 }}
            >
              <Grid mx={{ xs: 0.5, sm: 0.5, md: 0.5, lg: 8, xxl: 8 }} mb={{ xs: 6, lg: 3 }}>
                <ThemeProvider theme={theme}>
                  <TextSection
                    variant="h6"
                    fontWeight="regular"
                    textAlign="justify"
                    sx={{ color: "#ffffff" }}
                  >
                    <TextSection variant="h3" textAlign="center" sx={{ color: "#ffffff" }} mt={4}>
                      Frijol Peruano
                    </TextSection>
                    <TextSection
                      variant="h6"
                      sx={{ color: "#ffffff" }}
                      mt={{ xs: 2, lg: 4 }}
                      mb={{ xs: 1, lg: 1 }}
                    >
                      Presentación:
                    </TextSection>
                  </TextSection>
                  <Icontext
                    color="#ffffff"
                    imagen={flecha}
                    maxWidth="1rem"
                    variante="h6"
                    Texto="25 kg., 10 kg. y 1 kg."
                    mt={{ xs: -0.5, lg: -0.2 }}
                  />
                  <Icontext
                    color="#ffffff"
                    imagen={flecha}
                    maxWidth="1rem"
                    variante="h6"
                    Texto="20 y 50 libras."
                    mt={{ xs: -0.5, lg: -0.2 }}
                  />
                  <TextSection
                    variant="h6"
                    textAlign="row"
                    sx={{ color: "#ffffff" }}
                    mt={{ xs: 1, lg: 2 }}
                    mb={{ xs: 1, lg: 1 }}
                  >
                    Enviados por:
                  </TextSection>
                  <Icontext
                    color="#ffffff"
                    imagen={flecha}
                    maxWidth="1rem"
                    variante="h6"
                    Texto="Autotransporte"
                    mt={{ xs: -0.5, lg: -0.2 }}
                  />
                  <Icontext
                    color="#ffffff"
                    imagen={flecha}
                    maxWidth="1rem"
                    variante="h6"
                    Texto="Vía marítima"
                    mt={{ xs: -0.5, lg: -0.2 }}
                  />
                  <TextSection
                    variant="h6"
                    textAlign="row"
                    sx={{ color: "#ffffff" }}
                    mt={{ xs: 1, lg: 2 }}
                    mb={{ xs: 1, lg: 2 }}
                  >
                    Nuestros clientes son:
                  </TextSection>
                  <Icontext
                    color="#ffffff"
                    imagen={flecha}
                    maxWidth="1rem"
                    variante="h6"
                    Texto="Industriales"
                    mt={{ xs: -0.5, lg: -0.2 }}
                  />
                  <Icontext
                    color="#ffffff"
                    imagen={flecha}
                    maxWidth="1rem"
                    variante="h6"
                    Texto="Cadenas comerciales"
                    mt={{ xs: -0.5, lg: -0.2 }}
                  />
                  <Icontext
                    color="#ffffff"
                    imagen={flecha}
                    maxWidth="1rem"
                    variante="h6"
                    Texto="Nacional e Internacional"
                    mt={{ xs: -0.5, lg: -0.2 }}
                  />
                </ThemeProvider>
              </Grid>
            </Contenedor>
            <Contenedor
              mx={{ xs: -16.5, sm: -17.5, md: -17, lg: -50, xxl: -52 }}
              mt={{ xs: 41, sm: 47, md: 46, lg: 44, xxl: 44 }}
            >
              <Modalbutton
                imagen={FFrijol}
                direccionModal="right"
                descripcionBoton="Ficha técnica"
                Size="small"
                ColorButton="warning"
              />
            </Contenedor>
          </Grid>
        </Container>
      </Contenedor>
      <Contenedor bgColor="#fffffff" py={0.5} />
      <Contenedor
        minHeight="100%"
        width="100%"
        sx={{
          backgroundImage: `url(${maiz})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        id="maiz"
      >
        <Container>
          <Grid container direction="row-reverse">
            <Contenedor
              width="45%"
              sx={{
                backgroundImage: ({ palette: { azul }, functions: { linearGradient, rgba } }) =>
                  `${linearGradient(rgba(azul.main, 0.7), rgba(azul.main, 0.7))}`,
                backgroundSize: "cover",
              }}
              mt={{ xs: 0, md: 0, lg: 0 }}
            >
              <Grid mx={{ xs: 0.5, sm: 0.5, md: 0.5, lg: 8, xxl: 8 }} mb={{ xs: 6, lg: 3 }}>
                <ThemeProvider theme={theme}>
                  <TextSection
                    variant="h6"
                    fontWeight="regular"
                    textAlign="justify"
                    sx={{ color: "#ffffff" }}
                  >
                    <TextSection variant="h3" textAlign="center" sx={{ color: "#ffffff" }} mt={4}>
                      Maíz Blanco Sinaloa
                    </TextSection>
                    <TextSection
                      variant="h6"
                      sx={{ color: "#ffffff" }}
                      mt={{ xs: 2, lg: 4 }}
                      mb={{ xs: 1, lg: 1 }}
                    >
                      Presentación:
                    </TextSection>
                  </TextSection>
                  <Icontext
                    color="#ffffff"
                    imagen={flecha}
                    maxWidth="1rem"
                    variante="h6"
                    Texto="Cribado y encostalado en 50 kg."
                    mt={{ xs: -0.5, lg: -0.2 }}
                  />
                  <Icontext
                    color="#ffffff"
                    imagen={flecha}
                    maxWidth="1rem"
                    variante="h6"
                    Texto="Granel"
                    mt={{ xs: -0.5, lg: -0.2 }}
                  />
                  <TextSection
                    variant="h6"
                    textAlign="row"
                    sx={{ color: "#ffffff" }}
                    mt={{ xs: 1, lg: 2 }}
                    mb={{ xs: 1, lg: 1 }}
                  >
                    Enviados por:
                  </TextSection>
                  <Icontext
                    color="#ffffff"
                    imagen={flecha}
                    maxWidth="1rem"
                    variante="h6"
                    Texto="Autotransporte"
                    mt={{ xs: -0.5, lg: -0.2 }}
                  />
                  <Icontext
                    color="#ffffff"
                    imagen={flecha}
                    maxWidth="1rem"
                    variante="h6"
                    Texto="Ferrocarril"
                    mt={{ xs: -0.5, lg: -0.2 }}
                  />
                  <Icontext
                    color="#ffffff"
                    imagen={flecha}
                    maxWidth="1rem"
                    variante="h6"
                    Texto="Vía marítima"
                    mt={{ xs: -0.5, lg: -0.2 }}
                  />
                  <TextSection
                    variant="h6"
                    textAlign="row"
                    sx={{ color: "#ffffff" }}
                    mt={{ xs: 1, lg: 2 }}
                    mb={{ xs: 1, lg: 2 }}
                  >
                    Nuestros clientes son:
                  </TextSection>
                  <Icontext
                    color="#ffffff"
                    imagen={flecha}
                    maxWidth="1rem"
                    variante="h6"
                    Texto="Cadenas de maíz y tortilla"
                    mt={{ xs: -0.5, lg: -0.2 }}
                  />
                  <Icontext
                    color="#ffffff"
                    imagen={flecha}
                    maxWidth="1rem"
                    variante="h6"
                    Texto="Industriales"
                    mt={{ xs: -0.5, lg: -0.2 }}
                  />
                  <Icontext
                    color="#ffffff"
                    imagen={flecha}
                    maxWidth="1rem"
                    variante="h6"
                    Texto="Cadenas comerciales"
                    mt={{ xs: -0.5, lg: -0.2 }}
                  />
                  <Icontext
                    color="#ffffff"
                    imagen={flecha}
                    maxWidth="1rem"
                    variante="h6"
                    Texto="Gobierno"
                    mt={{ xs: -0.5, lg: -0.2 }}
                  />
                </ThemeProvider>
              </Grid>
            </Contenedor>
            <Contenedor
              mx={{ xs: -16, sm: -17.5, md: -17, lg: -50, xxl: -52 }}
              mt={{ xs: 49, sm: 59, md: 52, lg: 50, xxl: 50 }}
            >
              <Modalbutton
                direccionModal="right"
                imagen={FMaiz}
                descripcionBoton="Ficha técnica"
                Size="small"
                ColorButton="warning"
              />
            </Contenedor>
          </Grid>
        </Container>
      </Contenedor>
      <Contenedor bgColor="#fffffff" py={0.5} />
      <Contenedor
        minHeight="100%"
        width="100%"
        sx={{
          backgroundImage: `url(${garbanzo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        id="garbanzo"
      >
        <Container>
          <Grid container direction="row-reverse">
            <Contenedor
              width="45%"
              sx={{
                backgroundImage: ({ palette: { azul }, functions: { linearGradient, rgba } }) =>
                  `${linearGradient(rgba(azul.main, 0.7), rgba(azul.main, 0.7))}`,
                backgroundSize: "cover",
              }}
              mt={{ xs: 0, md: 0, lg: 0 }}
            >
              <Grid mx={{ xs: 0.5, sm: 0.5, md: 0.5, lg: 8, xxl: 8 }} mb={{ xs: 7, lg: 3 }}>
                <ThemeProvider theme={theme}>
                  <TextSection
                    variant="h6"
                    fontWeight="regular"
                    textAlign="justify"
                    sx={{ color: "#ffffff" }}
                  >
                    <TextSection variant="h3" textAlign="center" sx={{ color: "#ffffff" }} mt={4}>
                      Garbanzo Blanco Sinaloa
                    </TextSection>
                    <TextSection
                      variant="h6"
                      sx={{ color: "#ffffff" }}
                      mt={{ xs: 2, lg: 4 }}
                      mb={{ xs: 1, lg: 1 }}
                    >
                      Presentación:
                    </TextSection>
                  </TextSection>
                  <Icontext
                    color="#ffffff"
                    imagen={flecha}
                    maxWidth="1rem"
                    variante="h6"
                    Texto="25kg y 1 kg."
                    mt={{ xs: -0.5, lg: -0.2 }}
                  />
                  <TextSection
                    variant="h6"
                    textAlign="row"
                    sx={{ color: "#ffffff" }}
                    mt={{ xs: 1, lg: 2 }}
                    mb={{ xs: 1, lg: 2 }}
                  >
                    Enviados por:
                  </TextSection>
                  <Icontext
                    color="#ffffff"
                    imagen={flecha}
                    maxWidth="1rem"
                    variante="h6"
                    Texto="Autotransporte"
                    mt={{ xs: -0.5, lg: -0.2 }}
                  />
                  <Icontext
                    color="#ffffff"
                    imagen={flecha}
                    maxWidth="1rem"
                    variante="h6"
                    Texto="Vía marítima"
                    mt={{ xs: -0.5, lg: -0.2 }}
                  />
                  <TextSection
                    variant="h6"
                    textAlign="row"
                    sx={{ color: "#ffffff" }}
                    mt={{ xs: 1, lg: 2 }}
                    mb={{ xs: 1, lg: 2 }}
                  >
                    Nuestros clientes son:
                  </TextSection>
                  <Icontext
                    color="#ffffff"
                    imagen={flecha}
                    maxWidth="1rem"
                    variante="h6"
                    Texto="Industriales"
                    mt={{ xs: -0.5, lg: -0.2 }}
                  />
                  <Icontext
                    color="#ffffff"
                    imagen={flecha}
                    maxWidth="1rem"
                    variante="h6"
                    Texto="Cadenas comerciales"
                    mt={{ xs: -0.5, lg: -0.2 }}
                  />
                  <Icontext
                    color="#ffffff"
                    imagen={flecha}
                    maxWidth="1rem"
                    variante="h6"
                    Texto="Nacional e Internacional"
                    mt={{ xs: -0.5, lg: -0.2 }}
                  />
                </ThemeProvider>
              </Grid>
            </Contenedor>
            <Contenedor
              mx={{ xs: -16.5, sm: -17.5, md: -17, lg: -50, xxl: -52 }}
              mt={{ xs: 42, sm: 50, md: 50, lg: 40, xxl: 40 }}
            >
              <Modalbutton
                direccionModal="right"
                imagen={FGarbanzo}
                descripcionBoton="Ficha técnica"
                Size="small"
                ColorButton="warning"
              />
            </Contenedor>
          </Grid>
        </Container>
      </Contenedor>
      <Contenedor bgColor="#fffffff" py={0.5} />
      <Contenedor
        minHeight="100%"
        width="100%"
        sx={{
          backgroundImage: `url(${sorgo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        id="sorgo"
      >
        <Container>
          <Grid container direction="row-reverse">
            <Contenedor
              width="45%"
              sx={{
                backgroundImage: ({ palette: { azul }, functions: { linearGradient, rgba } }) =>
                  `${linearGradient(rgba(azul.main, 0.7), rgba(azul.main, 0.7))}`,
                backgroundSize: "cover",
              }}
              mt={{ xs: 0, md: 0, lg: 0 }}
            >
              <Grid mx={{ xs: 0.5, sm: 0.5, md: 0.5, lg: 8, xxl: 8 }} mb={{ xs: 7, lg: 3 }}>
                <ThemeProvider theme={theme}>
                  <TextSection
                    variant="h6"
                    fontWeight="regular"
                    textAlign="justify"
                    sx={{ color: "#ffffff" }}
                  >
                    <TextSection
                      variant="h3"
                      textAlign="center"
                      sx={{ color: "#ffffff" }}
                      mt={4}
                      mb={4}
                    >
                      Sorgo Rojo
                    </TextSection>
                    <TextSection
                      variant="h6"
                      sx={{ color: "#ffffff" }}
                      mt={{ xs: 2, lg: 4 }}
                      mb={{ xs: 1, lg: 1 }}
                    >
                      Presentación:
                    </TextSection>
                  </TextSection>
                  <Icontext
                    color="#ffffff"
                    imagen={flecha}
                    maxWidth="1rem"
                    variante="h6"
                    Texto="Granel"
                    mt={{ xs: -0.5, lg: -0.2 }}
                  />
                  <TextSection
                    variant="h6"
                    textAlign="row"
                    sx={{ color: "#ffffff" }}
                    mt={{ xs: 1, lg: 2 }}
                    mb={{ xs: 1, lg: 2 }}
                  >
                    Enviados por:
                  </TextSection>
                  <Icontext
                    color="#ffffff"
                    imagen={flecha}
                    maxWidth="1rem"
                    variante="h6"
                    Texto="Autotransporte"
                    mt={{ xs: -0.5, lg: -0.2 }}
                  />
                  <Icontext
                    color="#ffffff"
                    imagen={flecha}
                    maxWidth="1rem"
                    variante="h6"
                    Texto="Ferrocarril"
                    mt={{ xs: -0.5, lg: -0.2 }}
                  />
                  <TextSection
                    variant="h6"
                    textAlign="row"
                    sx={{ color: "#ffffff" }}
                    mt={{ xs: 1, lg: 2 }}
                    mb={{ xs: 1, lg: 2 }}
                  >
                    Nuestros clientes son:
                  </TextSection>
                  <Icontext
                    color="#ffffff"
                    imagen={flecha}
                    maxWidth="1rem"
                    variante="h6"
                    Texto="Industriales"
                    mt={{ xs: -0.5, lg: -0.2 }}
                  />
                  <Icontext
                    color="#ffffff"
                    imagen={flecha}
                    maxWidth="1rem"
                    variante="h6"
                    Texto="Nacional e Internaconal"
                    mt={{ xs: -0.5, lg: -0.2 }}
                  />
                </ThemeProvider>
              </Grid>
            </Contenedor>
            <Contenedor
              mx={{ xs: -16, sm: -17.5, md: -17, lg: -50, xxl: -52 }}
              mt={{ xs: 37, sm: 43, md: 43, lg: 37, xxl: 38 }}
            >
              <Modalbutton
                imagen={FSorgo}
                direccionModal="right"
                descripcionBoton="Ficha técnica"
                Size="small"
                ColorButton="warning"
              />
            </Contenedor>
          </Grid>
        </Container>
      </Contenedor>
    </Contenedor>
  );
}

export default Productos;
