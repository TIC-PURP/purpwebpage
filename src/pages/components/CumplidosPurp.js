import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextSection from "../../components/TextSection";
import inicioImage from "../../assets/images/PURP_WEB/1.INICIO/CUMPLIENDO.jpg";
import Contenedor from "../../components/Contenedor";

const theme = createTheme({
  typography: {
    h2: {
      fontSize: "1.5rem",
      "@media (min-width:600px)": {
        fontSize: "1.5rem",
      },
      "@media (min-width:960px)": {
        fontSize: "1.5rem",
      },
      "@media (min-width:1280px)": {
        fontSize: "2rem",
      },
    },
  },
});

// eslint-disable-next-line react/prop-types
export default function CumplidosPurp({ texto }) {
  return (
    <>
      <Contenedor
        sx={{
          backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0),
              rgba(gradients.dark.state, 0)
            )}, url(${inicioImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        py={16}
      >
        <Contenedor
          textAlign="center"
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="50%"
          mx="auto"
          sx={{
            backgroundImage: ({ palette: { cafe }, functions: { linearGradient, rgba } }) =>
              `${linearGradient(rgba(cafe.main, 0.5), rgba(cafe.main, 0.5))}`,
            backgroundSize: "cover",
          }}
        >
          <ThemeProvider theme={theme}>
            <TextSection sx={{ color: "white" }} textAlign="center" variant="h2">
              {texto}
            </TextSection>
          </ThemeProvider>
        </Contenedor>
      </Contenedor>
    </>
  );
}
