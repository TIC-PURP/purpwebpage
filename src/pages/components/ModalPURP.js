import { useState } from "react";
import { Modal, Slide } from "@mui/material";
import Contenedor from "components/Contenedor";
import { createTheme } from "@mui/material/styles";
import Button from "../../components/Button";
// import PNA from "../../assets/images/examples/PURP.png";

const theme = createTheme();

theme.typography.body1 = {
  fontSize: "1rem",
  "@media (min-width:600px)": {
    fontSize: "2rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.3rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.2rem",
  },
};

function ModalPURP() {
  const [modalShow, setShow] = useState(true);
  const onClose = () => setShow(!modalShow);

  return (
    <Contenedor>
      <Modal open={modalShow} onClose={onClose} sx={{ display: "grid", placeItems: "center" }}>
        <Slide direction="down" in={modalShow} timeout={500}>
          <Contenedor>
            <Button variant="outlined" size="large" color="white" onClick={onClose}>
              Cerrar
            </Button>
          </Contenedor>
        </Slide>
      </Modal>
    </Contenedor>
  );
}

export default ModalPURP;
