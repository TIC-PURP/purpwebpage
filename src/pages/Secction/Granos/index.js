import Contenedor from "components/Contenedor";
import { Card } from "@mui/material";
import ContenedorBloques from "pages/components/ContendorBloques";
import Footer from "components/Footer";
import footerRoutes from "routes/footer.routes";
import Navbar from "../../../components/Navbar";
import Presentacion from "./Secciones/Presentacion";
import MercadoNacional from "./Secciones/MercadoNacional";
import Productos from "./Secciones/Productos";
import Servicios from "./Secciones/Servicios";
import VentaProducto from "./Secciones/VentaProducto";
import Burbuja from "../../components/BubbleWhatsApp";
// Image
/* eslint-disable react/prop-types */
import routes from "../../../routes/routes";
import Mercado from "../../../assets/images/PURP_WEB/4.GRANOS/MAP.png";
import Blanco from "../../../assets/images/PURP_WEB/4.GRANOS/CHECK_BLANCO.png";
import contenedor from "../../../assets/images/PURP_WEB/4.GRANOS/CONTENEDOR.png";
import mercadolibreImg from "../../../assets/images/images_purp/mercado_libre.png";
import costalImg from "../../../assets/images/PURP_WEB/4.GRANOS/COSTAL25.png";
import lbsImg from "../../../assets/images/PURP_WEB/4.GRANOS/COSTAL20.png";
import bolsaImg from "../../../assets/images/PURP_WEB/4.GRANOS/BOLSITA.png";

function ServiciosGranos() {
  return (
    <>
      <Card fullWidth>
        <Navbar routes={routes} light /* sticky */ bgColor1="#494949" bgColor2="#000099" />
        <Presentacion />
        <ContenedorBloques bgColor="#dadada" /* "#fffffff" */ ContainerSize={0.5} />
        <Productos />
        <ContenedorBloques bgColor="#dadada" /* "#dadada" */ ContainerSize={0.6} />
        <MercadoNacional titulo="PRESENTE EN MERCADO NACIONAL E INTERNACIONAL" img={Mercado} />
        <Servicios
          img={contenedor}
          title="SERVICIOS"
          color="#5B524D"
          Check={Blanco}
          it1="Conservación, almacenaje y maquila"
          it2="Inteligencia de mercados"
          it3="Logística - contratamos fletes con destino a toda la República"
        />
        <VentaProducto
          title="¡ADQUIERE NUESTROS PRODUCTOS!"
          logo={mercadolibreImg}
          sub="Frijol Peruano"
          img1={costalImg}
          d1="Marca PURP 25 Kg."
          img2={bolsaImg}
          d2="Marca PURP 1 Kg."
          img3={lbsImg}
          d3="Marca PURP 20 Lbs."
          btn="COMPRAR"
        />
        <Burbuja
          sub="Cuenta de empresa"
          text1="Hola 👋"
          text2="Como te puedo ayudar?"
          phMensaje="Escribe un mensaje"
          btn="Enviar"
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
