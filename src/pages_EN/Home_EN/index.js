import { Grid, Card } from "@mui/material";
// EJEMPLO
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextSection from "../../components/TextSection";
// import Advertencia from "../components/Advertencia";
import Carrusel from "../../pages/Principal/Secciones/Carrusel";
import Contacto from "../../pages/components/Contacto/Contacto";
import CumplidosPurp from "../../pages/components/CumplidosPurp";

// Ruta
// eslint-disable-next-line import/no-cycle
import routes from "../../routes_EN/routes";
import footerRoutes from "../../routes_EN/footer.routes";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

// Sustituye MK
import Contenedor from "../../components/Contenedor";
import ContenedorBloques from "../../pages/components/ContendorBloques";
import RotatingCardSection from "../../components/RotatingCard/index";
import RotatingCard2 from "../../components/RotatingCard/RoutingCardv2";

// Image
import servicio7 from "../../assets/images/PURP_WEB/1.INICIO/FINANCIERA.png";
import agro from "../../assets/images/PURP_WEB/1.INICIO/AGRONEGOCIOS.png";
import SyG from "../../assets/images/PURP_WEB/1.INICIO/GRANOS.png";
import Burbuja from "../../pages/components/BubbleWhatsApp";
import PNA from "../../assets/images/PURP_WEB/6.PNA/10.png";

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
          text="Are"
          palabras={["Trust", "Responsibility", "Innovation", "Integrity", "Quality"]}
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
                <span style={{ fontWeight: "bold", marginLeft: "5px" }}>Our purpose:</span>
                <span style={{ marginLeft: "5px" }}>
                  Connecting with the land and feeding the world, creating value and trust.
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
                KNOW US
              </TextSection>
            </Grid>
          </ThemeProvider>

          {/* Tarjetas giratorias de servicios con imagen, título y enlace */}
          <Grid container spacing={3} alignContent="center" sx={{ mx: "auto" }} mb={8} mt={1}>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <RotatingCardSection
                TituloF="SUPPLIES"
                ImgF={agro}
                TituloT="SUPPLIES"
                text="Read More"
                ruta="/pages/agriculture_supplies"
                ImgT={agro}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <RotatingCardSection
                TituloF="GRAIN"
                ImgF={SyG}
                TituloT="GRAIN"
                text="Read More"
                ruta="/pages/service_graians"
                ImgT={SyG}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <RotatingCardSection
                TituloF="FINANCIAL"
                ImgF={servicio7}
                TituloT="FINANCIAL"
                text="Read More"
                ruta="/pages/purp_financial"
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
                  label: "MORE INFORMATION",
                }}
              />
            </Grid>
          </Grid>
        </ContenedorBloques>

        {/* Cumplidos Purp: Sección de logros de la empresa */}
        <CumplidosPurp texto="36 Years Generating Trust" />

        {/* Formulario de contacto con placeholders específicos */}
        <Contacto
          titulo="CONTACT US"
          nombre="NAME"
          asunto="AFFAIR"
          correo="EMAIL"
          telefono="PHONE"
          mensaje="MESSAGE"
          enviar="SEND"
          phNombre="Full name"
          phAsunto="What's your business?"
          phCorreo="What is your email?"
          phTelefono="What is your number?"
          phMensaje="Write your message..."
        />

        {/* Botón flotante de WhatsApp para contacto rápido */}
        <Burbuja
          sub="Business account"
          text1="HI 👋"
          text2="How can I help you?"
          phMensaje="Write a message"
          btn="Send"
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
