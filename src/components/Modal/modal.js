import { useState } from "react";

// @mui material components
import Slide from "@mui/material/Slide";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";

// @mui icons
import CloseIcon from "@mui/icons-material/Close";
import Contenedor from "components/Contenedor";
import Button from "../Button";
import TextSection from "../TextSection";

// eslint-disable-next-line react/prop-types
function SimpleModal({ button, title, description, direction, action, modalShow, Imagen, label }) {
  // eslint-disable-next-line no-unneeded-ternary
  const [show, setShow] = useState(modalShow ? modalShow : false);
  const toggleModal = () => setShow(!show);

  return (
    <Contenedor component="section" py={0}>
      <Container>
        <Grid container item xs={5} lg={10} justifyContent="center" mx="auto">
          {modalShow ? (
            <div />
          ) : (
            <Button size="small" variant="gradient" color="light" onClick={toggleModal}>
              {button}
            </Button>
          )}
        </Grid>
        <Modal open={show} onClose={toggleModal} sx={{ display: "grid", placeItems: "center" }}>
          <Slide direction={direction} in={show} timeout={500}>
            <Contenedor
              position="relative"
              width={{ xs: "80%", sm: 470 }}
              mx={{ xs: 2, sm: 0 }}
              flexDirection="column"
              borderRadius="md"
              bgColor="white"
            >
              <Contenedor display="flex" alginItems="center" justifyContent="space-between" p={1}>
                <TextSection variant="h6" fontWeight="regular" sx={{ color: "#5B524D" }}>
                  {title}
                </TextSection>
                <CloseIcon
                  fontSize="medium"
                  sx={{ cursor: "pointer", color: "#5B524D" }}
                  onClick={toggleModal}
                />
              </Contenedor>
              <Divider sx={{ my: 0 }} />
              <Contenedor p={1}>
                {Imagen ? (
                  <Contenedor component="img" src={Imagen} width="100%" />
                ) : (
                  <TextSection variant="body2" color="secondary" fontWeight="regular">
                    {description}
                  </TextSection>
                )}
              </Contenedor>
              <Divider sx={{ my: 0 }} />
              <Contenedor p={1}>
                <Button variant="gradient" size="small" color="light" onClick={toggleModal}>
                  {action}
                  <TextSection color="white" variant="button">
                    {label}
                  </TextSection>
                </Button>
              </Contenedor>
            </Contenedor>
          </Slide>
        </Modal>
      </Container>
    </Contenedor>
  );
}

export default SimpleModal;
