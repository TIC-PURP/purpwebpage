import { Card } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PropTypes from "prop-types";
import Contenedor from "components/Contenedor";
import TextSection from "components/TextSection";

const theme = createTheme({
  typography: {
    h2: {
      fontSize: "1.5rem",
      "@media (min-width:600px)": {
        fontSize: "1.5rem",
      },
      "@media (min-width:960px)": {
        fontSize: "1.5rem",
      },
      "@media (min-width:1280px)": {
        fontSize: "1.5rem",
      },
    },
  },
});

function RotatingCardFront({ image, title, additionalText }) {
  return (
    <Card>
      <Contenedor
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderRadius="md"
        coloredShadow="black"
        width="100%"
        position="relative"
        zIndex={1}
        sx={{
          backgroundImage: ({ palette: { white }, functions: { linearGradient, rgba } }) =>
            `${linearGradient(rgba(white.main, 0.1), rgba(white.main, 0))}, url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          p: 2,
        }}
      >
        <Contenedor
          py={{ xs: 5, sm: 8, md: 10, lg: 15, xxl: 18 }}
          px={2}
          textAlign="center"
          lineHeight={1}
          zIndex={1}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <ThemeProvider theme={theme}>
            <Contenedor
              sx={{ bgcolor: "#000000" }}
              width={150}
              opacity={0.4}
              py={{ xs: 2, sm: 2, md: 2, lg: 2 }}
              position="relative"
              zIndex={0}
            />
            <Contenedor position="relative" mt={{ xs: -3.5 }}>
              <TextSection variant="h2" sx={{ color: "#ffffff" }} gutterBottom>
                {title}
              </TextSection>
              {additionalText && (
                <TextSection variant="body1" sx={{ color: "#ffffff" }} mt={1}>
                  {additionalText}
                </TextSection>
              )}
            </Contenedor>
          </ThemeProvider>
        </Contenedor>
      </Contenedor>
    </Card>
  );
}

RotatingCardFront.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  additionalText: PropTypes.node,
};

RotatingCardFront.defaultProps = {
  additionalText: null,
};

export default RotatingCardFront;
