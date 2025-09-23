/* eslint-disable react/prop-types */

// @mui material components
import Grid from "@mui/material/Grid";
import CenteredBlogCard from "./CenteredBlogCard";

// Images

function CenterCardWithButton({ imagen, titulo, variante, descripcion, ruta, descripcionBoton }) {
  return (
    <Grid sx={{ flex: 1 }} item xs={6.1} sm={6} lg={4}>
      <CenteredBlogCard
        image={imagen}
        varianteTitulo={variante}
        title={titulo}
        description={descripcion}
        action={{
          type: "external",
          route: ruta,
          color: "light",
          label: descripcionBoton,
        }}
      />
    </Grid>
  );
}

export default CenterCardWithButton;
