import React from "react";
import { Grid, Card } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextSection from "../../components/TextSection";
import Carrusel from "./Secciones/Carrusel";
import Contacto from "../components/Contacto/Contacto";
import CumplidosPurp from "../components/CumplidosPurp";
// eslint-disable-next-line import/no-cycle
import routes from "../../routes/routes";
import footerRoutes from "../../routes/footer.routes";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Contenedor from "../../components/Contenedor";
import ContenedorBloques from "../components/ContendorBloques";
import RotatingCardSection from "../../components/RotatingCard/index";
import RotatingCard2 from "../../components/RotatingCard/RoutingCardv2";
import servicio7 from "../../assets/images/PURP_WEB/1.INICIO/FINANCIERA.png";
import agro from "../../assets/images/PURP_WEB/1.INICIO/AGRONEGOCIOS.png";
import SyG from "../../assets/images/PURP_WEB/1.INICIO/GRANOS.png";
import PNA from "../../assets/images/PURP_WEB/6.PNA/10.png";
import Burbuja from "../components/BubbleWhatsApp";

// Crear tema personalizado para ajustar la tipografía y el diseño
const theme = createTheme({
  typography: {
    h2: {
      fontSize: "2rem",
      "@media (min-width:600px)": {
        fontSize: "2rem",
      },
      "@media (min-width:960px)": {
        fontSize: "2rem",
      },
      "@media (min-width:1280px)": {
        fontSize: "2rem",
      },
    },
    body1: {
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
    },
    body2: {
      fontSize: "0.75rem",
      "@media (min-width:600px)": {
        fontSize: "0.99rem",
      },
      "@media (min-width:960px)": {
        fontSize: "1rem",
      },
      "@media (min-width:1280px)": {
        fontSize: "2rem",
      },
    },
  },
});

function Presentation() {
  return (
    <Card>
      {/* Contenedor principal con fondo blanco */}
      <Contenedor bgColor="white">
        {/* Barra de navegación con rutas y configuración de colores */}
        <Navbar routes={routes} light sticky bgColor1="#494949" bgColor2="#000099" />

        {/* Carrusel de bienvenida */}
        <Carrusel
          text="Somos"
          palabras={["Confianza", "Responsabilidad", "Innovación", "Integridad", "Calidad"]}
        />
        {/* Sección de propósito de la empresa */}
        <ContenedorBloques bgColor="#ffffff">
          <Grid
            container
            item
            xs={12}
            lg={10}
            justifyContent="center"
            alignItems="center"
            sx={{ mx: "auto" }}
            mt={{ xs: 1, md: 1, lg: 1 }}
            mb={{ xs: 4, md: 4, lg: 10 }}
          >
            <ThemeProvider theme={theme}>
              <TextSection variant="body1" sx={{ color: "#5B524D" }} textAlign="center">
                <span style={{ fontWeight: "bold", marginLeft: "5px" }}>Nuestro propósito:</span>
                <span style={{ marginLeft: "5px" }}>
                  Conectar con la tierra y alimentar al mundo, creando valor y confianza.
                </span>
              </TextSection>
            </ThemeProvider>
          </Grid>
        </ContenedorBloques>

        {/* Sección de tarjetas giratorias de "Conócenos" */}
        <ContenedorBloques bgColor="#ffffff">
          <ThemeProvider theme={theme}>
            <Grid
              container
              item
              xs={12}
              justifyContent="center"
              alignItems="center"
              sx={{ mx: "auto" }}
            >
              <TextSection
                variant="h2"
                fontWeight="bold"
                sx={{ color: "#5B524D" }}
                textAlign="center"
              >
                CONÓCENOS
              </TextSection>
            </Grid>
          </ThemeProvider>

          {/* Tarjetas giratorias de servicios con imagen, título y enlace */}
          <Grid container spacing={3} alignContent="center" sx={{ mx: "auto" }} mb={8} mt={1}>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <RotatingCardSection
                TituloF="INSUMOS"
                ImgF={agro}
                TituloT="INSUMOS"
                text="Leer más"
                ruta="/pages/Insumos_agricolas"
                ImgT={agro}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <RotatingCardSection
                TituloF="GRANOS"
                ImgF={SyG}
                TituloT="GRANOS"
                text="Leer más"
                ruta="/pages/Servicios_y_granos"
                ImgT={SyG}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <RotatingCardSection
                TituloF="FINANCIERA"
                ImgF={servicio7}
                TituloT="FINANCIERA"
                text="Leer más"
                ruta="/pages/Financiera_purp"
                ImgT={servicio7}
              />
            </Grid>
          </Grid>
        </ContenedorBloques>

        {/* Sección de tarjeta giratorias de "PNA" */}
        <ContenedorBloques bgColor="#ffffff">
          <Grid container spacing={3} alignContent="center" sx={{ mx: "auto" }} mb={8} mt={1}>
            <Grid item xs={12} sm={12} md={4} lg={12}>
              <RotatingCard2
                frontImage={PNA}
                backImage={PNA}
                action={{
                  type: "internal",
                  route: "/PNA",
                  label: "MÁS INFORMACIÓN",
                }}
              />
            </Grid>
          </Grid>
        </ContenedorBloques>

        {/* Cumplidos Purp: Sección de logros de la empresa */}
        <CumplidosPurp texto="36 Años Generando Confianza" />

        {/* Formulario de contacto con placeholders específicos */}
        <Contacto
          titulo="CONTÁCTANOS"
          nombre="NOMBRE"
          asunto="ASUNTO"
          correo="CORREO"
          telefono="TELÉFONO"
          mensaje="MENSAJE"
          enviar="ENVIAR"
          phNombre="Nombre completo"
          phAsunto="¿Cuál es su asunto?"
          phCorreo="¿Cuál es su correo?"
          phTelefono="¿Cuál es su número?"
          phMensaje="Escriba su mensaje..."
        />

        {/* Botón flotante de WhatsApp para contacto rápido */}
        <Burbuja
          sub="Cuenta de empresa"
          text1="Hola 👋"
          text2="Como te puedo ayudar?"
          phMensaje="Escribe un mensaje"
          btn="Enviar"
        />

        {/* Footer con rutas de navegación y color personalizado */}
        <Contenedor pt={6} px={1} mt={6}>
          <Footer content={footerRoutes} ColorFondo="#5B524D" />
        </Contenedor>

        {/* Contenedor adicional para el fondo amarillo en la parte inferior */}
        <ContenedorBloques bgColor="#FFCC00" ContainerSize={0.5} />
      </Contenedor>
    </Card>
  );
}

export default Presentation;
