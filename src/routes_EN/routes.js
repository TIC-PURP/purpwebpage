import LanguageIcon from "@mui/icons-material/Language";

// eslint-disable-next-line import/no-cycle
import Español from "../pages/Principal";

// eslint-disable-next-line import/no-cycle
import Chino from "../pages_ZH/Principal_ZH";

const ruta = [
  {
    name: "HOME  |",
    route: "/HOME",
  },
  {
    name: "ABOUT US  |",
    route: "/pages/about_us",
  },
  {
    name: "GRAIN  |",
    route: "/pages/service_graians",
  },
  {
    name: "SUPPLIES  |",
    route: "/pages/agriculture_supplies",
  },
  {
    name: "FINANCIAL  |",
    route: "/pages/purp_financial",
  },
  {
    icon: <LanguageIcon />,
    collapse: [
      {
        name: "ESPAÑOL",
        route: "/page/incio",
        component: <Español />,
      },
      {
        name: "中国人",
        route: "/page/inicioZH",
        component: <Chino />,
      },
    ],
  },
];

export default ruta;
