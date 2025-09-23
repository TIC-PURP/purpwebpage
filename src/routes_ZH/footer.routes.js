import TextSection from "components/TextSection";
// @mui icons
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import Instagram from "@mui/icons-material/Instagram";

const theme = createTheme();

theme.typography.h1 = {
  fontSize: "1.3rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
  },
};

theme.typography.h2 = {
  fontSize: "1rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("xs")]: {
    fontSize: "1rem",
  },
};
theme.typography.h6 = {
  fontSize: "0.8rem",
  "@media (min-width:600px)": {
    fontSize: "1rem",
  },
};

export default {
  image: {
    route: "https://www.facebook.com/PURPGVE?mibextid=ZbWKwL",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/PURPGVE?mibextid=ZbWKwL",
    },
    {
      icon: <Instagram />,
      link: "https://www.instagram.com/purp_oficial/?igshid=MTIyMzRjYmRlZg%3D%3D",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/PURP_GVEOFICIAL",
    },
  ],
  menus: [
    {
      name: "中央辦公室",
      items: [
        {
          name: "Carretera Internacional México 15, #2856",
          href: "https://www.google.com/maps/place/PURP+S.A.+de+C.V./@25.588135,-108.489088,18z/data=!4m6!3m5!1s0x86bbbf76629b8c35:0xfe405476914b9bef!8m2!3d25.5881352!4d-108.4890879!16s%2Fg%2F1tflmwfr?hl=es-419",
        },
        {
          name: "Zona Industrial, Guasave, Sinaloa. México. C.P. 81030",
          href: "https://www.google.com/maps/place/PURP+S.A.+de+C.V./@25.588135,-108.489088,18z/data=!4m6!3m5!1s0x86bbbf76629b8c35:0xfe405476914b9bef!8m2!3d25.5881352!4d-108.4890879!16s%2Fg%2F1tflmwfr?hl=es-419",
        },
      ],
    },
    {
      name: "店铺 Los Pinitos",
      items: [
        {
          name: "Carretera A Estación Naranjo Km. 6",
          href: "https://www.google.com/maps/place/PURP,+Planta+Pinitos/@25.671096,-108.514665,16z/data=!4m6!3m5!1s0x86bbc151d966a615:0xb5203d8611192482!8m2!3d25.6710959!4d-108.5146649!16s%2Fg%2F11hbpxqb7g?hl=es-419",
        },
        {
          name: "Los Pinitos, Guasave, Sinaloa. México.",
          href: "https://www.google.com/maps/place/PURP,+Planta+Pinitos/@25.671096,-108.514665,16z/data=!4m6!3m5!1s0x86bbc151d966a615:0xb5203d8611192482!8m2!3d25.6710959!4d-108.5146649!16s%2Fg%2F11hbpxqb7g?hl=es-419",
        },
      ],
    },
    {
      name: "店铺 El burrion",
      items: [
        {
          name: "Carretera A La Brecha Km. 0.1",
          href: "https://www.google.com/maps/place/PURP,+Planta+Burri%C3%B3n/@25.524732,-108.381277,14z/data=!4m6!3m5!1s0x86bb95d319c9abab:0x7e8c4766a0cfacfe!8m2!3d25.5247322!4d-108.3812775!16s%2Fg%2F11dz211n_w?hl=es-419",
        },
        {
          name: "El Burrión, Guasave, Sinaloa. México.",
          href: "https://www.google.com/maps/place/PURP,+Planta+Burri%C3%B3n/@25.524732,-108.381277,14z/data=!4m6!3m5!1s0x86bb95d319c9abab:0x7e8c4766a0cfacfe!8m2!3d25.5247322!4d-108.3812775!16s%2Fg%2F11dz211n_w?hl=es-419",
        },
      ],
    },
  ],
  Title: (
    <ThemeProvider theme={theme}>
      <TextSection variant="h1" sx={{ color: "white" }} textAlign="center">
        訪客！
      </TextSection>
    </ThemeProvider>
  ),
  copyright: (
    <ThemeProvider theme={theme}>
      <TextSection variant="h2" sx={{ color: "white" }} fontWeight="bold">
        跟著我們！
      </TextSection>
    </ThemeProvider>
  ),
  Aviso: (
    <>
      <TextSection sx={{ color: "#ffffff" }} variant="h6" textAlign="center">
        PURP® 2025
      </TextSection>
      <TextSection
        key="/AvisoPrivacidad_zh"
        underline="hover"
        component="a"
        href="/AvisoPrivacidad_zh"
        target="_blank"
        rel="noreferrer"
        variant="h6"
        textAlign="center"
        sx={{
          color: "#ffffff",
          "&:hover": {
            cursor: "pointer",
            color: "#FFCC00",
          },
        }}
      >
        隱私權聲明
      </TextSection>
    </>
  ),
};
