import { Card } from "@mui/material";
import Contenedor from "components/Contenedor";
import ContenedorBloques from "pages/components/ContendorBloques";
import SeccionIconInfo from "components/Seccion/SeccionIconInfo";
// eslint-disable-next-line import/no-cycle
import routes from "../../../routes_EN/routes";
import Presentacion from "./Secciones/Presentacion";
import footerRoutes from "../../../routes_EN/footer.routes";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import Burbuja from "../../../pages/components/BubbleWhatsApp";
import Instalaciones from "./Secciones/Instalaciones";
import Paneles from "../../../assets/images/PURP_WEB/2.NOSOTROS/PANELES.jpg";
import Blanco from "../../../assets/images/PURP_WEB/4.GRANOS/CHECK_BLANCO.png";

// Image
// Routes

function Nosotros() {
  return (
    <>
      <Card fullWidth>
        <Navbar routes={routes} light sticky bgColor1="#494949" bgColor2="#000099" />
        <Presentacion />
        <Contenedor mt={{ xs: 0, lg: 8 }}>
          <ContenedorBloques bgColor="#dadada" ContainerSize={0.4} />
          <SeccionIconInfo
            img={Paneles}
            title="USE OF SOLAR PANELS"
            Check={Blanco}
            it1="Solar technology is used at Warehouse Los Pinitos to generate electrical energy through photovoltaic and solar thermal energy devices. "
            it2="A cleaner and safer energy alternative that does not aggravate global warming."
            color="#5B524D"
          />
          <ContenedorBloques bgColor="#dadada" ContainerSize={0.4} />
        </Contenedor>
        <Instalaciones />
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
    </>
  );
}

export default Nosotros;
