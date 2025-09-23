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
                植物營養
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
              title: "尿素",
              subtitle: "固體肥料",
              features: ["顆粒肥料基於 46% 氮氣.", "命名法：46 - 00 - 00.", "適用於穀物和蔬菜."],
            },
            {
              title: "地圖",
              subtitle: "固體肥料",
              features: [
                "顆粒肥料基於 11% 氮和 52% 磷.",
                "命名法：11 - 52 - 00.",
                "適用於穀物和蔬菜.",
              ],
            },
            {
              title: "粒狀硫酸銨",
              subtitle: "固體肥料",
              features: [
                "顆粒肥料基於 21% 氮和 24% 硫.",
                "命名法：21 - 00 - 00 - 24.",
                "對於穀物.",
                "P對於壓實土壤.",
              ],
            },
            {
              title: "3X1 混合",
              subtitle: "物理混合",
              features: ["宏觀和微觀元素的平衡物理混合物.", "對於農作物.", "M非常適合初種作物."],
            },
            {
              title: "N32",
              subtitle: "液體肥料",
              features: [
                "基於 32% 氮的液體肥料。氮化學複合物：尿酸、氨和硝酸。酸反應.",
                "命名法：32 - 00 - 00.",
                "適用於各種農作物.",
              ],
            },
            {
              title: "液體混合物",
              subtitle: "液體肥料",
              features: ["對於栽培的每個物候階段."],
            },
            {
              title: "氨氣",
              subtitle: "氣態肥料",
              features: ["82%氮肥.", "氨.", "對於農作物."],
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
                  minHeight: "50", // ← Esto asegura altura uniforme
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
