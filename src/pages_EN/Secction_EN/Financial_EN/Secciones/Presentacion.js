import React from "react";
import Contenedor from "components/Contenedor";
import { Card, Fade, useMediaQuery } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextSection from "../../../../components/TextSection";
import Financiera from "../../../../assets/images/PURP_WEB/3.FINANCIERA/PORTADA.png";
import Logo from "../../../../assets/images/PURP_WEB/3.FINANCIERA/LOGO_FINANCIERA.png";

const theme = createTheme();

theme.typography.h1 = {
  fontSize: "1rem",
  "@media (min-width:600px)": {
    fontSize: "2rem",
  },
};

export default function Presentacion() {
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
            )}, url(${Financiera})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
        <Fade in="show" timeout={4000}>
          <Contenedor
            position="relative"
            borderRadius="lg"
            mx={2} // Ajusta el margen horizontal para móviles
            mb={isMobile ? 8 : 10} // Ajusta el margen inferior para móviles
            mt={{ xs: 6, sm: 10, md: 15, lg: 0, xxl: 0 }}
          >
            <Contenedor
              component="img"
              src={Logo}
              maxWidth="28%"
              minWidth="9vh"
              minHeight="9vh"
              maxHeight={isMobile ? "35vh" : "85vh"} // Ajusta la altura máxima para móviles
              position="relative"
            />
          </Contenedor>
        </Fade>
        <Contenedor
          bgColor="#988920"
          width="100"
          opacity={0.4}
          py={isMobile ? 3 : { xs: 3, sm: 3, md: 6, lg: 6, xxl: 6 }} // Ajusta el espaciado en dispositivos móviles
          mt={isMobile ? 3 : { xs: 0, sm: -12, md: 10, lg: -8, xxl: -8 }} // Ajusta el margen superior en dispositivos móviles
          mb={isMobile ? 0 : { xs: 0, sm: -14, md: 0, lg: 0, xxl: 0 }} // Ajusta el margen inferior en dispositivos móviles
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
            py={isMobile ? 2 : { xs: 3, sm: 3, md: 3, lg: 3, xxl: 3 }} // Ajusta el espaciado vertical en dispositivos móviles
            mt={isMobile ? -9.3 : { xs: 0, sm: 3, md: -14, lg: -14, xxl: -14 }} // Ajusta el margen superior en dispositivos móviles
            mb={isMobile ? 0 : { xs: 0, sm: -3.5, md: -0.5, lg: 20, xxl: 20 }} // Ajusta el margen inferior en dispositivos móviles
          >
            <ThemeProvider theme={theme}>
              <TextSection sx={{ color: "#ffffff" }} textAlign="center" variant="h1" mt={2}>
                FINANCIAL
              </TextSection>
            </ThemeProvider>
          </Contenedor>
        </Fade>
      </Contenedor>
    </Card>
  );
}
