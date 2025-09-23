import { Grid, Container } from "@mui/material";
import TextSection from "components/TextSection";
import Contenedor from "components/Contenedor";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Icontext from "../../pages/components/IconText";

const theme = createTheme();

theme.typography.h3 = {
  fontSize: "1rem",
  "@media (min-width:600px)": {
    fontSize: "1.2rem",
  },
  "@media (min-width:960px)": {
    fontSize: "1.3rem",
  },
  "@media (min-width:1280px)": {
    fontSize: "1.5rem",
  },
};
theme.typography.h6 = {
  fontSize: "0.8rem",
  "@media (min-width:600px)": {
    fontSize: "0.6rem",
  },
  "@media (min-width:960px)": {
    fontSize: "1rem",
  },
  "@media (min-width:1280px)": {
    fontSize: "1rem",
  },
};

// eslint-disable-next-line react/prop-types
function SeccionIconInfo({ img, color, title, it1, it2, Check }) {
  const colors = {
    mainColor: color || "#ffffff",
    secondaryColor: color || "#ffffff",
  };
  return (
    <>
      <Contenedor>
        <Contenedor
          minHeight="100%"
          width="100%"
          sx={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            placeItems: "center",
          }}
        >
          <Container>
            <Grid container direction="row-reverse" zIndex={0}>
              <Contenedor
                width="40%"
                sx={{
                  backgroundImage: ({ functions: { linearGradient, rgba } }) =>
                    `${linearGradient(rgba(colors.mainColor, 0.7), rgba(colors.mainColor, 0.7))}`,
                  backgroundSize: "cover",
                }}
                mt={{ xs: 0, md: 0, lg: 0 }}
                py={3}
                zIndex={0}
              >
                <Grid mx={{ xs: 0, lg: 5 }} mb={{ xs: 3, lg: 5 }} lg={12} textAlign="justify">
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
                  </ThemeProvider>
                </Grid>
              </Contenedor>
            </Grid>
          </Container>
        </Contenedor>
      </Contenedor>
    </>
  );
}

export default SeccionIconInfo;
