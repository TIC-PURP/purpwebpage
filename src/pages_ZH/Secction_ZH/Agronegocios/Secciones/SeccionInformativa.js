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
        title="植物保護"
        text="我們擁有多種葉面產品、殺菌劑、殺蟲劑和輔助除草劑，用於控制可能降低您生產力的疾病、害蟲和雜草。"
      />
      <Contenedor bgColor="#dadada" py={{ xs: 0.4, lg: 0.6 }} />
      <SeccionInformativa
        img={ASESORÍA}
        color="#468203"
        title="技術諮詢"
        text="我們的技術服務確保您及時收到產品。我們由高素質的工程師團隊組成，提供專業的解決方案來優化資源並獲得優異的結果。"
      />
      <Contenedor bgColor="#dadada" py={{ xs: 0.4, lg: 0.6 }} />
      <SeccionInformativa
        img={NUTRICIÓN}
        color="#468203"
        title="植物營養"
        text="我們的技術顧問會為您進行量身訂製的土壤分析。我們檢測您的施肥需求並提供您力所能及的解決方案。"
      />
    </Contenedor>
  );
}
export default Informativa;
