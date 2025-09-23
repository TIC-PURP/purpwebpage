import React from "react";
import { Card } from "@mui/material";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Contenedor from "components/Contenedor";
import Navbar from "../../../components/Navbar";
import ContenedorBloques from "../../components/ContendorBloques";
import IconText from "../../components/IconText";
import TextSection from "../../../components/TextSection";
import footerRoutes from "../../../routes/footer.routes";
import Footer from "../../../components/Footer";
import Presentacion from "./Secciones/Presentacion";
import Creditos from "./Secciones/Creditos";
import Burbuja from "../../components/BubbleWhatsApp";
import Check from "../../../assets/images/PURP_WEB/2.NOSOTROS/CHECK_CAFE.png";
import Contacto from "./Secciones/Contacto";
// eslint-disable-next-line import/no-cycle
import routes from "../../../routes/routes";

const theme = createTheme();

theme.typography.h2 = {
  fontSize: "1.3rem",
  "@media (min-width:600px)": {
    fontSize: "2rem",
  },
};
theme.typography.button = {
  fontSize: "0.7rem",
  "@media (min-width:600px)": {
    fontSize: "1rem",
  },
};

const Parafinanciera = () => (
  <Card>
    <Navbar routes={routes} light sticky bgColor1="#494949" bgColor2="#988920" />
    <Presentacion />
    <Contenedor bgColor="#dadada" py={{ xs: 0.4, lg: 0.6 }} />
    <Contenedor>
      <Grid
        container
        item
        xs={12}
        alignItems="center"
        justifyContent="center"
        mt={4}
        mb={4}
        md={12}
        lg={12}
      >
        <ThemeProvider theme={theme}>
          <TextSection
            variant="button"
            fontWeight="medium"
            sx={{ color: "#5B524D" }}
            textAlign="center"
          >
            Ofrecemos créditos para habilitar la actividad agrícola. Créditos de avío, refaccionario
            y comercial.
            <br />
            ¡Te respaldamos en todas las etapas de tu cultivo!
          </TextSection>
        </ThemeProvider>
      </Grid>
      <Grid container item justifyContent="center" textAlign="center" mt={2} mb={3} xs={12}>
        <ThemeProvider theme={theme}>
          <Grid item xs={5} sm={5} md={3} lg={3.2} mt={2}>
            <IconText
              color="#5B524D"
              variante="button"
              imagen={Check}
              maxWidth="1rem"
              Texto="Créditos oportunos y accesibles."
              mt={-0.2}
            />
          </Grid>
          <Grid item xs={4} sm={4} md={3} lg={3.1} mt={2}>
            <IconText
              color="#5B524D"
              imagen={Check}
              variante="button"
              maxWidth="1rem"
              Texto="Las mejores tasas del mercado."
              mt={-0.2}
            />
          </Grid>
          <Grid item xs={5} sm={5} md={3} lg={2.8} mt={2}>
            <IconText
              color="#5B524D"
              imagen={Check}
              variante="button"
              maxWidth="1rem"
              Texto="Trámites sencillos y rápidos."
              mt={-0.2}
            />
          </Grid>
          <Grid item xs={4} sm={4} md={3} lg={2.8} mt={2}>
            <IconText
              color="#5B524D"
              imagen={Check}
              variante="button"
              maxWidth="1rem"
              Texto="Asesoría técnica calificada."
              mt={-0.2}
            />
          </Grid>
        </ThemeProvider>
      </Grid>
    </Contenedor>
    <Creditos />
    <Contacto
      titulo="CONTÁCTANOS"
      nombre="NOMBRE"
      telefono="TELEFONO"
      creditos="TIPOS DE CRÉDITOS"
      ubicacion="UBICACION"
      enviar="ENVIAR"
      phNombre="Nombre completo"
      phTelefono="Cual es su numero"
      phUbicacion="Cual es su ubicacion"
      avio="Avío"
      refaccionario="Refaccionario"
      comercial="Comercial"
    />
    <Burbuja
      sub="Cuenta de empresa"
      text1="Hola 👋"
      text2="Como te puedo ayudar?"
      phMensaje="Escribe un mensaje"
      btn="Enviar"
    />
    <Contenedor pt={6} px={1} mt={6}>
      <Footer content={footerRoutes} ColorFondo="#5B524D" />
    </Contenedor>
    <ContenedorBloques bgColor="#FFCC00" ContainerSize={0.5} />
  </Card>
);
export default Parafinanciera;
