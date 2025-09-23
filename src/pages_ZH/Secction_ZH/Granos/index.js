import Contenedor from "components/Contenedor";
import { Card } from "@mui/material";
import ContenedorBloques from "pages/components/ContendorBloques";
import Footer from "components/Footer";
import footerRoutes from "../../../routes_ZH/footer.routes";
import Navbar from "../../../components/Navbar";
import Presentacion from "./Secciones/Presentacion";
import MercadoNacional from "../../../pages/Secction/Granos/Secciones/MercadoNacional";
import Mercado from "../../../assets/images/PURP_WEB/4.GRANOS/ZH/MercadoNacional_ZH.jpg";
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
import routes from "../../../routes_ZH/routes";

function ServiciosGranos() {
  return (
    <>
      <Card fullWidth>
        <Navbar routes={routes} light sticky bgColor1="#494949" bgColor2="#000099" />
        <Presentacion />
        <ContenedorBloques bgColor="#dadada" /* "#fffffff" */ ContainerSize={0.5} />
        <Productos />
        <ContenedorBloques bgColor="#dadada" /* "#dadada" */ ContainerSize={0.6} />
        <MercadoNacional titulo="活躍於國內和國際市場" img={Mercado} />
        <Servicios
          img={contenedor}
          title="服務"
          color="#5B524D"
          Check={Blanco}
          it1="保存、儲存和組裝"
          it2="市場情報"
          it3="物流 - 我們租賃貨運到整個共和國"
        />
        <VentaProducto
          title="獲取我們的產品！"
          logo={mercadolibreImg}
          sub="秘魯豆"
          img1={costalImg}
          d1="PURP 品牌 25 公斤。"
          img2={bolsaImg}
          d2="PURP品牌1公斤。"
          img3={lbsImg}
          d3="PURP 品牌 20 磅"
          btn="BUY"
        />
        <Burbuja
          sub="公司账户"
          text1="你好 👋"
          text2="我怎么帮你？"
          phMensaje="写一个信息"
          btn="发送"
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
