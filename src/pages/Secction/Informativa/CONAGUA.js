import React from "react";
import Contenedor from "components/Contenedor";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Grid } from "@mui/material";
import TextSection from "components/TextSection";

const theme = createTheme();

theme.typography.h4 = {
  fontSize: "1rem",
  "@media (min-width:600px)": {
    fontSize: "2rem",
  },
};
theme.typography.body = {
  fontSize: "0.8rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
  },
};

const Presas = () => (
  <Grid dircetion="center" textAlign="center">
    <ThemeProvider theme={theme}>
      <TextSection
        variant="h4"
        sx={{ color: "#5B524D" }}
        textAlign="center"
        justify="center"
        mt={5}
      >
        SITUACIÓN DE LAS PRESAS
      </TextSection>
      <TextSection variant="body" sx={{ color: "#5B524D" }} textAlign="center" justify="center">
        (CONAGUA)
      </TextSection>
    </ThemeProvider>
    <Contenedor
      mt={3}
      direction="center"
      bgColor="white"
      width="100%"
      dangerouslySetInnerHTML={{
        __html: `<iframe width="80%" height="700" src="https://sinav30.conagua.gob.mx:8080/Presas/" frameborder="0" frameborder="0" style="border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);"></iframe>`,
      }}
    />
  </Grid>
);

export default Presas;
