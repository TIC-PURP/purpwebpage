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
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import Contenedor from "../Contenedor";

function BoxImg3({ imagen, color, containerSize, xs, md, lg }) {
  return (
    <Contenedor
      variant="gradient"
      position="relative"
      component="section"
      py={containerSize}
      bgColor={color}
    >
      <Container>
        <Grid container justifyContent="center">
          <Grid item xs={xs} md={md} lg={lg}>
            <Contenedor component="img" src={imagen} width="100%" />
          </Grid>
        </Grid>
      </Container>
    </Contenedor>
  );
}

export default BoxImg3;
