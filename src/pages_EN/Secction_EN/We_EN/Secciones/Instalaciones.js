import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Grid, IconButton, createTheme, ThemeProvider } from "@mui/material";
import Contenedor from "components/Contenedor";
import TextSection from "../../../../components/TextSection";
import ContenedorBloques from "../../../../pages/components/ContendorBloques";

import ofidinaGV from "../../../../assets/images/PURP_WEB/2.NOSOTROS/INSTALACIONES/0-OFICINA.jpg";
import ofidinaGV2 from "../../../../assets/images/PURP_WEB/2.NOSOTROS/INSTALACIONES/1.OFICINA.jpg";
import graneles from "../../../../assets/images/PURP_WEB/2.NOSOTROS/INSTALACIONES/1.BODEGA_GRANELERA.jpg";
import silosPN from "../../../../assets/images/PURP_WEB/2.NOSOTROS/INSTALACIONES/2.SILOS.jpg";
import siloREPOSO from "../../../../assets/images/PURP_WEB/2.NOSOTROS/INSTALACIONES/3.SILO_REPOSO.jpg";
import estiva from "../../../../assets/images/PURP_WEB/2.NOSOTROS/INSTALACIONES/4.ESTIBA_DE_TREN.jpg";
import bodegaPN from "../../../../assets/images/PURP_WEB/2.NOSOTROS/INSTALACIONES/5.BODEGA_REFRIGERADA.jpg";
import produccion from "../../../../assets/images/PURP_WEB/2.NOSOTROS/INSTALACIONES/6.LINEAS_DE_PRODUCCION.jpg";
import bodegaFER from "../../../../assets/images/PURP_WEB/2.NOSOTROS/INSTALACIONES/7.BODEGA_FERTILIZANTES.jpg";
/* import tanque from "../../../../assets/images/PURP_WEB/6.INSTALACIONES/8.TANQUE.jpg"; */
import nodrizas from "../../../../assets/images/PURP_WEB/2.NOSOTROS/INSTALACIONES/9.NODRIZAS.jpg";
import paneles from "../../../../assets/images/PURP_WEB/2.NOSOTROS/INSTALACIONES/10.PANELES_SOLARES.jpg";
import bodegaBR from "../../../../assets/images/PURP_WEB/2.NOSOTROS/INSTALACIONES/11.BODEGA_BURRION.jpg";
import silosBR from "../../../../assets/images/PURP_WEB/2.NOSOTROS/INSTALACIONES/12.SILOS.jpg";
/* import amoniacoBR from "../../../../assets/images/PURP_WEB/6.INSTALACIONES/13.PLANTA_AMONÍACO.jpg"; */
import recepcionBR from "../../../../assets/images/PURP_WEB/2.NOSOTROS/INSTALACIONES/14.RECEPCION.jpg";
import Flecha1 from "../../../../assets/images/PURP_WEB/2.NOSOTROS/ATRAS.png";
import Flecha2 from "../../../../assets/images/PURP_WEB/2.NOSOTROS/SIGUIENTE.png";

const theme = createTheme();

theme.typography.body2 = {
  fontSize: "0.7rem",
  "@media (min-width:600px)": {
    fontSize: "0.79rem",
  },
};

const styles = {
  mainSlide: {
    paddingTop: "30px",
  },
  sliderWrapper: {
    width: "35rem",
  },
  carousel: {
    textAlign: "center",
  },
};

const imagePaths = [
  ofidinaGV,
  ofidinaGV2,
  graneles,
  silosPN,
  siloREPOSO,
  estiva,
  bodegaPN,
  produccion,
  bodegaFER,
  /* tanque, */
  nodrizas,
  paneles,
  bodegaBR,
  silosBR,
  /* amoniacoBR, */
  recepcionBR,
];

const imagesWithText = [
  "Central Office, Guasave.",
  "Central Office, Guasave.",
  "Warehouse Los Pinitos. Bulk warehouse with a capacity of 30,000 MT.",
  "Warehouse Los Pinitos. 4 silos with a capacity of 5,000 MT.",
  "Warehouse Los Pinitos. 1,000 MT rest silo. for wet or dry grain.",
  "Warehouse Los Pinitos. Railway spur with a capacity of 30 hoppers for loading product.",
  "Warehouse Los Pinitos. Two warehouses with refrigeration equipment for the long-term conservation of grains such as beans, chickpeas and seeds.",
  "Warehouse Los Pinitos. Two production lines for grain cleaning and packaging in different presentations.",
  "Warehouse Los Pinitos. Warehouse with a capacity of 4,000 MT for solid fertilizers.",
  "Warehouse Los Pinitos. Plant for loading and unloading Anhydrous Ammonia. With cylinders with a capacity of 3,500 liters.",
  "Warehouse Los Pinitos. Solar panel area for sustainable energy use.",
  "Warehouse El Burrión. Shipping capacity of 300 tons/h. Process capacity of 20 tons/h.",
  "Warehouse El Burrión. Silos with storage capacity of 46,000 MT.",
  "Warehouse El Burrión. Reception capacity of 250 tons/h.",
];

function Instalaciones() {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % imagePaths.length);
  };

  const handlePrev = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + imagePaths.length) % imagePaths.length);
  };

  return (
    <>
      <ContenedorBloques
        tituloContenedor="PHOTO GALLERY"
        variant="h5"
        DierccionTitulo="center"
        color="#5B524D"
        bgColor="white"
        ContainerSize={{ xs: 0, sm: 1.5, lg: 10 }}
      />
      <Contenedor mt={{ xs: 6, lg: 0 }}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={1} mt={-12}>
            <IconButton color="white" onClick={handlePrev}>
              <Contenedor component="img" src={Flecha1} width="100%" maxHeight="30vh" />
            </IconButton>
          </Grid>
          <Grid item xs={10} lg={9}>
            <Carousel
              className="main.slide"
              emulateTouch
              renderIndicator={false}
              autoPlay={2000}
              showArrows={false}
              transitionTime={2000}
              selectedItem={currentImage}
              onChange={setCurrentImage}
              style={styles.carousel}
            >
              {imagePaths.map((imagePath, index) => (
                <div key={imagePath}>
                  <img src={imagePath} alt={`Slide ${index + 1}`} width="100%" maxHeight="80vh" />
                  <Grid container justifyContent="center">
                    <Grid item xs={12}>
                      <ThemeProvider theme={theme}>
                        <Contenedor
                          sx={{
                            bgcolor: "#000000",
                            opacity: 0.6,
                          }}
                          width="100%"
                          py={2}
                          mt={-10}
                        >
                          <Contenedor>
                            <TextSection
                              variant="body2"
                              fontWeight="regular"
                              sx={{
                                filter: "contrast(1.75)",
                                color: "#ffffff",
                              }}
                              mt={0}
                            >
                              {imagesWithText[index]}
                            </TextSection>
                          </Contenedor>
                        </Contenedor>
                      </ThemeProvider>
                    </Grid>
                  </Grid>
                </div>
              ))}
            </Carousel>
          </Grid>
          <Grid item xs={1} mt={-12}>
            <IconButton color="white" onClick={handleNext}>
              <Contenedor component="img" src={Flecha2} width="100%" maxHeight="40vh" />
            </IconButton>
          </Grid>
        </Grid>
      </Contenedor>
    </>
  );
}

export default Instalaciones;
