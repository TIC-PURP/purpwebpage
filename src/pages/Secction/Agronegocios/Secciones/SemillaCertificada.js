import { Grid, Card, Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Contenedor from "../../../../components/Contenedor";
import TextSection from "../../../../components/TextSection";
import Modalbutton from "../../../../components/ModalButton/index";

// Image
import Certificado from "../../../../assets/images/PURP_WEB/5.AGRONEGOCIOS/SEMILLAS_CERTIFICADAS/SELLO_SEMILLAS_CERTIFICADAS.png";
import Mfrijol from "../../../../assets/images/PURP_WEB/5.AGRONEGOCIOS/SEMILLAS_CERTIFICADAS/MODALfrijol.png";
import Mgarbanzo from "../../../../assets/images/PURP_WEB/5.AGRONEGOCIOS/SEMILLAS_CERTIFICADAS/MODALgarbanzo.png";
import garbanzo from "../../../../assets/images/PURP_WEB/5.AGRONEGOCIOS/SEMILLAS_CERTIFICADAS/FONDO_GARBANZO.png";
import frijol from "../../../../assets/images/PURP_WEB/5.AGRONEGOCIOS/SEMILLAS_CERTIFICADAS/FONDO_FRIJOLES.png";

const theme = createTheme();

theme.typography.h4 = {
  fontSize: "1rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "1rem",
  },
};

function Informativa() {
  return (
    <Contenedor>
      <Container>
        <Grid display="flex" mb={4}>
          <Contenedor mt={2}>
            <Contenedor textAlign="center" bgColor="white" mb={2}>
              <ThemeProvider theme={theme}>
                <TextSection
                  variant="h4"
                  textTransform="capitalize"
                  fontWeight="regular"
                  sx={{ color: "#5B524D" }}
                >
                  Garbanzo Blanco Sinaloa
                </TextSection>
              </ThemeProvider>
            </Contenedor>
            <Card component="img" src={garbanzo} width="100%" maxHeight="100vh" />
            <Contenedor bgColor="warning" py={0.5} />
            <Contenedor mt={2} textAlign="center">
              <Modalbutton
                imagen={Mgarbanzo}
                direccionModal="left"
                ColorButton="success"
                Size="small"
                descripcionBoton="Ficha técnica"
              />
            </Contenedor>
          </Contenedor>
          <Contenedor
            component="img"
            src={Certificado}
            style={{ maxWidth: "30%", height: "30%" }}
          />
          <Contenedor mt={2}>
            <Contenedor textAlign="center" bgColor="white" mb={2}>
              <ThemeProvider theme={theme}>
                <TextSection
                  variant="h4"
                  textTransform="capitalize"
                  fontWeight="regular"
                  sx={{ color: "#5B524D" }}
                >
                  Frijol Higuera y Reyna
                </TextSection>
              </ThemeProvider>
            </Contenedor>
            <Card component="img" src={frijol} width="100%" maxHeight="100vh" />
            <Contenedor bgColor="warning" py={0.5} />
            <Contenedor mt={2} textAlign="center">
              <Modalbutton
                imagen={Mfrijol}
                direccionModal="left"
                ColorButton="success"
                Size="small"
                descripcionBoton="Ficha técnica"
              />
            </Contenedor>
          </Contenedor>
        </Grid>
      </Container>
    </Contenedor>
  );
}
export default Informativa;
