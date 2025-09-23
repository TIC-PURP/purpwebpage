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
        title="CRÉDITO DE AVÍO"
        text="Otorgamos financiamiento para las etapas de su cultivo, desde la preparación del terreno hasta su cosecha, incluyendo la adquisición de insumos agrícolas (crédito comercial)."
      />
      <ContenedorBloques bgColor="#dadada" ContainerSize={0.5} />
      <SeccionInformativa
        img={Refaccionario}
        color="#988920"
        title="CRÉDITO REFACCIONARIO"
        text="Otorgamos financiamiento para la adquisición de maquinaria agrícola y sistemas de riego."
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
          SOLICITA TU CRÉDITO
          <>
            <br />
            <br />
          </>
          REQUISITOS
        </TextSection>
        <Contenedor mx={{ xs: 10, lg: 54 }} mt={{ xs: 2, lg: 6 }}>
          <Grid justifyContent="center">
            <ThemeProvider theme={theme}>
              <TextSection variant="button" fontWeight="regular" sx={{ color: "#5B524D" }}>
                <>
                  1. Copia de credencial de lector vigente.
                  <br />
                  2. Copia de Constancia de Situación Fiscal Actualizada (RFC).
                  <br />
                  3. Copia de Clave Única de Registro de Población (CURP).
                  <br />
                  4. Copia de comprobante de domicilio (no mayor a 3 meses).
                  <br />
                  5. Copia de acta de nacimiento.
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
