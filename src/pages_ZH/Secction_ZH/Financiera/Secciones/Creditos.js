import React from "react";
import { Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Contenedor from "components/Contenedor";
import ContenedorBloques from "pages/components/ContendorBloques";
import SeccionInformativa from "../../../../components/Seccion/SeccionInfo";
import TextSection from "../../../../components/TextSection";
import Avio from "../../../../assets/images/PURP_WEB/3.FINANCIERA/AVIO.jpg";
import Refaccionario from "../../../../assets/images/PURP_WEB/3.FINANCIERA/REFACCIONARIO.jpg";

const theme = createTheme();

theme.typography.h4 = {
  fontSize: "1rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
  },
};

function Creditos() {
  return (
    <Contenedor>
      <SeccionInformativa
        img={Avio}
        color="#988920"
        title="飛行積分"
        text="我們為您的耕種階段提供融資，從整地到收穫，包括購買農業投入品（商業信用）。"
      />
      <ContenedorBloques bgColor="#dadada" ContainerSize={0.5} />
      <SeccionInformativa
        img={Refaccionario}
        color="#988920"
        title="熟食信用"
        text="我們為購買農業機械和灌溉系統提供融資。"
      />
      <ContenedorBloques bgColor="#dadada" ContainerSize={0.5} />
      <Contenedor>
        <TextSection
          mt={6}
          variant="h4"
          fontWeight="bold"
          sx={{ color: "#5B524D" }}
          textAlign="center"
        >
          請求您的信用
          <>
            <br />
            <br />
          </>
          要求
        </TextSection>
        <Contenedor mx={{ xs: 2, lg: 58 }} mt={{ xs: 2, lg: 6 }}>
          <Grid justifyContent="center">
            <ThemeProvider theme={theme}>
              <TextSection variant="button" fontWeight="regular" sx={{ color: "#5B524D" }}>
                <>
                  1.有效選民身分證影本。
                  <br />
                  2.更新稅務情況證明 (RFC) 的副本。
                  <br />
                  3. 唯一人口登記代碼 (CURP) 的副本。
                  <br />
                  4.地址證明影本（不超過3個月）。
                  <br />
                  5. 出生證明影本。
                </>
              </TextSection>
            </ThemeProvider>
          </Grid>
        </Contenedor>
      </Contenedor>
    </Contenedor>
  );
}

export default Creditos;
