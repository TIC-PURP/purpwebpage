/* eslint-disable react/prop-types */
/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import CenteredBlogModal from "./CenteredBlogModal";

// Images

function CenterCardWithButton({ imagen, titulo, descripcion, ruta, descripcionBoton }) {
  return (
    <Grid sx={{ flex: 1 }} item xs={12} sm={6} lg={3.4}>
      <CenteredBlogModal
        image={imagen}
        title={titulo}
        description={descripcion}
        action={{
          type: "internal",
          route: ruta,
          color: "secondary",
          label: descripcionBoton,
        }}
      />
    </Grid>
  );
}

export default CenterCardWithButton;
