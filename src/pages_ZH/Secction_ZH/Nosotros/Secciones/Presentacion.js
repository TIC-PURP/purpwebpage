import {
  Container,
  Grid,
  Box,
  Stack,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ImageList,
  ImageListItem,
  Paper,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Contenedor from "components/Contenedor";
import TextSection from "components/TextSection";
import Confianza from "assets/images/PURP_WEB/2.NOSOTROS/CHECK_CAFE.png";
import cer1 from "assets/images/PURP_WEB/2.NOSOTROS/4.png";
import Non from "assets/images/PURP_WEB/2.NOSOTROS/2.png";
import esr from "assets/images/PURP_WEB/2.NOSOTROS/3.png";
import KOSHER from "assets/images/PURP_WEB/2.NOSOTROS/5.png";
import IMSS_CAT from "assets/images/PURP_WEB/2.NOSOTROS/6.png";
import PNA from "assets/images/PURP_WEB/2.NOSOTROS/8.png";
import IMSS_ELSSA from "assets/images/PURP_WEB/2.NOSOTROS/7.png";
import PRIMERO from "assets/images/PURP_WEB/2.NOSOTROS/PRIMEROLONUESTRO.png";
import PropTypes from "prop-types";

const theme = createTheme({
  typography: {
    h5: {
      fontSize: "clamp(1.25rem, 1.1vw + 1rem, 1.5rem)",
      fontWeight: 700,
      color: "#5B524D",
      letterSpacing: 0.2,
    },
    body1: {
      fontSize: "clamp(0.98rem, 0.35vw + 0.9rem, 1.05rem)",
      lineHeight: 1.8,
      color: "#5B524D",
    },
  },
  components: {
    MuiDivider: { styleOverrides: { root: { borderColor: "rgba(0,0,0,0.06)" } } },
  },
});

const valores = ["相信", "創新", "熱情", "積極主動", "責任"];

const certs = [
  { src: cer1, alt: "FDA U.S. Food & Drug" },
  { src: esr, alt: "Empresa Socialmente Responsable" },
  { src: Non, alt: "Certified Non-GMO" },
  { src: KOSHER, alt: "Certificación Kosher" },
  { src: IMSS_CAT, alt: "IMSS Cero Accidentes de Trabajo" },
  { src: IMSS_ELSSA, alt: "IMSS ELSSA" },
  { src: PNA, alt: "Premio Nacional Agroalimentario" },
  { src: PRIMERO, alt: "Primero lo Nuestro" },
];

/** Título con barra de acento */
function Heading({ children, id }) {
  return (
    <Box id={id} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Box sx={{ width: 6, height: 22, bgcolor: "#5B524D", borderRadius: 2 }} />
      <TextSection variant="h5" component="h3">
        {children}
      </TextSection>
    </Box>
  );
}
Heading.propTypes = { children: PropTypes.node.isRequired, id: PropTypes.string };
Heading.defaultProps = { id: undefined };

function Presentacion() {
  return (
    <ThemeProvider theme={theme}>
      <Contenedor mt={{ xs: 10, lg: 16 }} mb={0}>
        <Box
          component="section"
          sx={{ bgcolor: "rgba(91,82,77,0.03)", borderRadius: 3, p: { xs: 3, sm: 4, md: 6 } }}
        >
          <Container maxWidth="lg">
            {/* FILA 1: Texto (izq) + Valores en tarjetón (der) */}
            <Grid container spacing={{ xs: 4, md: 6 }} alignItems="flex-start">
              {/* Izquierda: Misión / Visión / Propósito */}
              <Grid item xs={12} md={7}>
                <Stack spacing={3}>
                  <Heading id="mision">使命</Heading>
                  <TextSection variant="body1">
                    提供農業解決方案和投入品、市場糧食和優質服務；產生信任。
                  </TextSection>

                  <Heading id="vision">想像</Heading>
                  <TextSection variant="body1">
                    成為一家擁有多元化業務、實力雄厚、有償付能力的世界級企業，使我們能夠鞏固自己作為專業精神和認證質量的標桿，為該地區的經濟發展做出貢獻。
                  </TextSection>

                  <Heading id="proposito">目的</Heading>
                  <TextSection variant="body1">與土地相連，養活世界，創造價值和信任。</TextSection>
                </Stack>
              </Grid>

              {/* Derecha: Valores dentro de un Paper para jerarquía visual */}
              <Grid item xs={12} md={5}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    border: "1px solid rgba(0,0,0,0.06)",
                    bgcolor: "#fff",
                  }}
                >
                  <Stack spacing={2}>
                    <Heading>價值觀</Heading>
                    <List
                      dense
                      aria-label="Lista de valores"
                      sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                        columnGap: 2,
                        rowGap: 1,
                        p: 0,
                      }}
                    >
                      {valores.map((valor) => (
                        <ListItem key={valor} sx={{ p: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 28 }}>
                            <Box
                              component="img"
                              src={Confianza}
                              alt=""
                              width={22}
                              height={22}
                              loading="lazy"
                            />
                          </ListItemIcon>
                          <ListItemText
                            primaryTypographyProps={{ color: "text.primary" }}
                            primary={valor}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Stack>
                </Paper>
              </Grid>
            </Grid>

            {/* Separador */}
            <Box my={{ xs: 4, md: 6 }}>
              <Divider />
            </Box>

            {/* FILA 2: Certificaciones a todo el ancho, visual más equilibrado */}
            <Grid container>
              <Grid item xs={12}>
                <Stack spacing={2}>
                  <Heading>認證證書</Heading>

                  <ImageList
                    cols={4}
                    gap={18}
                    sx={{
                      m: 0,
                      // responsive columnas
                      gridTemplateColumns: {
                        xs: "repeat(2, 1fr) !important",
                        sm: "repeat(3, 1fr) !important",
                        md: "repeat(4, 1fr) !important",
                      },
                      "& img": {
                        width: "100%",
                        height: "auto",
                        filter: "grayscale(10%)",
                        opacity: 0.85,
                        transition: "opacity .2s ease, filter .2s ease, transform .2s ease",
                      },
                      "& img:hover": {
                        filter: "grayscale(0%)",
                        opacity: 1,
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    {certs.map((c) => (
                      <ImageListItem key={c.alt}>
                        <Box
                          component="img"
                          src={c.src}
                          alt={c.alt}
                          loading="lazy"
                          width={220}
                          height={110}
                        />
                      </ImageListItem>
                    ))}
                  </ImageList>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Contenedor>
    </ThemeProvider>
  );
}

export default Presentacion;
