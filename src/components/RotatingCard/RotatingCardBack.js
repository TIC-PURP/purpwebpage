import PropTypes from "prop-types";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import MuiLink from "@mui/material/Link";
import Contenedor from "components/Contenedor";
import TextSection from "components/TextSection";
import Button from "../Button";

const theme = createTheme({
  typography: {
    h2: {
      fontSize: "1.5rem",
      "@media (min-width:600px)": { fontSize: "1.5rem" },
      "@media (min-width:960px)": { fontSize: "1.5rem" },
      "@media (min-width:1280px)": { fontSize: "1.5rem" },
    },
  },
});

function RotatingCardBack({ image, title, description, action }) {
  return (
    <Contenedor
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderRadius="md"
      coloredShadow="dark"
      position="absolute"
      width="100%"
      height="100%"
      top={0}
      left={0}
      zIndex={1}
      sx={{
        backgroundImage: ({ palette: { black }, functions: { linearGradient, rgba } }) =>
          `${linearGradient(rgba(black.main, 0.5), rgba(black.main, 0.4))}, url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backfaceVisibility: "hidden",
        p: 2,
        transform: "rotateY(180deg)",
      }}
    >
      <Contenedor
        pt={3}
        pb={2}
        px={2}
        textAlign="center"
        lineHeight={1}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <ThemeProvider theme={theme}>
          <TextSection variant="h2" sx={{ color: "white" }} gutterBottom>
            {title}
          </TextSection>
          {description && (
            <TextSection variant="body1" sx={{ color: "white" }} textAlign="justify">
              {description}
            </TextSection>
          )}
        </ThemeProvider>

        {action && (
          <Contenedor maxWidth="18vh" mt={2} mx="auto">
            {action.type === "external" ? (
              <Button
                component={MuiLink}
                href={action.route}
                target="_blank"
                rel="noreferrer"
                color="white"
                size="small"
                fullWidth
              >
                {action.label}
              </Button>
            ) : (
              <Button component={Link} to={action.route} color="secondary" size="small" fullWidth>
                {action.label}
              </Button>
            )}
          </Contenedor>
        )}
      </Contenedor>
    </Contenedor>
  );
}

RotatingCardBack.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  description: PropTypes.node,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]),
    route: PropTypes.string,
    label: PropTypes.string,
  }),
};

RotatingCardBack.defaultProps = {
  description: null,
  action: null,
};

export default RotatingCardBack;
