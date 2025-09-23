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

// eslint-disable-next-line import/no-unresolved
import Contenedor from "../../components/Contenedor";
import TextSection from "../../components/TextSection";

function ContenedorBloques({
  tituloContenedor,
  children,
  color,
  bgColor,
  DierccionTitulo,
  DireccionChildren,
  imagen,
  variant,
  ContainerSize,
}) {
  return (
    <Contenedor
      bgColor={bgColor}
      minHeight="100%"
      width="100%"
      sx={{
        backgroundImage: `url(${imagen})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        display: "grid",
        placeItems: "center",
      }}
      py={ContainerSize}
    >
      <Container>
        <Grid container item xs={12} lg={12} mt={2} justifyContent={DierccionTitulo}>
          <TextSection variant={variant} sx={{ color: { color } }}>
            {tituloContenedor}
          </TextSection>
        </Grid>
        <Grid container spacing={3} justifyContent={DireccionChildren}>
          {children}
        </Grid>
      </Container>
    </Contenedor>
  );
}

export default ContenedorBloques;
