import { Card, Grid, Link, Tooltip } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Contenedor from "components/Contenedor";
import TextSection from "../../../components/TextSection";
import Button from "../../../components/Button";
import ContenedorBloques from "../../../pages/components/ContendorBloques";
import footerRoutes from "../../../routes_ZH/footer.routes";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import Informativa from "./Secciones/SeccionInformativa";
import SemillaCertificada from "./Secciones/SemillaCertificada";
import NutricionVegetal from "./Secciones/NutricionVegetal";
import Burbuja from "../../../pages/components/BubbleWhatsApp";
// Routes
// eslint-disable-next-line import/no-cycle
import routes from "../../../routes_ZH/routes";
import Principal from "./Secciones/Principal";
import aspro from "../../../assets/images/PURP_WEB/5.AGRONEGOCIOS/ZH/SEMILLAMAIZ_ZH.jpg";
import pdf from "../../../assets/images/PURP_WEB/5.AGRONEGOCIOS/ZH/ROTAFOLIO_ASPROS_ZH.pdf";

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
                我們透過經過認證的種子、保護和營養計劃來提高您作物的性能。
                我們的專家為您提供合格的技術建議，以促進您所在領域解決方案的實施。
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
              認證種子
            </TextSection>
            <TextSection
              variant="h5"
              fontWeight="regular"
              textAlign="center"
              sx={{ color: "#5B524D" }}
              mb={{ xs: 0, sm: 0, md: 0, lg: 6 }}
            >
              我們的種子經過公司外部組織的認證。
            </TextSection>
          </ThemeProvider>
        </Contenedor>
        <SemillaCertificada />
        <Contenedor bgColor="#ffffff" ContainerSize={0.5} />
        <Contenedor>
          <Contenedor component="img" src={aspro} width="100%" maxHeight="93vh" minHeight="36vh" />
          <Grid textAlign="center" zIndex={1} mt={{ xs: -5.5, md: -5.2, lg: -8 }}>
            <Link target="_blank" rel="noreferrer" href={pdf} underline="hover">
              <Button variant="gradient" size="small" color="success">
                <ThemeProvider theme={theme}>
                  <Tooltip title="更多信息！">
                    <TextSection sx={{ color: "#ffffff" }} fontWeight="bold" variant="button">
                      數據表
                    </TextSection>
                  </Tooltip>
                </ThemeProvider>
              </Button>
            </Link>
          </Grid>
        </Contenedor>
        <Burbuja
          sub="公司账户"
          text1="你好 👋"
          text2="我怎么帮你？"
          phMensaje="写一个信息"
          btn="发送"
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
