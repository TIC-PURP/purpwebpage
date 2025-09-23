import React, { useState, useEffect } from "react";
import { Grid, Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextSection from "../../../../components/TextSection";
import Contenedor from "../../../../components/Contenedor";
import maiz from "../../../../assets/images/PURP_WEB/4.GRANOS/MAIZ.png";

const theme = createTheme();

theme.typography.h4 = {
  fontSize: "1rem",
  "@media (min-width:600px)": {
    fontSize: "2rem",
  },
};
theme.typography.h3 = {
  fontSize: "1rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
  },
};

const PrecioMaiz = () => {
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    fetch("https://purpapi.ddns.net/api/data/cobertura")
      .then((response) => response.json())
      .then((data) => setDatos(data.datos))
      // eslint-disable-next-line no-console
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Grid direction="center" textAlign="center">
      <ThemeProvider theme={theme}>
        <TextSection
          variant="h4"
          sx={{ color: "#5B524D" }}
          textAlign="center"
          justify="center"
          mt={25}
        >
          FUTIRO MAÍZ A JULIO 2024
        </TextSection>
      </ThemeProvider>
      <Contenedor mt={8} bt={8}>
        <Container>
          <Contenedor
            minHeight="100%"
            width="100%"
            borderRadius="md"
            shadow="xl"
            sx={{
              backgroundImage: `url(${maiz})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Container>
              <Grid container>
                <Contenedor
                  width="100%"
                  sx={{
                    backgroundImage: ({ palette: { azul }, functions: { linearGradient, rgba } }) =>
                      `${linearGradient(rgba(azul.main, 0.4), rgba(azul.main, 0.4))}`,
                    backgroundSize: "cover",
                  }}
                  mt={{ xs: 0, md: 0, lg: 0 }}
                >
                  <Grid mb={{ xs: 6, lg: 10 }}>
                    <ThemeProvider theme={theme}>
                      <TextSection variant="h3" textAlign="center" sx={{ color: "#ffffff" }} mt={4}>
                        Precio de solo REFERENCIA a cierre del día{" "}
                        {new Date().toLocaleString("es-MX", {
                          day: "2-digit",
                          month: "long",
                          year: "numeric",
                        })}
                      </TextSection>
                    </ThemeProvider>
                  </Grid>
                  <Container>
                    <Grid Container>
                      <Grid xs={12} md={6} lg={4} sx={{ mx: "auto" }}>
                        <Contenedor bgColor="white" borderRadius="xl" mb={4}>
                          <TextSection variant="h6" sx={{ color: "#5B524D" }}>
                            Precio de Maíz:{" "}
                            {datos
                              ? `$${datos.Cobertura.toLocaleString("es-MX", {
                                  minimumFractionDigits: 2,
                                })} MXN`
                              : "Cargando..."}
                          </TextSection>
                        </Contenedor>
                      </Grid>
                      <Grid xs={12} md={6} lg={4} sx={{ mx: "auto" }}>
                        <Contenedor bgColor="white" borderRadius="xl" mb={6}>
                          <TextSection variant="h6" sx={{ color: "#5B524D" }}>
                            Precio en Dolares:{" "}
                            {datos ? `$${datos.cobertura_purp} USD` : "Cargando..."}
                          </TextSection>
                        </Contenedor>
                      </Grid>
                      <Grid xs={12} md={6} lg={4} sx={{ mx: "auto" }}>
                        <Contenedor
                          borderRadius="xl"
                          sx={{
                            backgroundImage: ({
                              palette: { white },
                              functions: { linearGradient, rgba },
                            }) => `${linearGradient(rgba(white.main, 0.9), rgba(white.main, 0.9))}`,
                            backgroundSize: "cover",
                          }}
                        >
                          <Contenedor mb={2}>
                            <TextSection variant="h4" sx={{ color: "#5B524D" }}>
                              ¿Cómo se calculó el precio?
                            </TextSection>
                          </Contenedor>
                          <Contenedor mb={1}>
                            <TextSection
                              variant="h5"
                              sx={{ color: "#5B524D", textDecorationLine: "underline" }}
                            >
                              ( Futuro + Base ) X Dolar Fix
                            </TextSection>
                          </Contenedor>
                          <Contenedor mb={1}>
                            <TextSection variant="h5" sx={{ color: "#5B524D" }}>
                              Futuro JUL 2023: {datos ? `$${datos.Corn_Future} USD` : "Cargando..."}
                            </TextSection>
                          </Contenedor>
                          <Contenedor mb={1}>
                            <TextSection variant="h5" sx={{ color: "#5B524D" }}>
                              Base: {datos ? `$${datos.Base} USD` : "Cargando..."}
                            </TextSection>
                          </Contenedor>
                          <Contenedor mb={6}>
                            <TextSection variant="h5" sx={{ color: "#5B524D" }}>
                              Dolar Fix: {datos ? `$${datos.Dolar_Fix} MXN` : "Cargando..."}
                            </TextSection>
                          </Contenedor>
                        </Contenedor>
                      </Grid>
                    </Grid>
                  </Container>
                </Contenedor>
              </Grid>
            </Container>
          </Contenedor>
        </Container>
      </Contenedor>
    </Grid>
  );
};

export default PrecioMaiz;
