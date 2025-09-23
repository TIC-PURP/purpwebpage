import { Card, Grid, Link, Tooltip } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Contenedor from "components/Contenedor";
import TextSection from "../../../components/TextSection";
import Button from "../../../components/Button";
import ContenedorBloques from "../../../pages/components/ContendorBloques";
import footerRoutes from "../../../routes_EN/footer.routes";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import Informativa from "./Secction/SeccionInformativa_EN";
import SemillaCertificada from "./Secction/SemillaCertificada_EN";
import NutricionVegetal from "./Secction/NutricionVegetal_EN";
import Burbuja from "../../../pages/components/BubbleWhatsApp";
// Routes
// eslint-disable-next-line import/no-cycle
import routes from "../../../routes_EN/routes";
import Principal from "./Secction/Principal_EN";
import aspro from "../../../assets/images/PURP_WEB/5.AGRONEGOCIOS/EN/SEMILLAMAIZ_EN.jpg";
import pdf from "../../../assets/images/PURP_WEB/5.AGRONEGOCIOS/EN/ROTAFOLIO_ASPROS_EN.pdf";

const theme = createTheme();

theme.typography.h5 = {
  fontSize: "0.82rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "1rem",
  },
};
theme.typography.h6 = {
  fontSize: "0.8rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "0.9rem",
  },
};
theme.typography.button = {
  fontSize: "0.7rem",
  "@media (min-width:600px)": {
    fontSize: "1rem",
  },
};

function Agronegocios() {
  return (
    <>
      <Card>
        <Navbar routes={routes} light sticky bgColor1="#494949" bgColor2="#468203" />
        <Principal />
        <Contenedor bgColor="#dadada" py={{ xs: 0.4, lg: 0.6, xxl: 0.7 }} />
        <Contenedor bgColor="#fffffff">
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={11}
            justifyContent="center"
            sx={{ mx: "auto" }}
            mt={{ xs: 0, md: 0, lg: 0 }}
          >
            <ThemeProvider theme={theme}>
              <TextSection
                variant="h5"
                sx={{ color: "#5B524D" }}
                textAlign="center"
                fontWeight="regular"
                mt={4}
                mb={6}
              >
                We enhance the performance of your crop through certified seeds, protection and
                nutrition programs. Our experts provide you with qualified technical advice to
                facilitate the implementation of solutions for your field.
              </TextSection>
            </ThemeProvider>
          </Grid>
        </Contenedor>
        <Informativa />
        <Contenedor bgColor="#dadada" py={{ xs: 0.4, lg: 0.6 }} />
        <NutricionVegetal />
        <Contenedor bgColor="#dadada" py={{ xs: 0.4, lg: 0.6 }} />
        <Contenedor>
          <ThemeProvider theme={theme}>
            <TextSection
              variant="h6"
              textAlign="center"
              mt={{ xs: 4, sm: 0, md: 0, lg: 6 }}
              mb={{ xs: 0, sm: 0, md: 0, lg: 3 }}
              sx={{ color: "#5B524D" }}
            >
              CERTIFIED SEEDS
            </TextSection>
            <TextSection
              variant="h5"
              fontWeight="regular"
              textAlign="center"
              sx={{ color: "#5B524D" }}
              mb={{ xs: 0, sm: 0, md: 0, lg: 6 }}
            >
              Our seed is certified by organizations external to the company.
            </TextSection>
          </ThemeProvider>
        </Contenedor>
        <SemillaCertificada />
        <ContenedorBloques bgColor="#ffffff" ContainerSize={0.5} />
        <Contenedor>
          <Contenedor component="img" src={aspro} width="100%" maxHeight="93vh" minHeight="36vh" />
          <Grid textAlign="center" zIndex={1} mt={{ xs: -5.5, md: -5.2, lg: -8 }}>
            <Link target="_blank" rel="noreferrer" href={pdf} underline="hover">
              <Button variant="gradient" size="small" color="success">
                <ThemeProvider theme={theme}>
                  <Tooltip title="More information!">
                    <TextSection sx={{ color: "#ffffff" }} fontWeight="bold" variant="button">
                      Data Sheet
                    </TextSection>
                  </Tooltip>
                </ThemeProvider>
              </Button>
            </Link>
          </Grid>
        </Contenedor>
        <Burbuja
          sub="Company account"
          text1="Hello 👋"
          text2="How can I help you?"
          phMensaje="Write a message"
          btn="Send"
        />
        <Contenedor bgColor="#dadada" py={{ xs: 0.4, lg: 0.6 }} mt={{ xs: 0, lg: 2 }} />
        <Contenedor pt={1} px={1} mt={0}>
          <Footer content={footerRoutes} ColorFondo="#5B524D" />
        </Contenedor>
        <ContenedorBloques bgColor="#FFCC00" ContainerSize={0.5} />
      </Card>
    </>
  );
}

export default Agronegocios;
