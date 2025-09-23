import React from "react";
import { Card } from "@mui/material";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Contenedor from "components/Contenedor";
import Navbar from "../../../components/Navbar";
import ContenedorBloques from "../../../pages/components/ContendorBloques";
import IconText from "../../../pages/components/IconText";
import TextSection from "../../../components/TextSection";
import footerRoutes from "../../../routes_EN/footer.routes";
import Footer from "../../../components/Footer";
import Presentacion from "./Secciones/Presentacion";
import Creditos from "./Secciones/Creditos";
import Burbuja from "../../../pages/components/BubbleWhatsApp";
import Check from "../../../assets/images/PURP_WEB/2.NOSOTROS/CHECK_CAFE.png";
import Contacto from "../../../pages/Secction/Financiera/Secciones/Contacto";
// eslint-disable-next-line import/no-cycle
import routes from "../../../routes_EN/routes";

const theme = createTheme();

theme.typography.h2 = {
  fontSize: "1.3rem",
  "@media (min-width:600px)": {
    fontSize: "2rem",
  },
};
theme.typography.button = {
  fontSize: "0.75rem",
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
        mt={2}
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
            We offer credits to enable agricultural activity. Equipment, spare parts and commercial
            credits.
            <br />
            ¡We support you in all stages of your cultivation!
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
              Texto="Timely and accessible credits"
              mt={-0.2}
            />
          </Grid>
          <Grid item xs={4} sm={4} md={3} lg={3.1} mt={2}>
            <IconText
              color="#5B524D"
              imagen={Check}
              variante="button"
              maxWidth="1rem"
              Texto="The best rates on the market"
              mt={-0.2}
            />
          </Grid>
          <Grid item xs={5} sm={5} md={3} lg={2} mt={2}>
            <IconText
              color="#5B524D"
              imagen={Check}
              variante="button"
              maxWidth="1rem"
              Texto="Simple and fast procedures"
              mt={-0.2}
            />
          </Grid>
          <Grid item xs={4} sm={4} md={2} lg={2} mt={2}>
            <IconText
              color="#5B524D"
              imagen={Check}
              variante="button"
              maxWidth="1rem"
              Texto="Qualified technical advice"
              mt={-0.2}
            />
          </Grid>
        </ThemeProvider>
      </Grid>
    </Contenedor>
    <Creditos />
    <Contacto
      titulo="CONTACT US"
      nombre="NAME"
      telefono="PHONE"
      creditos="TYPES OF CREDITS"
      ubicacion="LOCATION"
      enviar="SEND"
      phNombre="Full name"
      phTelefono="What is your number"
      phUbicacion="What is your location"
      avio="AVIO"
      refaccionario="REFACTIONARY"
      comercial="COMMERCIAL"
    />
    <Burbuja
      sub="Company account"
      text1="Hello 👋"
      text2="How can I help you?"
      phMensaje="Write a message"
      btn="Send"
    />
    <Contenedor pt={6} px={1} mt={6}>
      <Footer content={footerRoutes} ColorFondo="#5B524D" />
    </Contenedor>
    <ContenedorBloques bgColor="#FFCC00" ContainerSize={0.5} />
  </Card>
);
export default Parafinanciera;
