import { Grid, Container } from "@mui/material";
import TextSection from "components/TextSection";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Icontext from "../../../components/IconText";
import ContenedorBloques from "../../../components/ContendorBloques";
import Contenedor from "../../../../components/Contenedor";

const theme = createTheme();

theme.typography.h3 = {
  fontSize: "1rem",
  "@media (min-width:600px)": {
    fontSize: "1.8rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.5rem",
  },
};
theme.typography.h6 = {
  fontSize: "0.6rem",
  "@media (min-width:600px)": {
    fontSize: "2rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.2rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.2rem",
  },
};

/* eslint-disable react/prop-types */
function Servicios({ img, color, title, it1, it2, it3, Check }) {
  const colors = {
    mainColor: color || "#ffffff",
    secondaryColor: color || "#ffffff",
  };
  return (
    <Contenedor bgColor="#000099">
      <ContenedorBloques bgColor="#dadada" ContainerSize={0.5} />
      <Contenedor
        minHeight="100%"
        width="100%"
        sx={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container>
          <Grid container direction="row-reverse">
            <Contenedor
              width="40%"
              sx={{
                backgroundImage: ({ functions: { linearGradient, rgba } }) =>
                  `${linearGradient(rgba(colors.mainColor, 0.7), rgba(colors.mainColor, 0.7))}`,
                backgroundSize: "cover",
              }}
              mt={{ xs: 0, md: 0, lg: 0 }}
            >
              <Grid mx={{ xs: 0, lg: 5 }} mb={{ xs: 3, lg: 5 }} lg={12}>
                <ThemeProvider theme={theme}>
                  <TextSection
                    variant="h3"
                    textAlign="center"
                    sx={{ color: "#ffffff" }}
                    mt={{ xs: 4, lg: 4 }}
                    mb={{ xs: 2, lg: 5 }}
                  >
                    {title}
                  </TextSection>
                  <Icontext
                    color="#ffffff"
                    imagen={Check}
                    maxWidth="1.2rem"
                    variante="h6"
                    Texto={it1}
                    mt={0}
                    mb={{ xs: 2, lg: 4 }}
                  />
                  <Icontext
                    color="#ffffff"
                    imagen={Check}
                    maxWidth="1.2rem"
                    variante="h6"
                    Texto={it2}
                    mt={0}
                    mb={{ xs: 2, lg: 4 }}
                  />
                  <Icontext
                    color="#ffffff"
                    imagen={Check}
                    maxWidth="1.2rem"
                    variante="h6"
                    Texto={it3}
                    mt={0}
                  />
                </ThemeProvider>
              </Grid>
            </Contenedor>
          </Grid>
        </Container>
      </Contenedor>
      <ContenedorBloques bgColor="#dadada" ContainerSize={0.5} />
    </Contenedor>
  );
}
export default Servicios;
