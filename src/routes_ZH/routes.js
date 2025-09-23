import LanguageIcon from "@mui/icons-material/Language";

// eslint-disable-next-line import/no-cycle
import Español from "../pages/Principal";

// eslint-disable-next-line import/no-cycle
import Ingles from "../pages_EN/Home_EN";

const ruta = [
  {
    name: "首页  |",
    route: "/page/inicioZH", // INICIO
  },
  {
    name: "我们  |", // NOSOTROS
    route: "/page/nostrosZH",
  },
  {
    name: "服务  |", // SERVICIOS
    route: "/page/serviciosZH",
  },
  {
    name: "农业用品  |", // INSUMOS AGRICOLAS
    route: "/page/insumosZH",
  },
  {
    name: "金融  |-", // FINCIERA
    route: "/page/financieraZH",
  },
  {
    icon: <LanguageIcon />,
    collapse: [
      {
        name: "ESPAÑOL", // ESPAÑOL
        route: "/inicio",
        component: <Español />,
      },
      {
        name: "ENGLISH ", // INGLES
        route: "/HOME ",
        component: <Ingles />,
      },
    ],
  },
];

export default ruta;
