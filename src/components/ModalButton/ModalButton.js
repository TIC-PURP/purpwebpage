import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PropTypes from "prop-types";
import TextSection from "components/TextSection";
import Modal from "@mui/material/Modal";
import Slide from "@mui/material/Slide";

import Contenedor from "../Contenedor";
import Button from "../Button";

const theme = createTheme();

theme.typography.button = {
  fontSize: "0.65rem",
  "@media (min-width:600px)": {
    fontSize: "0.8rem",
  },
};

// eslint-disable-next-line react/prop-types
function ModalButton({ action, showImagen, SizeButton }) {
  const [show, setShow] = useState(false);
  const toggleModal = () => setShow(!show);

  return (
    <Button
      onClick={toggleModal}
      variant="gradient"
      size={SizeButton}
      color={action.color ? action.color : "dark"}
    >
      <ThemeProvider theme={theme}>
        <TextSection variant="button" fontWeight="bold" sx={{ color: "#ffffff" }}>
          {action.label}
        </TextSection>
      </ThemeProvider>
      <Modal open={show} onClose={toggleModal} sx={{ display: "grid", placeItems: "center" }}>
        <Slide direction={action.direction ? action.direction : "up"} in={show} timeout={500}>
          <Contenedor>
            <Contenedor
              component="img"
              src={showImagen}
              width="100%"
              borderRadius="xl"
              shadow="xl"
            />
            <Contenedor width="14%" mx="auto" mt={{ xs: -6, lg: -8 }}>
              <Button
                variant="gradient"
                color={action.color ? action.color : "dark"}
                onClick={toggleModal}
                size={SizeButton}
                fullWidth
              >
                Cerrar
              </Button>
            </Contenedor>
          </Contenedor>
        </Slide>
      </Modal>
    </Button>
  );
}

// Typechecking props for the CenteredBlogCard
ModalButton.propTypes = {
  action: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "light",
    ]),
    direction: PropTypes.oneOf(["down", "left", "right", "up"]),
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default ModalButton;
