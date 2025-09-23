import { Card } from "@mui/material";
import Contenedor from "components/Contenedor";
import ContenedorBloques from "pages/components/ContendorBloques";
// eslint-disable-next-line import/no-cycle
import routes from "routes/routes";
import SeccionIconInfo from "../../../components/Seccion/SeccionIconInfo";
import Presentacion from "./Secciones/Presentacion";
import footerRoutes from "../../../routes/footer.routes";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import Burbuja from "../../components/BubbleWhatsApp";
import Instalaciones from "./Secciones/Instalaciones";
import Blanco from "../../../assets/images/PURP_WEB/4.GRANOS/CHECK_BLANCO.png";
import Paneles from "../../../assets/images/PURP_WEB/2.NOSOTROS/PANELES.jpg";

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
            color="#5B524D"
            title="USO DE PANELES SOLARES"
            Check={Blanco}
            it1="La tecnología solar se utiliza en Bodega Los Pinitos para generar energía eléctrica mediante dispositivos fotovoltaicos y de energía solar térmica."
            it2="Una alternativa de energía más limpia y segura que no agrava el calentamiento global."
          />
          <ContenedorBloques bgColor="#dadada" ContainerSize={0.4} />
        </Contenedor>
        <Instalaciones />
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
    </>
  );
}

export default Nosotros;
