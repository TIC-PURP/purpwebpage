import LanguageIcon from "@mui/icons-material/Language";

// eslint-disable-next-line import/no-cycle
import Nosotros from "pages/Secction/Nosotros";
// eslint-disable-next-line import/no-cycle
import Financiera from "pages/Secction/Financiera";
// eslint-disable-next-line import/no-cycle
import Informativa from "pages/Secction/Informativa";
// eslint-disable-next-line import/no-cycle
import Servicios from "pages/Secction/Granos";
// eslint-disable-next-line import/no-cycle
import Agronegocios from "pages/Secction/Agronegocios";

// eslint-disable-next-line import/no-cycle
import English from "../pages_EN/Home_EN";

// eslint-disable-next-line import/no-cycle
import Chino from "../pages_ZH/Principal_ZH";

// eslint-disable-next-line import/no-cycle
import Services from "../pages_EN/Secction_EN/Grain_EN";
// eslint-disable-next-line import/no-cycle
import Agricultural from "../pages_EN/Secction_EN/Agribusiness_EN";
// eslint-disable-next-line import/no-cycle
import AboutUs from "../pages_EN/Secction_EN/We_EN";
// eslint-disable-next-line import/no-cycle
import NoticeofPrivacy from "../pages_EN/components_EN/NoticeofPrivacy";
// eslint-disable-next-line import/no-cycle
import Pna from "../pages/Secction/PNA";
// eslint-disable-next-line import/no-cycle
import Aviso from "../pages/components/AvisodePrivacidad";
// eslint-disable-next-line import/no-cycle
import Avisozh from "../pages_ZH/components_ZH/AvisodePrivacidad";
// eslint-disable-next-line import/no-cycle
import Financial from "../pages_EN/Secction_EN/Financial_EN";

// eslint-disable-next-line import/no-cycle
import ServiciosZH from "../pages_ZH/Secction_ZH/Granos";
// eslint-disable-next-line import/no-cycle
import InsumosZH from "../pages_ZH/Secction_ZH/Agronegocios";
// eslint-disable-next-line import/no-cycle
import NosotrosZH from "../pages_ZH/Secction_ZH/Nosotros";
// eslint-disable-next-line import/no-cycle
import FincieraZH from "../pages_ZH/Secction_ZH/Financiera";

const routes = [
  {
    name: "INICIO  |",
    route: "/principal",
  },
  {
    name: "NOSOTROS  |",
    route: "/pages/Nosotros",
    component: <Nosotros />,
  },
  {
    name: "GRANOS  |",
    route: "/pages/Servicios_y_granos",
    component: <Servicios />,
  },
  {
    name: "INSUMOS  |",
    route: "/pages/Insumos_agricolas",
    component: <Agronegocios />,
  },
  {
    name: "FINANCIERA  |",
    route: "/pages/Financiera_purp",
    component: <Financiera />,
  },
  {
    name: "INFORMATIVA  |",
    route: "/pages/Informativa",
    component: <Informativa />,
  },
  {
    name: "PNA",
    route: "/PNA",
    component: <Pna />,
    notVisible: true,
  },
  {
    name: "AVISO",
    route: "/AvisoPrivacidad",
    component: <Aviso />,
    notVisible: true,
  },
  {
    name: "NoticeofPrivacy",
    route: "/NoticeofPrivacy",
    component: <NoticeofPrivacy />,
    notVisible: true,
  },
  {
    name: "AVISO ZH",
    route: "/AvisoPrivacidad_zh",
    component: <Avisozh />,
    notVisible: true,
  },
  // ENGLISH
  {
    name: "ABOUT US",
    route: "/pages/about_us",
    component: <AboutUs />,
    notVisible: true,
  },
  {
    name: "SERVICES",
    route: "/pages/service_graians",
    component: <Services />,
    notVisible: true,
  },
  {
    name: "AGRICULTURAL SUPPLIES",
    route: "/pages/agriculture_supplies",
    component: <Agricultural />,
    notVisible: true,
  },
  {
    name: "PURP FINANCIAL",
    route: "/pages/purp_financial",
    component: <Financial />,
    notVisible: true,
  },
  {
    icon: <LanguageIcon />,
    collapse: [
      {
        name: "ENGLISH",
        route: "/HOME",
        component: <English />,
      },
      {
        name: "中国人",
        route: "/page/inicioZH",
        component: <Chino />,
      },
    ],
  },
  // CHINO
  {
    name: "我们", // NOSOTROS
    route: "/page/nostrosZH",
    component: <NosotrosZH />,
    notVisible: true,
  },
  {
    name: "服务", // SERVICIOS
    route: "/page/serviciosZH",
    component: <ServiciosZH />,
    notVisible: true,
  },
  {
    name: "农业用品S", // INSUMOS AGRICOLAS
    route: "/page/insumosZH",
    component: <InsumosZH />,
    notVisible: true,
  },
  {
    name: "金融", // FINCIERA
    route: "/page/financieraZH",
    component: <FincieraZH />,
    notVisible: true,
  },
];

export default routes;
