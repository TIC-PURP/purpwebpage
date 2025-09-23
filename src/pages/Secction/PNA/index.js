import { Container, Grid, Typography, Box } from "@mui/material";
import ContenedorBloques from "pages/components/ContendorBloques";
import Contenedor from "../../../components/Contenedor";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import footerRoutes from "../../../routes/footer.routes";
// eslint-disable-next-line import/no-cycle
import routes from "../../../routes/routes";

// Imagenes
import fondoAzul from "../../../assets/images/PURP_WEB/6.PNA/11.png";
import logoPremio from "../../../assets/images/PURP_WEB/6.PNA/3.png";
import campo from "../../../assets/images/PURP_WEB/6.PNA/4.png";
import trofeo from "../../../assets/images/PURP_WEB/6.PNA/6.png";
import sloganPurp from "../../../assets/images/PURP_WEB/6.PNA/5.png";
import premiacionFoto from "../../../assets/images/PURP_WEB/6.PNA/7.png";
import equipoFoto from "../../../assets/images/PURP_WEB/6.PNA/9.png";
import PURP_PNA from "../../../assets/videos/pna/PURP_PNA.mp4";

function PNA() {
  return (
    <Contenedor>
      <Navbar routes={routes} light sticky bgColor1="#494949" bgColor2="#000099" />
      <Contenedor
        sx={{
          backgroundImage: `url(${fondoAzul})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          py: { xs: 10, md: 10 },
        }}
      >
        <Container>
          <Grid
            container
            spacing={{ xs: 4, md: 18 }}
            alignItems="center"
            justifyContent="center"
            direction={{ xs: "column", md: "row" }}
            textAlign={{ xs: "center", md: "left" }}
          >
            <Grid item xs={12} md={5}>
              <Contenedor
                borderRadius="md"
                coloredShadow="black"
                component="img"
                src={campo}
                sx={{
                  width: "100%",
                  maxWidth: { xs: 260, sm: 320, md: 450, lg: "100%" },
                  mx: { xs: "auto", md: "0" },
                  mb: { xs: 2, md: 0 },
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Contenedor
                component="img"
                src={logoPremio}
                sx={{
                  width: "100%",
                  maxWidth: { xs: 320, sm: 480, md: "100%" },
                  mx: { xs: "auto", md: "0" },
                  mb: 2,
                }}
              />
              <Typography
                variant="body1"
                sx={{
                  color: "#ffffff",
                  fontSize: {
                    xs: "0.9rem",
                    sm: "1rem",
                    md: "1.1rem",
                  },
                  lineHeight: 1.7,
                }}
                textAlign="justify"
              >
                El <strong>Premio Nacional Agroalimentario</strong> es el máximo reconocimiento que
                se otorga en México a las empresas y organizaciones que destacan por su excelencia
                en el sector agroalimentario. Es emitido por el{" "}
                <strong>Consejo Nacional Agropecuario (CNA)</strong> y busca fomentar la mejora
                continua, la innovación y la competitividad en la industria.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Contenedor>
      <ContenedorBloques bgColor="#FFCC00" ContainerSize={0.5} />
      {/* Sección 2 */}
      <Contenedor
        sx={{
          backgroundImage: `url(${fondoAzul})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          mt: 0,
          py: { xs: 6, md: 10 },
        }}
      >
        <Container>
          <Grid
            container
            spacing={2}
            alignItems="flex-start"
            justifyContent="center"
            direction={{ xs: "column", md: "row" }}
            textAlign={{ xs: "center", md: "left" }}
          >
            <Grid item xs={12} md={5}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems={{ xs: "center", md: "flex-start" }}
              >
                <Box
                  component="img"
                  src={sloganPurp}
                  sx={{ width: "100%", maxWidth: { xs: 180, sm: 220, md: 380 }, mb: 2 }}
                />
                <Box component="img" src={trofeo} sx={{ width: "100%", maxWidth: 1000, mb: 2 }} />
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <Contenedor
                borderRadius="lg"
                coloredShadow="black"
                component="img"
                src={premiacionFoto}
                sx={{ width: "100%", maxWidth: 800, mx: "auto", mb: 2 }}
              />
              <Typography
                variant="body1"
                sx={{
                  color: "#ffffff",
                  fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                  lineHeight: 1.7,
                }}
                textAlign="justify"
              >
                El 17 de febrero de 2025, se llevó a cabo la ceremonia de premiación en Ciudad de
                México, donde PURP fue galardonado con el{" "}
                <strong>PREMIO NACIONAL AGROALIMENTARIO 2024</strong>. En el evento estuvieron
                presentes personalidades distinguidas del sector agroalimentario, lo que reafirmó la
                importancia del premio.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Contenedor>
      <ContenedorBloques bgColor="#FFCC00" ContainerSize={0.5} />
      {/* Sección 3 */}
      <Contenedor
        sx={{
          backgroundImage: `url(${fondoAzul})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          py: { xs: 6, md: 10 },
        }}
      >
        <Container>
          <Grid
            container
            spacing={4}
            alignItems="center"
            justifyContent="center"
            direction={{ xs: "column", md: "row" }}
          >
            {/* Imagen equipo con degradado y slogan */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  maxWidth: 600,
                  mx: "auto",
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                {/* Imagen base */}
                <Box
                  component="img"
                  src={equipoFoto}
                  alt="Equipo PURP"
                  sx={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
                {/* Degradado overlay inferior */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    height: "20%",
                    background: "linear-gradient(to top, #000066, transparent)",
                  }}
                />
              </Box>

              {/* Slogan */}
              <Box
                component="img"
                src={sloganPurp}
                alt="Slogan PURP"
                sx={{
                  width: { xs: 200, sm: 300, md: 400 },
                  mt: 4,
                  mx: "auto",
                  display: "block",
                }}
              />
            </Grid>

            {/* Logo y texto */}
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={logoPremio}
                alt="Logo Premio"
                sx={{
                  width: "100%",
                  maxWidth: { xs: 300, sm: 350, md: 450 },
                  mb: 2,
                  mx: { xs: "auto", md: "0" },
                  display: "block",
                }}
              />

              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems={{ xs: "center", md: "flex-start" }}
                textAlign={{ xs: "center", md: "left" }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "0.95rem", sm: "1.1rem", md: "1.2rem" },
                    lineHeight: 1.7,
                    maxWidth: 600,
                    color: "#ffffff",
                    px: { xs: 1, sm: 0 },
                  }}
                  textAlign="justify"
                >
                  PURP se consolidó como una empresa líder en el sector agroindustrial, demostrando
                  su compromiso con la excelencia y la mejora continua. Con el Premio Nacional
                  Agroalimentario, PURP refuerza su prestigio y sigue avanzando con el propósito de
                  conectar con la tierra y alimentar al mundo, creando valor y confianza.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Contenedor>
      <Contenedor
        sx={{
          backgroundColor: "#000", // fondo oscuro para resaltar el video
          py: { xs: 6, md: 10 },
          px: { xs: 2, md: 6 },
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h4"
            sx={{
              color: "#fff",
              fontWeight: "bold",
              mb: 3,
              fontSize: { xs: "1.5rem", sm: "2rem" },
            }}
          >
            PURP - GANADOR DEL PREMIO NACIONAL AGROALIMENTARIO 2024
          </Typography>

          <Box
            sx={{
              position: "relative",
              paddingTop: "56.25%", // 16:9 aspect ratio
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: 3,
            }}
          >
            <Box
              component="iframe"
              src={PURP_PNA}
              title="Video institucional PURP"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: 0,
              }}
            />
          </Box>
        </Container>
      </Contenedor>
      <ContenedorBloques bgColor="#FFCC00" ContainerSize={0.5} />
      <Contenedor pt={6} px={1} mt={6}>
        <Footer content={footerRoutes} ColorFondo="#494949" />
      </Contenedor>
      <ContenedorBloques bgColor="#FFCC00" ContainerSize={0.5} />
    </Contenedor>
  );
}

export default PNA;
