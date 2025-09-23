import React from "react";
import { Card } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import Contenedor from "components/Contenedor";
import footerRoutes from "../../../routes/footer.routes";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import ContenedorBloques from "../../components/ContendorBloques";
import Burbuja from "../../components/BubbleWhatsApp";
import routes from "../../../routes/routes";
import Windy from "./Windy";
import CONAGUA from "./CONAGUA";

const theme = createTheme();

theme.typography.h2 = {
  fontSize: "1.3rem",
  "@media (min-width:600px)": {
    fontSize: "2rem",
  },
};
theme.typography.button = {
  fontSize: "0.7rem",
  "@media (min-width:600px)": {
    fontSize: "1rem",
  },
};

const Informativa = () => (
  <Card bgColor>
    <Navbar routes={routes} light sticky bgColor1="#494949" bgColor2="#000099" />
    <Contenedor bgColor="#dadada" py={{ xs: 0.4, lg: 0.6 }} />
    {/* <ContenedorBloques bgColor="#dadada" ContainerSize={0.5} /> */}
    <Windy />
    <Contenedor mt={10}>
      <CONAGUA />
    </Contenedor>
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
);

export default Informativa;
