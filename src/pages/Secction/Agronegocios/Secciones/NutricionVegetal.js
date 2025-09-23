import Contenedor from "components/Contenedor";
import { Container, Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextSection from "../../../../components/TextSection";
import InfoCard from "../../../../components/InfoCard";

const theme = createTheme();

theme.typography.h2 = {
  fontSize: "1rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
  },
};

function NutricionVegetal() {
  return (
    <Contenedor>
      <Container>
        <Contenedor bgColor="#ffffff" mt={6} mb={4}>
          <ThemeProvider theme={theme}>
            <Grid container justifyContent="center">
              <TextSection
                variant="h2"
                fontWeight="bold"
                sx={{ color: "#5B524D" }}
                textAlign="center"
              >
                NUTRICIÓN VEGETAL
              </TextSection>
            </Grid>
          </ThemeProvider>
        </Contenedor>
        <Grid
          container
          spacing={{ xs: 2, lg: 4 }}
          justifyContent="center"
          mt={{ xs: 0, lg: 6 }}
          mb={{ xs: 2, lg: 4 }}
        >
          {[
            {
              title: "UREA",
              subtitle: "FERTILIZANTE SÓLIDO",
              features: [
                "Fertilizante granulado a base de 46% de Nitrógeno.",
                "Nomenclatura: 46 - 00 - 00.",
                "Para granos y hortalizas.",
              ],
            },
            {
              title: "MAP",
              subtitle: "FERTILIZANTE SÓLIDO",
              features: [
                "Fertilizante granulado a base de 11% de Nitrógeno y 52% Fósforo.",
                "Nomenclatura: 11 - 52 - 00.",
                "Para granos y hortalizas.",
              ],
            },
            {
              title: "SULFATO DE AMONIO",
              subtitle: "FERTILIZANTE SÓLIDO",
              features: [
                "Fertilizante granulado a base de 21% de Nitrógeno y 24% Azufre.",
                "Nomenclatura: 21 - 00 - 00 - 24.",
                "Para granos.",
                "Para suelos compactados.",
              ],
            },
            {
              title: "MEZCLA 3X1",
              subtitle: "MEZCLA FÍSICA",
              features: [
                "Mezcla física balanceada con macro y micro elementos.",
                "Para cultivos.",
                "Muy apropiado para inicio de cultivos.",
              ],
            },
            {
              title: "N32",
              subtitle: "FERTILIZANTE LÍQUIDO",
              features: [
                "Fertilizante líquido a base de 32% de Nitrógeno. Complejo químico Nitrogenado: Ureico, Amoniacal y Nítrico. De reacción ácida.",
                "Nomenclatura: 32 - 00 - 00.",
                "Para diversos cultivos.",
              ],
            },
            {
              title: "MEZCLAS LÍQUIDAS",
              subtitle: "FERTILIZANTE LÍQUIDO",
              features: ["Para cada etapa fenológica de cultivo."],
            },
            {
              title: "GAS AMONÍACO",
              subtitle: "FERTILIZANTE GASEOSO",
              features: ["Fertilizante Nitrogenado al 82%.", "NH3.", "Para cultivos."],
            },
          ].map((card, thing) => (
            <Grid item key={thing.id} xs={6} sm={6} md={4} lg={3}>
              <InfoCard
                title={card.title}
                subtitle={card.subtitle}
                bgColor="linear-gradient(to bottom, #88b04b, #6b8e23)"
                features={card.features}
                sx={{
                  height: "100%",
                  minHeight: "50px", // ← Esto asegura altura uniforme
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Contenedor>
  );
}

export default NutricionVegetal;
