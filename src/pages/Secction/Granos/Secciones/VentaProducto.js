import { Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextSection from "components/TextSection";
import Contenedor from "components/Contenedor";
import ContenedorBloques from "../../../components/ContendorBloques";
import CenterCardWithButton from "../../../../components/CenterCardButton";

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
theme.typography.h5 = {
  fontSize: "1rem",
  "@media (min-width:600px)": {
    fontSize: "2rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.3rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.2rem",
  },
};

/* eslint-disable react/prop-types */
function VentaProducto({ title, logo, sub, d1, img1, d2, img2, d3, img3, btn }) {
  return (
    <Contenedor>
      <ContenedorBloques>
        <Grid
          container
          item
          xs={12}
          justifyContent="center"
          alignItems="center"
          sx={{ mx: "auto" }}
          mt={0}
        >
          <ThemeProvider theme={theme}>
            <TextSection variant="h2" sx={{ color: "#5B524D" }} textAlign="center" mt={4}>
              {title}
            </TextSection>
          </ThemeProvider>
        </Grid>
        <Grid
          container
          item
          xs={12}
          justifyContent="center"
          alignItems="center"
          sx={{ mx: "auto" }}
        >
          <Contenedor component="img" src={logo} width="12rem" position="relative" zIndex={1} />
        </Grid>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={3.3}
          sx={{ mx: "auto" }}
          mt={5}
          mb={5}
          xs={12}
          sm={12}
          md={12}
          lg={12}
        >
          <CenterCardWithButton
            titulo={sub}
            descripcion={d1}
            variante="h6"
            imagen={img1}
            ruta="https://articulo.mercadolibre.com.mx/MLM-2050043488-frijol-az-higuera-peruano-mayocoba-marca-purp-25-kg-_JM#position=8&search_layout=stack&type=item&tracking_id=fbb30e26-c244-4a65-992f-3d9e15f2a905"
            descripcionBoton={btn}
          />
          <CenterCardWithButton
            titulo={sub}
            descripcion={d2}
            variante="h6"
            imagen={img2}
            ruta="https://articulo.mercadolibre.com.mx/MLM-2049966564-frijol-az-higuera-peruano-mayocoba-marca-purp-1-kg-_JM#reco_item_pos=0&reco_backend=machinalis-seller-items-pdp&reco_backend_type=low_level&reco_client=vip-seller_items-above&reco_id=4f9a2142-38f4-45e4-aa25-e1c0267351c9"
            descripcionBoton={btn}
          />
          <CenterCardWithButton
            titulo={sub}
            descripcion={d3}
            variante="h6"
            imagen={img3}
            ruta="https://articulo.mercadolibre.com.mx/MLM-2049966530-frijol-az-higuera-peruano-mayocoba-marca-purp-20-lbs-_JM#reco_item_pos=1&reco_backend=machinalis-seller-items-pdp&reco_backend_type=low_level&reco_client=vip-seller_items-above&reco_id=cae31fa0-0612-4d00-aad8-f5321dc657d5"
            descripcionBoton={btn}
          />
        </Grid>
      </ContenedorBloques>
    </Contenedor>
  );
}
export default VentaProducto;
