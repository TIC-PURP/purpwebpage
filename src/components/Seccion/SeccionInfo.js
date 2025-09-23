import { Container, Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PropTypes from "prop-types"; // Importar prop-types para validar props
import Contenedor from "components/Contenedor";
import TextSection from "../TextSection";

// Configuración del tema para la tipografía
const theme = createTheme({
  typography: {
    h2: {
      fontSize: "0.8rem",
      "@media (min-width:600px)": {
        fontSize: "1.5rem",
      },
    },
    h5: {
      fontSize: "0.6rem",
      "@media (min-width:600px)": {
        fontSize: "1rem",
      },
    },
  },
});

function Informativa({ img, title, text, color }) {
  return (
    <ThemeProvider theme={theme}>
      <Contenedor>
        <Contenedor
          minHeight="100%"
          width="100%"
          position="relative"
          sx={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Container>
            <Grid container justifyContent="flex-start">
              <Contenedor
                width="45%"
                sx={{
                  backgroundImage: ({ functions: { linearGradient, rgba } }) =>
                    `${linearGradient(rgba(color, 0.7), rgba(color, 0.7))}`,
                  backgroundSize: "cover",
                  paddingY: { xs: 5, lg: 18 },
                  paddingX: { xs: 0, lg: 5 },
                }}
              >
                <Grid item xs={10} mx={{ xs: 1, lg: 0 }}>
                  <Contenedor sx={{ filter: "drop-shadow(0 0 0.1rem black)" }}>
                    <TextSection
                      variant="h2"
                      textAlign="center"
                      sx={{ color: "#ffffff" }}
                      marginBottom={{ xs: 2, lg: 4 }}
                    >
                      {title}
                    </TextSection>
                    <TextSection
                      variant="h5"
                      sx={{ color: "#ffffff" }}
                      fontWeight="regular"
                      textAlign="justify"
                    >
                      {text}
                    </TextSection>
                  </Contenedor>
                </Grid>
              </Contenedor>
            </Grid>
          </Container>
        </Contenedor>
      </Contenedor>
    </ThemeProvider>
  );
}

// Definir PropTypes para validar las props del componente
Informativa.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

// Definir defaultProps para `color`
Informativa.defaultProps = {
  color: "#ffffff",
};

export default Informativa;
