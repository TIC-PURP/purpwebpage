import TextSection from "components/TextSection";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Configuración de tema con estilos de tipografía personalizados
const theme = createTheme({
  typography: {
    h1: {
      fontSize: "1.3rem",
      "@media (min-width:600px)": { fontSize: "1.5rem" },
      fontWeight: "bold",
    },
    h2: {
      fontSize: "0.8rem",
      "@media (min-width:600px)": { fontSize: "1rem" },
      fontWeight: "bold",
    },
    h6: {
      fontSize: "0.8rem",
      "@media (min-width:600px)": { fontSize: "1rem" },
      color: "#FFFFFF",
      textAlign: "center",
    },
  },
});

export default {
  // Definición de menús y enlaces
  menus: [
    {
      name: "Oficina Central",
      items: [
        {
          name: "Carretera Internacional México 15, #2856",
          href: "https://www.google.com/maps/place/PURP+S.A.+de+C.V./@25.588135,-108.489088,18z/data=!4m6!3m5!1s0x86bbbf76629b8c35:0xfe405476914b9bef!8m2!3d25.5881352!4d-108.4890879!16s%2Fg%2F1tflmwfr?hl=es-419",
        },
        {
          name: "Guasave, Sinaloa. México. C.P. 81136",
          href: "https://www.google.com/maps/place/PURP+S.A.+de+C.V./@25.588135,-108.489088,18z/data=!4m6!3m5!1s0x86bbbf76629b8c35:0xfe405476914b9bef!8m2!3d25.5881352!4d-108.4890879!16s%2Fg%2F1tflmwfr?hl=es-419",
        },
      ],
    },
    {
      name: "Bodega Los Pinitos",
      items: [
        {
          name: "Carretera a Estación Naranjo km. 6",
          href: "https://www.google.com/maps/place/PURP,+Planta+Pinitos/@25.671096,-108.514665,16z/data=!4m6!3m5!1s0x86bbc151d966a615:0xb5203d8611192482!8m2!3d25.6710959!4d-108.5146649!16s%2Fg%2F11hbpxqb7g?hl=es-419",
        },
        {
          name: "Los Pinitos, Guasave, Sinaloa. México.",
          href: "https://www.google.com/maps/place/PURP,+Planta+Pinitos/@25.671096,-108.514665,16z/data=!4m6!3m5!1s0x86bbc151d966a615:0xb5203d8611192482!8m2!3d25.6710959!4d-108.5146649!16s%2Fg%2F11hbpxqb7g?hl=es-419",
        },
      ],
    },
    {
      name: "Bodega El Burrión",
      items: [
        {
          name: "Carretera a La Brecha km. 0.1",
          href: "https://www.google.com/maps/place/PURP,+Planta+Burri%C3%B3n/@25.524732,-108.381277,14z/data=!4m6!3m5!1s0x86bb95d319c9abab:0x7e8c4766a0cfacfe!8m2!3d25.5247322!4d-108.3812775!16s%2Fg%2F11dz211n_w?hl=es-419",
        },
        {
          name: "El Burrión, Guasave, Sinaloa. México.",
          href: "https://www.google.com/maps/place/PURP,+Planta+Burri%C3%B3n/@25.524732,-108.381277,14z/data=!4m6!3m5!1s0x86bb95d319c9abab:0x7e8c4766a0cfacfe!8m2!3d25.5247322!4d-108.3812775!16s%2Fg%2F11dz211n_w?hl=es-419",
        },
      ],
    },
  ],

  // Título del Footer
  Title: (
    <ThemeProvider theme={theme}>
      <TextSection variant="h1" sx={{ color: "white" }} textAlign="center">
        ¡VISÍTANOS!
      </TextSection>
    </ThemeProvider>
  ),

  // Derechos de autor y sección de redes sociales
  copyright: (
    <ThemeProvider theme={theme}>
      <TextSection variant="h2" sx={{ color: "white" }}>
        ¡SÍGUENOS!
      </TextSection>
    </ThemeProvider>
  ),

  // Aviso de privacidad
  Aviso: (
    <>
      <TextSection variant="h6" sx={{ color: "#ffffff" }}>
        PURP® 2025
      </TextSection>
      <TextSection
        component="a"
        href="/AvisoPrivacidad"
        target="_blank"
        rel="noreferrer"
        variant="h6"
        sx={{
          color: "#ffffff",
          "&:hover": {
            cursor: "pointer",
            color: "#FFCC00",
          },
        }}
      >
        Aviso de privacidad
      </TextSection>
    </>
  ),
};
