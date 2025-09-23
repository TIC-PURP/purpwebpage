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
        title="PROTECCIÓN VEGETAL"
        text="Contamos con una amplia gama de fungicidas, insecticidas, herbicidas y foliares auxiliares para el control de enfermedades, plagas y malezas que puedan mermar tu productividad."
      />
      <Contenedor bgColor="#dadada" py={{ xs: 0.4, lg: 0.6 }} />
      <SeccionInformativa
        img={ASESORÍA}
        color="#468203"
        title="ASESORÍA TÉCNICA"
        text="Nuestro servicio técnico garantiza que recibas los productos en tiempo y forma. Integrado por un equipo de ingenieros altamente calificados, ofrecemos soluciones profesionales que optimizan los recursos y generan excelentes resultados."
      />
      <Contenedor bgColor="#dadada" py={{ xs: 0.4, lg: 0.6 }} />
      <SeccionInformativa
        img={NUTRICIÓN}
        color="#468203"
        title="NUTRICIÓN VEGETAL"
        text="Nuestros asesores técnicos realizan un análisis de suelo A TU MEDIDA. Detectamos tus necesidades de fertilización y ofrecemos soluciones a tu alcance."
      />
    </Contenedor>
  );
}
export default Informativa;
