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

theme.typography.button = {
  fontSize: "0.7rem",
  "@media (min-width:600px)": {
    fontSize: "1rem",
  },
};

function Creditos() {
  return (
    <Contenedor>
      <SeccionInformativa
        img={Avio}
        color="#988920"
        title="AVIO CREDIT"
        text="We provide financing for the stages of your cultivation, from land preparation to harvest, including the acquisition of agricultural inputs (Commercial credit"
      />
      <ContenedorBloques bgColor="#dadada" ContainerSize={0.5} />
      <SeccionInformativa
        img={Refaccionario}
        color="#988920"
        title="REFACTIONARY CREDIT"
        text="We provide financing for the acquisition of agricultural machinery and irrigation systems."
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
          REQUEST YOUR CREDIT
          <>
            <br />
            <br />
          </>
          REQUIREMENTS
        </TextSection>
        <Contenedor mx={{ xs: 2, lg: 58 }} mt={{ xs: 2, lg: 6 }}>
          <Grid justifyContent="center">
            <ThemeProvider theme={theme}>
              <TextSection variant="button" fontWeight="regular" sx={{ color: "#5B524D" }}>
                <>
                  1 . Copy of valid voter ID card.
                  <br />
                  2 . Copy of Updated Tax Situation Certificate (RFC).
                  <br />
                  3. Copy of the Unique Population Registry Code (CURP).
                  <br />
                  4. Copy of proof of address (no older than 3 months).
                  <br />
                  5. Copy of birth certificate.
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
