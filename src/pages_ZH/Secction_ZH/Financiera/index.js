import React from "react";
import { Card } from "@mui/material";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Contenedor from "components/Contenedor";
import Navbar from "../../../components/Navbar";
import ContenedorBloques from "../../../pages/components/ContendorBloques";
import IconText from "../../../pages/components/IconText";
import TextSection from "../../../components/TextSection";
import footerRoutes from "../../../routes_ZH/footer.routes";
import Footer from "../../../components/Footer";
import Presentacion from "./Secciones/Presentacion";
import Creditos from "./Secciones/Creditos";
import Burbuja from "../../../pages/components/BubbleWhatsApp";
import Check from "../../../assets/images/PURP_WEB/2.NOSOTROS/CHECK_CAFE.png";
import Contacto from "../../../pages/Secction/Financiera/Secciones/Contacto";
// eslint-disable-next-line import/no-cycle
import routes from "../../../routes_ZH/routes";

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
            我們提供信貸來促進農業活動。設備、備件和商業信用。
            <br />
            我們在您修練的各個階段為您提供支援！
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
              Texto="及時且可取得的學分"
              mt={-0.2}
            />
          </Grid>
          <Grid item xs={4} sm={4} md={3} lg={3.1} mt={2}>
            <IconText
              color="#5B524D"
              imagen={Check}
              variante="button"
              maxWidth="1rem"
              Texto="市面上最優惠的價格"
              mt={-0.2}
            />
          </Grid>
          <Grid item xs={5} sm={5} md={3} lg={2.8} mt={2}>
            <IconText
              color="#5B524D"
              imagen={Check}
              variante="button"
              maxWidth="1rem"
              Texto="程式簡單快捷"
              mt={-0.2}
            />
          </Grid>
          <Grid item xs={4} sm={4} md={2} lg={2} mt={2}>
            <IconText
              color="#5B524D"
              imagen={Check}
              variante="button"
              maxWidth="1rem"
              Texto="合格的技術諮詢"
              mt={-0.2}
            />
          </Grid>
        </ThemeProvider>
      </Grid>
    </Contenedor>
    <Creditos />
    <Contacto
      titulo="聯絡我們"
      nombre="姓名"
      telefono="电话"
      creditos="学分类型"
      ubicacion="地点"
      enviar="发送"
      phNombre="全名"
      phTelefono="你的号码是多少"
      phUbicacion="你的位置在哪里"
      avio="飛行積分"
      refaccionario="熟食信用"
      comercial="商业信用"
    />
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
);
export default Parafinanciera;
