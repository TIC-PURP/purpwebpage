import { Grid, Card, Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Contenedor from "../../../../components/Contenedor";
import TextSection from "../../../../components/TextSection";
import Modalbutton from "../../../../components/ModalButton/index";

// Image
import Certificado from "../../../../assets/images/PURP_WEB/5.AGRONEGOCIOS/ZH/SELLO_SEMILLAS_CERTIFICADAS_EN.png";
import Mfrijol from "../../../../assets/images/PURP_WEB/5.AGRONEGOCIOS/ZH/MODALfrijol_ZH.jpg";
import Mgarbanzo from "../../../../assets/images/PURP_WEB/5.AGRONEGOCIOS/ZH/MODALgarbanzo_ZH.jpg";
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
                  錫那羅亞白鷹嘴豆
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
                descripcionBoton="閱讀更多"
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
                  無花果和王豆
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
                descripcionBoton="閱讀更多"
              />
            </Contenedor>
          </Contenedor>
        </Grid>
      </Container>
    </Contenedor>
  );
}
export default Informativa;
