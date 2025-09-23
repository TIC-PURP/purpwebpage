import { Card, Container, Fade, Grid, useMediaQuery } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextSection from "../../../../components/TextSection";
import Contenedor from "../../../../components/Contenedor";
import inicio from "../../../../assets/images/PURP_WEB/5.AGRONEGOCIOS/SECCION_INFORMATIVA/INICIO.png";
import logo from "../../../../assets/images/PURP_WEB/5.AGRONEGOCIOS/LOGO_PURP.png";

const theme = createTheme();

theme.typography.h1 = {
  fontSize: "1rem",
  "@media (min-width:600px)": {
    fontSize: "2rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.5rem",
  },
};

function Principal() {
  // eslint-disable-next-line no-shadow
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <Card>
      <Contenedor
        sx={{
          backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0),
              rgba(gradients.dark.state, 0)
            )}, url(${inicio})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        py={4}
      >
        <Fade in timeout={5000}>
          <Container>
            <Grid
              container
              direction="row-reverse" // Esto mueve la imagen a la derecha
              xs={10}
              lg={12}
              mb={{ xs: 0, sm: 8, md: 4, lg: 4 }}
              mt={{ xs: 6, sm: 4, md: 8, lg: 10 }}
            >
              <Contenedor
                component="img"
                src={logo}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  width: "25%", // Ajusta el ancho deseado para pantallas grandes
                  maxHeight: "60vh",
                  filter: "drop-shadow(0 0 0.1rem black)",
                }}
              />
            </Grid>
          </Container>
        </Fade>
        <Contenedor
          sx={{ bgcolor: "#468203" }}
          width="100%"
          opacity={0.6}
          py={isMobile ? 3 : { xs: 3, sm: 3, md: 6, lg: 6, xxl: 6 }} // Ajusta el espaciado en dispositivos móviles
          mt={isMobile ? 7 : { xs: 0, sm: 10, md: 10, lg: -8, xxl: -8 }} // Ajusta el margen superior en dispositivos móviles
          mb={isMobile ? 0 : { xs: 0, sm: -14.6, md: -14, lg: 0, xxl: 0 }} // Ajusta el margen inferior en dispositivos móviles
          zindex={1}
          position="relative"
        />
        <Fade in="true" timeout={3000}>
          <Contenedor
            position="relative"
            sx={{
              filter: "drop-shadow(0 0 0.2rem black)",
            }}
            zIndex={1}
            py={isMobile ? 2 : { xs: 2, sm: 3, md: 3, lg: 3, xxl: 3 }} // Ajusta el espaciado vertical en dispositivos móviles
            mt={isMobile ? -10 : { xs: 0, sm: 3, md: -6, lg: -14, xxl: -14 }} // Ajusta el margen superior en dispositivos móviles
            mb={isMobile ? -3.3 : { xs: 0, sm: -5.3, md: -3, lg: 20, xxl: 20 }} // Ajusta el margen inferior en dispositivos móviles
          >
            <ThemeProvider theme={theme}>
              <TextSection sx={{ color: "#ffffff" }} textAlign="center" variant="h1" mt={2}>
                INSUMOS AGRÍCOLAS
              </TextSection>
            </ThemeProvider>
          </Contenedor>
        </Fade>
      </Contenedor>
    </Card>
  );
}
export default Principal;
