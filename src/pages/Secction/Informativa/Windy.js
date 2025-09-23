import React from "react";
import { Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextSection from "components/TextSection";
import Contenedor from "../../../components/Contenedor";

const theme = createTheme();

theme.typography.h4 = {
  fontSize: "1rem",
  "@media (min-width:600px)": {
    fontSize: "2rem",
  },
};

const Windy = () => (
  <Grid direction="center" textAlign="center">
    <ThemeProvider theme={theme}>
      <TextSection
        variant="h4"
        sx={{ color: "#5B524D" }}
        textAlign="center"
        justify="center"
        mt={15}
        mb={5}
      >
        PRONÓSTICO DEL CLIMA
      </TextSection>
    </ThemeProvider>
    <Contenedor
      direction="center"
      bgColor="white"
      width="100%"
      dangerouslySetInnerHTML={{
        __html: `<iframe width="80%" height="500" src="https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=default&metricTemp=default&metricWind=default&zoom=5&overlay=rainAccu&product=ecmwf&level=surface&lat=25.562&lon=-106.523" frameborder="0" style="border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);"></iframe>`,
      }}
    />
  </Grid>
);

export default Windy;
