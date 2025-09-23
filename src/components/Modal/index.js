/* eslint-disable react/prop-types */
import Contenedor from "components/Contenedor";
import Modal from "./modal";

// Images

function Modals({ boton, titulo, descripcion, accion, modalShow, Imagen, DireccionModal, label }) {
  return (
    <Contenedor>
      <Modal
        button={boton}
        title={titulo}
        description={descripcion}
        action={accion}
        label={label}
        modalShow={modalShow}
        Imagen={Imagen}
        direction={DireccionModal}
      />
    </Contenedor>
  );
}

export default Modals;
