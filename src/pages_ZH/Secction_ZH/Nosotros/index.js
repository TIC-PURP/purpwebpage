import { Card } from "@mui/material";
import Contenedor from "components/Contenedor";
import ContenedorBloques from "pages/components/ContendorBloques";
import SeccionIconInfo from "components/Seccion/SeccionIconInfo";
// eslint-disable-next-line import/no-cycle
import routes from "../../../routes_ZH/routes";
import Presentacion from "./Secciones/Presentacion";
import footerRoutes from "../../../routes_ZH/footer.routes";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import Burbuja from "../../../pages/components/BubbleWhatsApp";
import Instalaciones from "./Secciones/Instalaciones";
import Paneles from "../../../assets/images/PURP_WEB/2.NOSOTROS/PANELES.jpg";
import Blanco from "../../../assets/images/PURP_WEB/4.GRANOS/CHECK_BLANCO.png";

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
            title="太阳能电池板的使用"
            Check={Blanco}
            it1="1.	Bodega Los Pinitos 酒莊採用太陽能技術，透過光伏和太陽能熱能設備產生電力。"
            it2="2.	更乾淨、更安全的能源替代品，不會加劇全球暖化。"
            color="#5B524D"
          />
          <ContenedorBloques bgColor="#dadada" ContainerSize={0.4} />
        </Contenedor>
        <Instalaciones />
        <Burbuja
          sub="公司账户"
          text1="你好 👋"
          text2="我怎么帮你？"
          phMensaje="写一个信息"
          btn="发送"
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
