import Contenedor from "components/Contenedor";
import SeccionInformativa from "../../../../components/Seccion/SeccionInfo";
import PROTECCIÓN from "../../../../assets/images/PURP_WEB/5.AGRONEGOCIOS/SECCION_INFORMATIVA/PROTECCION_VEGETAL.jpg";
import ASESORÍA from "../../../../assets/images/PURP_WEB/5.AGRONEGOCIOS/SECCION_INFORMATIVA/ASESORIA_TECNICA.jpg";
import NUTRICIÓN from "../../../../assets/images/PURP_WEB/5.AGRONEGOCIOS/SECCION_INFORMATIVA/NUTRICION_VEGETAL.jpg";

function Informativa() {
  return (
    <Contenedor>
      <SeccionInformativa
        img={PROTECCIÓN}
        color="#468203"
        title="PLANT PROTECTION"
        text="We have a wide range of foliar products, fungicides, insecticides and auxiliary herbicides to control diseases, pests and weeds that can reduce your productivity."
      />
      <Contenedor bgColor="#dadada" py={{ xs: 0.4, lg: 0.6 }} />
      <SeccionInformativa
        img={ASESORÍA}
        color="#468203"
        title="TECHNICAL CONSULTING"
        text="Our technical service ensures that you receive the products in a timely manner. Made up of a team of highly qualified engineers, we offer professional solutions to optimize resources and obtain excellent results."
      />
      <Contenedor bgColor="#dadada" py={{ xs: 0.4, lg: 0.6 }} />
      <SeccionInformativa
        img={NUTRICIÓN}
        color="#468203"
        title="VEGETAL NUTRITION"
        text="Our technical advisors carry out a soil analysis TAILOR-MADE FOR YOU. We detect your fertilization needs and offer solutions within your reach."
      />
    </Contenedor>
  );
}
export default Informativa;
