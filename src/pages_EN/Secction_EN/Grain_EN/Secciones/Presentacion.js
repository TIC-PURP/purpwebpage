import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container, Grid, Fade, IconButton } from "@mui/material";
import MyAnimacion from "../../../../pages/components/animacion";
import TextSection from "../../../../components/TextSection";
import Contenedor from "../../../../components/Contenedor";
import Inicio from "../../../../assets/images/PURP_WEB/4.GRANOS/INICIO.png";
import Round from "../../../../components/Round";
import maiz from "../../../../assets/images/PURP_WEB/4.GRANOS/MAIZ.png";
import frijol from "../../../../assets/images/PURP_WEB/4.GRANOS/FRIJOL.png";
import garbanzo from "../../../../assets/images/PURP_WEB/4.GRANOS/GARBANZO.png";
import sorgo from "../../../../assets/images/PURP_WEB/4.GRANOS/SORGO.png";

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
theme.typography.h5 = {
  fontSize: "1rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
  },
};

function Presentacion() {
  const handleBeanButtonClick = () => {
    const BeanSection = document.getElementById("Bean");
    if (BeanSection) {
      BeanSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleCornButtonClick = () => {
    const CornSection = document.getElementById("Corn");
    if (CornSection) {
      CornSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleChickpeaButtonClick = () => {
    const ChickpeaSection = document.getElementById("Chickpea");
    if (ChickpeaSection) {
      ChickpeaSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleSorghumButtonClick = () => {
    const SorghumSection = document.getElementById("Sorghum");
    if (SorghumSection) {
      SorghumSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Contenedor bgColor="white">
        <Contenedor component="img" src={Inicio} width="100%" maxHeight="100vh" minHeight="50vh" />
        <Contenedor
          mt={{ xs: -24, sm: -30, md: -35, lg: -59, xxl: -62 }}
          mb={{ xs: 14, sm: 14, md: 20, lg: 20, xxl: 24 }}
        >
          <Container>
            <Grid container xs={12} md={12} lg={12} justifyContent="center">
              <Grid>
                <IconButton onClick={handleBeanButtonClick} color="white">
                  <MyAnimacion>
                    <Round
                      src={frijol}
                      size="xxl"
                      shadow="xxl"
                      sx={{ border: "6px solid white", mt: { xs: -0.5, lg: 0 } }}
                    />
                  </MyAnimacion>
                </IconButton>
                <ThemeProvider theme={theme}>
                  <TextSection
                    textAlign="center"
                    fontWeight="regular"
                    sx={{ color: "#ffffff" }}
                    variant="h5"
                    mt={{ xs: -1.3, lg: 0 }}
                  >
                    Bean
                  </TextSection>
                </ThemeProvider>
              </Grid>
              <Grid>
                <IconButton onClick={handleCornButtonClick} color="white">
                  <MyAnimacion>
                    <Round
                      src={maiz}
                      size="xxl"
                      shadow="xxl"
                      sx={{ border: "6px solid white", mt: { xs: -0.5, lg: 0 } }}
                    />
                  </MyAnimacion>
                </IconButton>
                <ThemeProvider theme={theme}>
                  <TextSection
                    textAlign="center"
                    fontWeight="regular"
                    sx={{ color: "#ffffff" }}
                    variant="h5"
                    mt={{ xs: -1.3, lg: 0 }}
                  >
                    Corn
                  </TextSection>
                </ThemeProvider>
              </Grid>
              <Grid>
                <IconButton onClick={handleChickpeaButtonClick} color="white">
                  <MyAnimacion>
                    <Round
                      src={garbanzo}
                      size="xxl"
                      shadow="xxl"
                      sx={{ border: "6px solid white", mt: { xs: -0.5, lg: 0 } }}
                    />
                  </MyAnimacion>
                </IconButton>
                <ThemeProvider theme={theme}>
                  <TextSection
                    textAlign="center"
                    fontWeight="regular"
                    sx={{ color: "#ffffff" }}
                    variant="h5"
                    mt={{ xs: -1.3, lg: 0 }}
                  >
                    Chickpea
                  </TextSection>
                </ThemeProvider>
              </Grid>
              <Grid>
                <IconButton onClick={handleSorghumButtonClick} color="white">
                  <MyAnimacion>
                    <Round
                      src={sorgo}
                      size="xxl"
                      shadow="xxl"
                      sx={{ border: "6px solid white", mt: { xs: -0.5, lg: 0 } }}
                    />
                  </MyAnimacion>
                </IconButton>
                <ThemeProvider theme={theme}>
                  <TextSection
                    textAlign="center"
                    fontWeight="regular"
                    sx={{ color: "#ffffff" }}
                    variant="h5"
                    mt={{ xs: -1.3, lg: 0 }}
                  >
                    Sorghum
                  </TextSection>
                </ThemeProvider>
              </Grid>
            </Grid>
          </Container>
        </Contenedor>
        <Contenedor
          sx={{ bgcolor: "#5B524D" }}
          width="100%"
          opacity={0.5}
          py={{ xs: 3, sm: 4, md: 4, lg: 6, xxl: 6 }}
          mt={{ xs: -13.2, sm: -10, md: -13, lg: -16, xxl: -19 }}
          zindex={1}
          position="relative"
        />
        <Fade direction="left" in="true" timeout={3000}>
          <Contenedor
            position="relative"
            zIndex={1}
            py={{ xs: 2, sm: 2, md: 2, lg: 2, xxl: 2 }}
            mt={{ xs: -7.3, sm: -9, md: -8.9, lg: -10.5, xxl: -10.5 }}
          >
            <ThemeProvider theme={theme}>
              <TextSection
                sx={{
                  filter: "drop-shadow(0 0 0.2rem black)",
                  color: "#ffffff",
                }}
                textAlign="center"
                variant="h1"
              >
                OUR PRODUCTS
              </TextSection>
            </ThemeProvider>
          </Contenedor>
        </Fade>
      </Contenedor>
    </>
  );
}
export default Presentacion;
