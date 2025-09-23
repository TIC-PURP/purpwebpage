import { Grid, Card } from "@mui/material";
// EJEMPLO
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextSection from "../../components/TextSection";
import Carrusel from "../../pages/Principal/Secciones/Carrusel";
import Contacto from "../../pages/components/Contacto/Contacto";
import CumplidosPurp from "../../pages/components/CumplidosPurp";

// Ruta
// eslint-disable-next-line import/no-cycle
import routes from "../../routes_ZH/routes";
import footerRoutes from "../../routes_ZH/footer.routes";
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
        <Carrusel text="是" palabras={["相信", "責任", "創新", "正直", "品質"]} />

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
                <span style={{ fontWeight: "bold", marginLeft: "5px" }}>我們的宗旨：</span>
                <span style={{ marginLeft: "5px" }}>與地球相連，養活世界，創造價值和信任。</span>
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
                了解我們
              </TextSection>
            </Grid>
          </ThemeProvider>

          {/* Tarjetas giratorias de servicios con imagen, título y enlace */}
          <Grid container spacing={3} alignContent="center" sx={{ mx: "auto" }} mb={8} mt={1}>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <RotatingCardSection
                TituloF="補給品"
                ImgF={agro}
                TituloT="補給品"
                text="閱讀更多"
                ruta="/page/insumosZH"
                ImgT={agro}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <RotatingCardSection
                TituloF="糧食"
                ImgF={SyG}
                TituloT="糧食"
                text="閱讀更多"
                ruta="/page/serviciosZH"
                ImgT={SyG}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <RotatingCardSection
                TituloF="金融的"
                ImgF={servicio7}
                TituloT="金融的"
                text="閱讀更多"
                ruta="/page/financieraZH"
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
                  label: "更多信息",
                }}
              />
            </Grid>
          </Grid>
        </ContenedorBloques>

        {/* Cumplidos Purp: Sección de logros de la empresa */}
        <CumplidosPurp texto="36 年累積信任" />

        {/* Formulario de contacto con placeholders específicos */}
        <Contacto
          titulo="聯絡我們"
          nombre="姓名"
          asunto="事务"
          correo="邮件"
          telefono="电话"
          mensaje="信息"
          enviar="发送"
          phNombre="全名"
          phAsunto="您从事什么业务"
          phCorreo="你的电子邮箱是什么"
          phTelefono="你的号码是多少"
          phMensaje="写下您的留言..."
        />

        {/* Botón flotante de WhatsApp para contacto rápido */}
        <Burbuja
          sub="公司账户"
          text1="你好 👋"
          text2="我怎么帮你？"
          phMensaje="写一个信息"
          btn="发送"
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
