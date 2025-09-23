import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Contenedor from "components/Contenedor";
import { Grid, Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextSection from "../../../components/TextSection";
import Carrusel1 from "../../../assets/images/PURP_WEB/1.INICIO/CONFIANZA.jpg";
import Carrusel2 from "../../../assets/images/PURP_WEB/1.INICIO/RESPONSABILIDAD.jpg";
import Carrusel3 from "../../../assets/images/PURP_WEB/1.INICIO/INNOVACION.jpg";
import Carrusel4 from "../../../assets/images/PURP_WEB/1.INICIO/INTEGRIDAD.jpg";
import Carrusel5 from "../../../assets/images/PURP_WEB/1.INICIO/CALIDAD.jpg";

// Crear un tema para manejar la tipografía responsiva
const theme = createTheme({
  typography: {
    h1: {
      fontSize: "1.2rem",
      "@media (min-width:600px)": { fontSize: "2rem" },
      "@media (min-width:960px)": { fontSize: "2.5rem" },
      "@media (min-width:1280px)": { fontSize: "2.5rem" },
    },
  },
});

// Array de imágenes para el carrusel con id único agregado manualmente
const carruselItems = [
  { id: "confianza", img: Carrusel1 },
  { id: "responsabilidad", img: Carrusel2 },
  { id: "innovacion", img: Carrusel3 },
  { id: "pasion", img: Carrusel4 },
  { id: "proactividad", img: Carrusel5 },
];

// Estilos para los indicadores
const indicatorStyles = {
  container: {
    width: "100%",
    marginTop: "10px",
    textAlign: "center",
  },
  indicator: {
    cursor: "pointer",
    transition: "200ms",
    padding: 0,
    color: "#afafaf",
    margin: "0px",
    fontSize: "38px",
    "&:hover": {
      color: "#1f1f1f",
    },
    "&:active": {
      color: "#1f1f1f",
    },
  },
  active: {
    color: "#494949", // Color del indicador activo
    fontSize: "38px", // Un poco más grande para el indicador activo
  },
};

// Componente Carrusel
const Carrusel = ({ text, palabras }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true); // Estado para controlar el fade

  // Función para avanzar al siguiente slide con animación
  const nextSlide = () => {
    setFade(false); // Empezar el fade out
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carruselItems.length);
      setFade(true); // Fade in después de cambiar el slide
    }, 1000); // Duración del fade out
  };

  // useEffect para cambiar automáticamente de imagen cada 7 segundos (más suave)
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000); // Más tiempo entre imágenes
    return () => clearInterval(interval); // Limpiar intervalo al desmontar el componente
  }, []);

  // Función para cambiar al índice específico cuando se hace clic en el indicador
  const goToSlide = (index) => {
    setFade(false); // Empezar fade out
    setTimeout(() => {
      setCurrentIndex(index); // Cambiar al índice del indicador
      setFade(true); // Activar fade in después del cambio
    }, 500); // Duración del fade out
  };

  return (
    <Contenedor mt={{ xs: 0, md: 5, lg: 7 }}>
      <Contenedor
        height="100%"
        sx={{
          opacity: fade ? 1 : 0,
          transition: "opacity 3s ease-in-out", // Animación de fade in/out más lenta (3s)
          backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) =>
            `${linearGradient(rgba(gradients.dark.main, 0), rgba(gradients.dark.state, 0))}, url(${
              carruselItems[currentIndex].img
            })`,
          backgroundSize: { xs: "cover", md: "cover", lg: "cover" }, // 'contain' en pantallas pequeñas y 'cover' en grandes
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center", // Centrar la imagen
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Contenedor central con el texto */}
        <Container>
          <Contenedor
            sx={{
              height: "100%",
              width: "40%",
              alignItems: "center",
              justifyContent: "flex-start", // Colocar el texto hacia la izquierda
              position: "relative",
            }}
          >
            <Contenedor
              sx={{
                height: "100%", // Mantener la misma altura que el contenedor del carrusel
                minHeight: "65vh", // Mínima altura para pantallas más pequeñas
                backgroundImage: ({ palette: { azul }, functions: { linearGradient, rgba } }) =>
                  `${linearGradient(rgba(azul.main, 0.6), rgba(azul.main, 0.6))}`,
                backgroundSize: "contain",
                padding: "20px",
                display: "flex", // Alinear el contenido verticalmente
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Grid
                container
                direction="column"
                justifyContent="center" // Centrar verticalmente
                alignItems="center" // Centrar horizontalmente
              >
                <ThemeProvider theme={theme}>
                  <TextSection
                    sx={{ color: "#ffffff", textAlign: "center" }} // Alinear el texto al centro
                    variant="h1"
                    fontWeight="regular"
                  >
                    {text}
                  </TextSection>
                  <TextSection
                    sx={{ color: "#ffffff", textAlign: "center", marginTop: "10px" }} // Alinear el texto al centro
                    variant="h1"
                    fontWeight="regular"
                  >
                    {palabras[currentIndex]}
                  </TextSection>
                </ThemeProvider>
              </Grid>
            </Contenedor>
          </Contenedor>
        </Container>
      </Contenedor>

      {/* Indicadores de carrusel */}
      <div style={indicatorStyles.container}>
        {carruselItems.map((item, index) => (
          <button
            key={item.id} // Usar la clave única agregada manualmente
            onClick={() => goToSlide(index)}
            type="button" // Añadir el tipo de botón explícitamente
            style={{
              ...indicatorStyles.indicator,
              ...(index === currentIndex ? indicatorStyles.active : {}),
              background: "transparent", // Quitar estilos de botón nativo
              border: "none", // Quitar bordes de botón nativo
              cursor: "pointer", // Mantener cursor de puntero
            }}
            aria-label={`Go to slide ${index + 1}`} // Proporcionar una etiqueta accesible
          >
            ● {/* Usamos un punto (bullet) como indicador */}
          </button>
        ))}
      </div>
    </Contenedor>
  );
};

// Definir PropTypes para las props text y palabras
Carrusel.propTypes = {
  text: PropTypes.string.isRequired,
  palabras: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carrusel;
