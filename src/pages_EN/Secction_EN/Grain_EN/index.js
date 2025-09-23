import Contenedor from "components/Contenedor";
import { Card } from "@mui/material";
import ContenedorBloques from "pages/components/ContendorBloques";
import Footer from "components/Footer";
import footerRoutes from "../../../routes_EN/footer.routes";
import Navbar from "../../../components/Navbar";
import Presentacion from "./Secciones/Presentacion";
import MercadoNacional from "../../../pages/Secction/Granos/Secciones/MercadoNacional";
import Mercado from "../../../assets/images/PURP_WEB/4.GRANOS/EN/MercadoNacional_EN.jpg";
import Productos from "./Secciones/Productos";
import Servicios from "../../../pages/Secction/Granos/Secciones/Servicios";
import VentaProducto from "../../../pages/Secction/Granos/Secciones/VentaProducto";
import Burbuja from "../../../pages/components/BubbleWhatsApp";
import Blanco from "../../../assets/images/PURP_WEB/4.GRANOS/CHECK_BLANCO.png";
import contenedor from "../../../assets/images/PURP_WEB/4.GRANOS/CONTENEDOR.png";
import mercadolibreImg from "../../../assets/images/images_purp/mercado_libre.png";
import costalImg from "../../../assets/images/PURP_WEB/4.GRANOS/COSTAL25.png";
import lbsImg from "../../../assets/images/PURP_WEB/4.GRANOS/COSTAL20.png";
import bolsaImg from "../../../assets/images/PURP_WEB/4.GRANOS/BOLSITA.png";
// eslint-disable-next-line import/no-cycle
import routes from "../../../routes_EN/routes";

function ServiciosGranos() {
  return (
    <>
      <Card fullWidth>
        <Navbar routes={routes} light sticky bgColor1="#494949" bgColor2="#000099" />
        <Presentacion />
        <ContenedorBloques bgColor="#dadada" /* "#fffffff" */ ContainerSize={0.5} />
        <Productos />
        <ContenedorBloques bgColor="#dadada" /* "#dadada" */ ContainerSize={0.6} />
        <MercadoNacional titulo="PRESENT IN THE NATIONAL AND INTERNATIONAL MARKET" img={Mercado} />
        <Servicios
          img={contenedor}
          title="SERVICES"
          color="#5B524D"
          Check={Blanco}
          it1="Conservation, storage and assembly"
          it2="Market intelligence"
          it3="Logistics - we hire freight to the entire Republic"
        />
        <VentaProducto
          title="¡GET OUR PRODUCTS!"
          logo={mercadolibreImg}
          sub="Peruvian Bean"
          img1={costalImg}
          d1="PURP Brand 25 Kg."
          img2={bolsaImg}
          d2="PURP Brand 1 Kg."
          img3={lbsImg}
          d3="PURP Brand 20 Lbs."
          btn="BUY"
        />
        <Burbuja
          sub="Company account"
          text1="Hello 👋"
          text2="How can I help you?"
          phMensaje="Write a message"
          btn="Send"
        />
        <Contenedor pt={6} px={1}>
          <Footer content={footerRoutes} ColorFondo="#5B524D" />
        </Contenedor>
        <ContenedorBloques bgColor="#FFCC00" ContainerSize={0.5} />
      </Card>
    </>
  );
}

export default ServiciosGranos;
