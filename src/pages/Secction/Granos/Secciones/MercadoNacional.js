import { Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Contenedor from "../../../../components/Contenedor";
import ContenedorBloques from "../../../components/ContendorBloques";
import TextSection from "../../../../components/TextSection";

const theme = createTheme();

theme.typography.h2 = {
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

/* eslint-disable react/prop-types */
function MercadoNacional({ titulo, img }) {
  return (
    <Contenedor>
      <ContenedorBloques bgColor="#ffffff">
        <Grid
          container
          item
          xs={12}
          justifyContent="center"
          alignItems="center"
          sx={{ mx: "auto" }}
          mt={{ xs: 2, lg: 6 }}
        >
          <ThemeProvider theme={theme}>
            <TextSection variant="h2" sx={{ color: "#5B524D" }} textAlign="center">
              {titulo}
            </TextSection>
          </ThemeProvider>
        </Grid>
      </ContenedorBloques>
      <Contenedor component="img" src={img} width="100%" maxHeight="100vh" />
    </Contenedor>
  );
}
export default MercadoNacional;
