import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card, Button as MuiButton, useMediaQuery } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Contenedor from "components/Contenedor";
import TextSection from "components/TextSection";

// Tema adaptable a pantallas
const theme = createTheme({
  typography: {
    h2: {
      fontSize: "1.5rem",
      "@media (min-width:600px)": { fontSize: "2rem" },
      "@media (min-width:960px)": { fontSize: "2.5rem" },
    },
    body1: {
      fontSize: "1rem",
      "@media (min-width:600px)": { fontSize: "1.25rem" },
    },
  },
});

function RotatingCard2({ frontImage, backImage, title, action }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const isMobile = useMediaQuery("(max-width:768px)");

  const handleMouseEnter = () => !isMobile && setIsFlipped(true);
  const handleMouseLeave = () => !isMobile && setIsFlipped(false);
  const handleClick = () => isMobile && setIsFlipped(!isFlipped);

  return (
    <Card
      component="a"
      href={action.route}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      sx={{
        perspective: "1000px",
        width: "100%",
        maxWidth: 900,
        height: { xs: 200, sm: 300, md: 300, lg: 400 },
        mx: "auto",
        cursor: "pointer",
        backgroundColor: "transparent", // <- quita fondo blanco
        boxShadow: "none", // <- elimina sombra por defecto
        borderRadius: 0, // <- si lo necesitas cuadrado
      }}
    >
      <Contenedor
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0)",
          transition: "all 0.8s cubic-bezier(0.34, 1.45, 0.7, 1)",
        }}
      >
        {/* Parte frontal */}
        <Contenedor
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            backgroundImage: `url(${frontImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "8px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
          }}
        >
          <ThemeProvider theme={theme}>
            <TextSection variant="h2">{title}</TextSection>
          </ThemeProvider>
        </Contenedor>

        {/* Parte trasera */}
        <Contenedor
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            backgroundImage: `url(${backImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end", // Alinea contenido abajo
            alignItems: "center",
            color: "#ffffff",
            transform: "rotateY(180deg)",
            padding: 2,
            backgroundColor: "rgba(0, 0, 0, 0.6)", // capa oscura encima
            backgroundBlendMode: "darken", // mezcla
          }}
        >
          {action && (
            <MuiButton
              component="a"
              href={action.route}
              target="_blank"
              rel="noopener noreferrer"
              variant="h2"
              sx={{
                color: "#ffffff",
                fontWeight: "bold",
                fontSize: "1rem",
                borderBottom: "4px solid white",
                borderRadius: 0,
                textTransform: "uppercase",
                "&:hover": {
                  backgroundColor: "transparent",
                  borderBottom: "2px solid #ccc",
                },
              }}
            >
              {action.label}
            </MuiButton>
          )}
        </Contenedor>
      </Contenedor>
    </Card>
  );
}

RotatingCard2.propTypes = {
  frontImage: PropTypes.string.isRequired,
  backImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["internal", "external"]),
    route: PropTypes.string,
    label: PropTypes.string,
  }),
};

RotatingCard2.defaultProps = {
  action: null,
};

export default RotatingCard2;
