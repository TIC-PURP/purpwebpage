import { Container, Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Contenedor from "components/Contenedor";
import TextSection from "../../../../components/TextSection";
import Modalbutton from "../../../../components/ModalButton/index";
import Icontext from "../../../../pages/components/IconText";
import maiz from "../../../../assets/images/PURP_WEB/4.GRANOS/FONDO_MAIZ.jpg";
import frijol from "../../../../assets/images/PURP_WEB/4.GRANOS/FONDO_FRIJOL.jpg";
import garbanzo from "../../../../assets/images/PURP_WEB/4.GRANOS/FONDO_GARBANZO.jpg";
import sorgo from "../../../../assets/images/PURP_WEB/4.GRANOS/FONDO_SORGO.jpg";
import flecha from "../../../../assets/images/PURP_WEB/4.GRANOS/FLECHA_AMARILLA.png";
import FMaiz from "../../../../assets/images/PURP_WEB/4.GRANOS/ZH/Ficha_maiz_ZH.png";
import FFrijol from "../../../../assets/images/PURP_WEB/4.GRANOS/ZH/Ficha_frijol_ZH.png";
import FGarbanzo from "../../../../assets/images/PURP_WEB/4.GRANOS/ZH/Ficha_garbanzo_ZH.png";
import FSorgo from "../../../../assets/images/PURP_WEB/4.GRANOS/ZH/Ficha_sorgo_ZH.png";

const theme = createTheme();

theme.typography.h5 = {
  fontSize: "0.7rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
  },
};
theme.typography.h6 = {
  fontSize: "0.7rem",
  "@media (min-width:600px)": {
    fontSize: "1rem",
  },
};
theme.typography.h3 = {
  fontSize: "1rem",
  "@media (min-width:600px)": {
    fontSize: "1.8rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.5rem",
  },
};
theme.typography.h2 = {
  fontSize: "0.6rem",
  "@media (min-width:600px)": {
    fontSize: "2rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.9rem",
  },
};
theme.typography.h1 = {
  fontSize: "0.6rem",
  "@media (min-width:600px)": {
    fontSize: "2rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.9rem",
  },
};

function Productos() {
  return (
    <Contenedor bgColor="#dadada">
      <Contenedor
        minHeight="100%"
        width="100%"
        sx={{
          backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.0),
              rgba(gradients.dark.state, 0.0)
            )}, url(${frijol})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          placeItems: "center",
        }}
        id="frijolZH"
      >
        <Container>
          <Grid container direction="row-reverse">
            <Contenedor
              width="45%"
              opacity={0.7}
              sx={() => ({
                backgroundImage: "linear-gradient(to right, #494949, #4B478D)",
              })}
              mt={{ xs: 0, md: 0, lg: 0 }}
            >
              <Grid mx={{ xs: 0.5, sm: 0.5, md: 0.5, lg: 8, xxl: 8 }} mb={{ xs: 6, lg: 3 }}>
                <ThemeProvider theme={theme}>
                  <TextSection
                    variant="h6"
                    fontWeight="regular"
                    textAlign="justify"
                    sx={{ color: "#ffffff" }}
                  >
                    <TextSection variant="h3" textAlign="center" sx={{ color: "#ffffff" }} mt={4}>
                      秘魯豆
                    </TextSection>
                    <TextSection
                      variant="h6"
                      sx={{ color: "#ffffff" }}
                      mt={{ xs: 2, lg: 4 }}
                      mb={{ xs: 1, lg: 1 }}
                    >
                      推介會:
                    </TextSection>
                  </TextSection>
                  <Icontext
                    color="#ffffff"
                    imagen={flecha}
                    maxWidth="1rem"
                    variante="h6"
                    Texto="  25公斤、10公斤。和 1 公斤。"
                    mt={{ xs: -0.5, lg: -0.2 }}
                  />
                  <Icontext
                    color="#ffffff"
                    imagen={flecha}
                    maxWidth="1rem"
                    variante="h6"
                    Texto="20磅和50磅"
                    mt={{ xs: -0.5, lg: -0.2 }}
                  />
                  <TextSection
                    variant="h6"
                    textAlign="row"
                    sx={{ color: "#ffffff" }}
                    mt={{ xs: 1, lg: 2 }}
                    mb={{ xs: 1, lg: 1 }}
                  >
                    出貨方式:
                  </TextSection>
                  <Icontext
                    color="#ffffff"
                    imagen={flecha}
                    maxWidth="1rem"
                    variante="h6"
                    Texto="汽車運輸"
                    mt={{ xs: -0.5, lg: -0.2 }}
                  />
                  <Icontext
                    color="#ffffff"
                    imagen={flecha}
                    maxWidth="1rem"
                    variante="h6"
                    Texto="海路"
                    mt={{ xs: -0.5, lg: -0.2 }}
                  />
                  <TextSection
                    variant="h6"
                    textAlign="row"
                    sx={{ color: "#ffffff" }}
                    mt={{ xs: 1, lg: 2 }}
                    mb={{ xs: 1, lg: 2 }}
                  >
                    我們的客戶是
                  </TextSection>
                  <Icontext
                    color="#ffffff"
                    imagen={flecha}
                    maxWidth="1rem"
                    variante="h6"
                    Texto="工業的"
                    mt={{ xs: -0.5, lg: -0.2 }}
                  />
                  <Icontext
                    color="#ffffff"
                    imagen={flecha}
                    maxWidth="1rem"
                    variante="h6"
                    Texto="商業連鎖店"
                    mt={{ xs: -0.5, lg: -0.2 }}
                  />
                  <Icontext
                    color="#ffffff"
                    imagen={flecha}
                    maxWidth="1rem"
                    variante="h6"
                    Texto=" 國內和國際"
                    mt={{ xs: -0.5, lg: -0.2 }}
                  />
                </ThemeProvider>
              </Grid>
            </Contenedor>
            <Contenedor
              mx={{ xs: -16.5, sm: -17.5, md: -17, lg: -50, xxl: -52 }}
              mt={{ xs: 41, sm: 47, md: 46, lg: 44, xxl: 44 }}
            >
              <Modalbutton
                imagen={FFrijol}
                direccionModal="right"
                descripcionBoton="数据表"
                Size="small"
                ColorButton="warning"
              />
            </Contenedor>
          </Grid>
        </Container>
      </Contenedor>
      <Contenedor bgColor="#fffffff" py={0.5} />
      <Contenedor
        minHeight="100%"
        width="100%"
        sx={{
          backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.0),
              rgba(gradients.dark.state, 0.0)
            )}, url(${maiz})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          placeItems: "center",
        }}
        id="maizZH"
      >
        <Container>
          <Grid container direction="row-reverse">
            <Contenedor
              width="45%"
              opacity={0.7}
              sx={() => ({
                backgroundImage: "linear-gradient(to right, #494949, #4B478D)",
              })}
              mt={{ xs: 0, md: 0, lg: 0 }}
            >
              <Grid mx={{ xs: 0.5, sm: 0.5, md: 0.5, lg: 8, xxl: 8 }} mb={{ xs: 6, lg: 3 }}>
                <ThemeProvider theme={theme}>
                  <TextSection
                    variant="h6"
                    fontWeight="regular"
                    textAlign="justify"
                    sx={{ color: "#ffffff" }}
                  >
                    <TextSection variant="h3" textAlign="center" sx={{ color: "#ffffff" }} mt={4}>
                      錫那羅亞白玉米
                    </TextSection>
                    <TextSection
                      variant="h6"
                      sx={{ color: "#ffffff" }}
                      mt={{ xs: 2, lg: 4 }}
                      mb={{ xs: 1, lg: 1 }}
                    >
                      推介會:
                    </TextSection>
                  </TextSection>
                  <Icontext
                    color="#ffffff"
                    imagen={flecha}
                    maxWidth="1rem"
                    variante="h6"
                    Texto="篩選並以 50 公斤裝袋。"
                    mt={{ xs: -0.5, lg: -0.2 }}
                  />
                  <Icontext
                    color="#ffffff"
                    imagen={flecha}
                    maxWidth="1rem"
                    variante="h6"
                    Texto="大部分"
                    mt={{ xs: -0.5, lg: -0.2 }}
                  />
                  <TextSection
                    variant="h6"
                    textAlign="row"
                    sx={{ color: "#ffffff" }}
                    mt={{ xs: 1, lg: 2 }}
                    mb={{ xs: 1, lg: 1 }}
                  >
                    出貨方式
                  </TextSection>
                  <Icontext
                    color="#ffffff"
                    imagen={flecha}
                    maxWidth="1rem"
                    variante="h6"
                    Texto="汽車運輸"
                    mt={{ xs: -0.5, lg: -0.2 }}
                  />
                  <Icontext
                    color="#ffffff"
                    imagen={flecha}
                    maxWidth="1rem"
                    variante="h6"
                    Texto="鐵路"
                    mt={{ xs: -0.5, lg: -0.2 }}
                  />
                  <Icontext
                    color="#ffffff"
                    imagen={flecha}
                    maxWidth="1rem"
                    variante="h6"
                    Texto="海路"
                    mt={{ xs: -0.5, lg: -0.2 }}
                  />
                  <TextSection
                    variant="h6"
                    textAlign="row"
                    sx={{ color: "#ffffff" }}
                    mt={{ xs: 1, lg: 2 }}
                    mb={{ xs: 1, lg: 2 }}
                  >
                    我們的客戶是：
                  </TextSection>
                  <Icontext
                    color="#ffffff"
                    imagen={flecha}
                    maxWidth="1rem"
                    variante="h6"
                    Texto="玉米和玉米餅連鎖店"
                    mt={{ xs: -0.5, lg: -0.2 }}
                  />
                  <Icontext
                    color="#ffffff"
                    imagen={flecha}
                    maxWidth="1rem"
                    variante="h6"
                    Texto="工業的"
                    mt={{ xs: -0.5, lg: -0.2 }}
                  />
                  <Icontext
                    color="#ffffff"
                    imagen={flecha}
                    maxWidth="1rem"
                    variante="h6"
                    Texto="商業連鎖店"
                    mt={{ xs: -0.5, lg: -0.2 }}
                  />
                  <Icontext
                    color="#ffffff"
                    imagen={flecha}
                    maxWidth="1rem"
                    variante="h6"
                    Texto="政府"
                    mt={{ xs: -0.5, lg: -0.2 }}
                  />
                </ThemeProvider>
              </Grid>
            </Contenedor>
            <Contenedor
              mx={{ xs: -16, sm: -17.5, md: -17, lg: -50, xxl: -52 }}
              mt={{ xs: 49, sm: 59, md: 52, lg: 50, xxl: 50 }}
            >
              <Modalbutton
                direccionModal="right"
                imagen={FMaiz}
                descripcionBoton="数据表"
                Size="small"
                ColorButton="warning"
              />
            </Contenedor>
          </Grid>
        </Container>
      </Contenedor>
      <Contenedor bgColor="#fffffff" py={0.5} />
      <Contenedor
        minHeight="100%"
        width="100%"
        sx={{
          backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.0),
              rgba(gradients.dark.state, 0.0)
            )}, url(${garbanzo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          placeItems: "center",
        }}
        id="garbanzoZH"
      >
        <Container>
          <Grid container direction="row-reverse">
            <Contenedor
              width="45%"
              opacity={0.7}
              sx={() => ({
                backgroundImage: "linear-gradient(to right, #494949, #4B478D)",
              })}
              mt={{ xs: 0, md: 0, lg: 0 }}
            >
              <Grid mx={{ xs: 0.5, sm: 0.5, md: 0.5, lg: 8, xxl: 8 }} mb={{ xs: 7, lg: 3 }}>
                <ThemeProvider theme={theme}>
                  <TextSection
                    variant="h6"
                    fontWeight="regular"
                    textAlign="justify"
                    sx={{ color: "#ffffff" }}
                  >
                    <TextSection variant="h3" textAlign="center" sx={{ color: "#ffffff" }} mt={4}>
                      錫那羅亞白鷹嘴豆
                    </TextSection>
                    <TextSection
                      variant="h6"
                      sx={{ color: "#ffffff" }}
                      mt={{ xs: 2, lg: 4 }}
                      mb={{ xs: 1, lg: 1 }}
                    >
                      出貨方式：
                    </TextSection>
                  </TextSection>
                  <Icontext
                    color="#ffffff"
                    imagen={flecha}
                    maxWidth="1rem"
                    variante="h6"
                    Texto="25公斤和1公斤。"
                    mt={{ xs: -0.5, lg: -0.2 }}
                  />
                  <TextSection
                    variant="h6"
                    textAlign="row"
                    sx={{ color: "#ffffff" }}
                    mt={{ xs: 1, lg: 2 }}
                    mb={{ xs: 1, lg: 2 }}
                  >
                    出貨方式：
                  </TextSection>
                  <Icontext
                    color="#ffffff"
                    imagen={flecha}
                    maxWidth="1rem"
                    variante="h6"
                    Texto="汽車運輸"
                    mt={{ xs: -0.5, lg: -0.2 }}
                  />
                  <Icontext
                    color="#ffffff"
                    imagen={flecha}
                    maxWidth="1rem"
                    variante="h6"
                    Texto="海路"
                    mt={{ xs: -0.5, lg: -0.2 }}
                  />
                  <TextSection
                    variant="h6"
                    textAlign="row"
                    sx={{ color: "#ffffff" }}
                    mt={{ xs: 1, lg: 2 }}
                    mb={{ xs: 1, lg: 2 }}
                  >
                    我們的客戶是：
                  </TextSection>
                  <Icontext
                    color="#ffffff"
                    imagen={flecha}
                    maxWidth="1rem"
                    variante="h6"
                    Texto=" 工業的"
                    mt={{ xs: -0.5, lg: -0.2 }}
                  />
                  <Icontext
                    color="#ffffff"
                    imagen={flecha}
                    maxWidth="1rem"
                    variante="h6"
                    Texto="商業連鎖店"
                    mt={{ xs: -0.5, lg: -0.2 }}
                  />
                  <Icontext
                    color="#ffffff"
                    imagen={flecha}
                    maxWidth="1rem"
                    variante="h6"
                    Texto="國內和國際"
                    mt={{ xs: -0.5, lg: -0.2 }}
                  />
                </ThemeProvider>
              </Grid>
            </Contenedor>
            <Contenedor
              mx={{ xs: -16.5, sm: -17.5, md: -17, lg: -50, xxl: -52 }}
              mt={{ xs: 42, sm: 50, md: 50, lg: 40, xxl: 40 }}
            >
              <Modalbutton
                direccionModal="right"
                imagen={FGarbanzo}
                descripcionBoton="数据表"
                Size="small"
                ColorButton="warning"
              />
            </Contenedor>
          </Grid>
        </Container>
      </Contenedor>
      <Contenedor bgColor="#fffffff" py={0.5} />
      <Contenedor
        minHeight="100%"
        width="100%"
        sx={{
          backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.0),
              rgba(gradients.dark.state, 0.0)
            )}, url(${sorgo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          placeItems: "center",
        }}
        id="sorgoZH"
      >
        <Container>
          <Grid container direction="row-reverse">
            <Contenedor
              width="45%"
              opacity={0.7}
              sx={() => ({
                backgroundImage: "linear-gradient(to right, #494949, #4B478D)",
              })}
              mt={{ xs: 0, md: 0, lg: 0 }}
            >
              <Grid mx={{ xs: 0.5, sm: 0.5, md: 0.5, lg: 8, xxl: 8 }} mb={{ xs: 7, lg: 3 }}>
                <ThemeProvider theme={theme}>
                  <TextSection
                    variant="h6"
                    fontWeight="regular"
                    textAlign="justify"
                    sx={{ color: "#ffffff" }}
                  >
                    <TextSection
                      variant="h3"
                      textAlign="center"
                      sx={{ color: "#ffffff" }}
                      mt={4}
                      mb={4}
                    >
                      紅高粱
                    </TextSection>
                    <TextSection
                      variant="h6"
                      sx={{ color: "#ffffff" }}
                      mt={{ xs: 2, lg: 4 }}
                      mb={{ xs: 1, lg: 1 }}
                    >
                      推介會：
                    </TextSection>
                  </TextSection>
                  <Icontext
                    color="#ffffff"
                    imagen={flecha}
                    maxWidth="1rem"
                    variante="h6"
                    Texto="大部分"
                    mt={{ xs: -0.5, lg: -0.2 }}
                  />
                  <TextSection
                    variant="h6"
                    textAlign="row"
                    sx={{ color: "#ffffff" }}
                    mt={{ xs: 1, lg: 2 }}
                    mb={{ xs: 1, lg: 2 }}
                  >
                    出貨方式：
                  </TextSection>
                  <Icontext
                    color="#ffffff"
                    imagen={flecha}
                    maxWidth="1rem"
                    variante="h6"
                    Texto="汽車運輸"
                    mt={{ xs: -0.5, lg: -0.2 }}
                  />
                  <Icontext
                    color="#ffffff"
                    imagen={flecha}
                    maxWidth="1rem"
                    variante="h6"
                    Texto="鐵路"
                    mt={{ xs: -0.5, lg: -0.2 }}
                  />
                  <TextSection
                    variant="h6"
                    textAlign="row"
                    sx={{ color: "#ffffff" }}
                    mt={{ xs: 1, lg: 2 }}
                    mb={{ xs: 1, lg: 2 }}
                  >
                    我們的客戶是：
                  </TextSection>
                  <Icontext
                    color="#ffffff"
                    imagen={flecha}
                    maxWidth="1rem"
                    variante="h6"
                    Texto="工業的"
                    mt={{ xs: -0.5, lg: -0.2 }}
                  />
                  <Icontext
                    color="#ffffff"
                    imagen={flecha}
                    maxWidth="1rem"
                    variante="h6"
                    Texto="國內和國際"
                    mt={{ xs: -0.5, lg: -0.2 }}
                  />
                </ThemeProvider>
              </Grid>
            </Contenedor>
            <Contenedor
              mx={{ xs: -16, sm: -17.5, md: -17, lg: -50, xxl: -52 }}
              mt={{ xs: 37, sm: 43, md: 43, lg: 37, xxl: 38 }}
            >
              <Modalbutton
                imagen={FSorgo}
                direccionModal="right"
                descripcionBoton="数据表"
                Size="small"
                ColorButton="warning"
              />
            </Contenedor>
          </Grid>
        </Container>
      </Contenedor>
    </Contenedor>
  );
}

export default Productos;
