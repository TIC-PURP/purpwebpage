import Contenedor from "components/Contenedor";
import { Container, Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextSection from "../../../../components/TextSection";
import InfoCard from "../../../../components/InfoCard";

const theme = createTheme();

theme.typography.h2 = {
  fontSize: "0.9rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
  },
};
theme.typography.h6 = {
  fontSize: "0.7rem",
  "@media (min-width:600px)": {
    fontSize: "1rem",
  },
};
theme.typography.button = {
  fontSize: "0.7rem",
  "@media (min-width:600px)": {
    fontSize: "1rem",
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
                VEGETAL NUTRITION
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
              subtitle: "SOLID FERTILIZER",
              features: [
                "Granulated fertilizer based on 46% Nitrogen.",
                "Nomenclature: 46 - 00 - 00.",
                "For grains and vegetables.",
              ],
            },
            {
              title: "MAP",
              subtitle: "SOLID FERTILIZER",
              features: [
                "Granulated fertilizer based on 11% Nitrogen and 52% Phosphorus.",
                "Nomenclature: 11 - 52 - 00.",
                "For grains and vegetables.",
              ],
            },
            {
              title: "AMMONIUM SULFATE",
              subtitle: "SOLID FERTILIZER",
              features: [
                "Granulated fertilizer based on 21% Nitrogen and 24% Sulfur.",
                "Nomenclature: 21 - 00 - 00 - 24.",
                "For grains.",
                "For compacted soils.",
              ],
            },
            {
              title: "3X1 MIX - PURP",
              subtitle: "PHYSICAL MIX",
              features: [
                "Balanced physical mixture with macro and micro elements.",
                "Para cultivos.",
                "For crops.",
              ],
            },
            {
              title: "N32",
              subtitle: "LIQUID FERTILIZER",
              features: [
                "Liquid fertilizer based on 32% Nitrogen. Nitrogen chemical complex: Ureic, Ammoniacal and Nitric. Acid reaction.",
                "Nomenclature: 32 - 00 - 00.",
                "For various crops.",
              ],
            },
            {
              title: "LIQUID MIXES",
              subtitle: "LIQUID FERTILIZER",
              features: ["or each phenological stage of cultivation."],
            },
            {
              title: "AMMONIA GAS",
              subtitle: "GASEOUS FERTILIZER",
              features: ["82% Nitrogen Fertilizer.", "NH3.", "For crops."],
            },
          ].map((card, thing) => (
            <Grid item key={thing.id} xs={12} sm={6} md={4} lg={3}>
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
