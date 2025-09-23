import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import MuiLink from "@mui/material/Link";

import Contenedor from "../Contenedor";
import TextSection from "../TextSection";
import Button from "../Button";

const theme = createTheme();

theme.typography.h6 = {
  fontSize: "0.8rem",
  "@media (min-width:600px)": {
    fontSize: "2rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.1rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "1rem",
  },
};

// eslint-disable-next-line react/prop-types
function CenteredBlogCard({ image, title, description, action, varianteTitulo }) {
  return (
    <Contenedor
      bgColor="#ffffff"
      sx={{
        height: "100%",
        boxShadow: "lg",
        overflow: "visible",
      }}
    >
      <Contenedor bgColor="#A8968B" borderRadius="md" coloredShadow="black">
        <Contenedor position="relative" mx={2} mt={-3} borderRadius="md" coloredShadow="black">
          <Contenedor
            component="img"
            src={image}
            alt={title}
            borderRadius="xxl"
            width="100%"
            position="relative"
            zIndex={1}
            mt={4}
          />
        </Contenedor>
        <Contenedor bgColor="warning" py={1.5} />
      </Contenedor>
      <Contenedor p={1} mt={-2} textAlign="center" bgColor="white">
        <ThemeProvider theme={theme}>
          <TextSection
            // display="inline"
            variant={varianteTitulo}
            textTransform="capitalize"
            fontWeight="regular"
            sx={{ color: "#5B524D" }}
          >
            {title}
          </TextSection>
        </ThemeProvider>
        <Contenedor mt={0} mb={2}>
          <ThemeProvider theme={theme}>
            <TextSection
              variant={varianteTitulo}
              textTransform="capitalize"
              fontWeight="regular"
              sx={{ color: "#5B524D" }}
            >
              {description}
            </TextSection>
          </ThemeProvider>
        </Contenedor>
        <Contenedor mb={2}>
          {action.type === "external" ? (
            <Button
              component={MuiLink}
              href={action.route}
              target="_blank"
              rel="noreferrer"
              variant="gradient"
              size="small"
              color={action.color ? action.color : "dark"}
            >
              {action.label}
            </Button>
          ) : (
            <Button
              component={Link}
              to={action.route}
              variant="gradient"
              size="small"
              color={action.color ? action.color : "dark"}
            >
              {action.label}
            </Button>
          )}
        </Contenedor>
      </Contenedor>
    </Contenedor>
  );
}

// Typechecking props for the CenteredBlogCard
CenteredBlogCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "light",
    ]),
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default CenteredBlogCard;
