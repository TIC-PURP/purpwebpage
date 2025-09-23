import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card, Container, Grid } from "@mui/material";
import Contenedor from "components/Contenedor";
import RotatingCardFront from "./RotatingCardFront";
import RotatingCardBack from "./RotatingCardBack";

function RotatingInformationCard({
  TituloF,
  ImgF,
  TituloT,
  Descripcion,
  ImgT,
  ruta,
  xs,
  sm,
  md,
  lg,
  text,
}) {
  const [rotate, setRotate] = useState(false);

  const toggleRotate = () => setRotate((prev) => !prev);

  return (
    <Card
      sx={{
        height: "100%",
        background: "transparent",
        boxShadow: "none",
        overflow: "visible",
      }}
    >
      <Contenedor
        component="section"
        position="relative"
        py={1}
        my={1}
        sx={{ perspective: "50rem" }}
        onMouseEnter={toggleRotate}
        onMouseLeave={toggleRotate}
      >
        <Container>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={xs} sm={sm} md={md} lg={lg}>
              <Contenedor
                sx={{
                  backgroundColor: "transparent",
                  boxShadow: "none",
                  position: "relative",
                  transform: rotate ? "rotateY(180deg)" : "rotateY(0)",
                  transformStyle: "preserve-3d",
                  transition: "all 0.8s cubic-bezier(0.34, 1.45, 0.7, 1)",
                }}
              >
                <RotatingCardFront image={ImgF} title={TituloF} />
                <RotatingCardBack
                  image={ImgT}
                  title={TituloT}
                  description={Descripcion}
                  action={{ type: "internal", route: ruta, label: text }}
                />
              </Contenedor>
            </Grid>
          </Grid>
        </Container>
      </Contenedor>
    </Card>
  );
}

RotatingInformationCard.propTypes = {
  TituloF: PropTypes.string.isRequired,
  ImgF: PropTypes.string.isRequired,
  TituloT: PropTypes.string.isRequired,
  Descripcion: PropTypes.string,
  ImgT: PropTypes.string.isRequired,
  ruta: PropTypes.string.isRequired,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  text: PropTypes.string.isRequired,
};

// Valores predeterminados para las propiedades opcionales
RotatingInformationCard.defaultProps = {
  Descripcion: "",
  xs: 12,
  sm: 12,
  md: 12,
  lg: 12,
};

export default RotatingInformationCard;
