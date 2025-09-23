import Contenedor from "components/Contenedor";
import { Grid, Container } from "@mui/material";
import ContenedorBloques from "pages/components/ContendorBloques";
// Routes
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextSection from "../../components/TextSection";
import footerRoutes from "../../routes/footer.routes";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
// eslint-disable-next-line import/no-cycle
import routes from "../../routes/routes";

const theme = createTheme();

theme.typography.h2 = {
  fontSize: "1.5rem",
  "@media (min-width:600px)": {
    fontSize: "2rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.5rem",
  },
};

function AvisoPrivacidad() {
  return (
    <Contenedor bgColor="white">
      <Contenedor>
        <Navbar routes={routes} light sticky bgColor1="#494949" bgColor2="#000099" />
        <Grid
          container
          item
          xs={12}
          justifyContent="center"
          alignItems="center"
          sx={{ mx: "auto" }}
        >
          <ThemeProvider theme={theme}>
            <TextSection
              variant="h2"
              sx={{ color: "#5B524D" }}
              textAlign="center"
              justify="center"
              mt={15}
              mb={6}
            >
              PURP, S.A. DE C.V.
            </TextSection>
          </ThemeProvider>
        </Grid>
        <Container>
          <TextSection textAlign="justify" sx={{ color: "#5B524D" }} variant="h5" mb={1}>
            1. Datos del Responsable
          </TextSection>
          <TextSection textAlign="justify" sx={{ color: "#5B524D" }} variant="body2">
            PURP, S.A. DE C.V., (en lo sucesivo el “Responsable”) es el responsable de recabar sus
            datos personales, del uso que se le dé a los mismo y su protección, con domicilio en
            Carretera Internacional México 15, #2856, Guasave, Sinaloa. México. C.P. 81136.
          </TextSection>
          <TextSection textAlign="justify" sx={{ color: "#5B524D" }} variant="h5" mt={2} mb={1}>
            Cómo contactarnos:
          </TextSection>
          <TextSection textAlign="justify" sx={{ color: "#5B524D" }} variant="body2">
            <>
              • Carretera Internacional México 15, #2856, Guasave, Sinaloa. México. C.P. 81136.
              <br />
              • Correo electrónico: purp@purp.com.mx
              <br />• Teléfono: (687) 872 4548
            </>
          </TextSection>
          <TextSection textAlign="justify" sx={{ color: "#5B524D" }} variant="h5" mt={2} mb={1}>
            2. Datos personales
          </TextSection>
          <TextSection textAlign="justify" sx={{ color: "#5B524D" }} variant="body2">
            <>
              El Responsable recabará de usted los datos personales (“Datos Personales”) que sean
              necesarios para la adecuada oferta de sus productos (“Productos”) y prestación de sus
              servicios (“Servicios”) ya sea (i) directamente, esto es a través de medios
              electrónicos, ópticos, sonoros, visuales, o cualquier otra tecnología como correo
              postal, internet o vía telefónica (ii) indirectamente, a través de otras fuentes que
              se encuentren permitidas por la Ley, esto a través de una fuente de acceso público o
              una transferencia; o (iii) personalmente a través de sus agentes o promotores cuando
              usted mismo lo proporciona con la presencia física de ambos. Dichos Datos Personales
              podrán incluir todos o algunos de los siguientes:
              <br />
              • Datos de identificación: nombre completo, dirección, teléfono de casa, celular y/o
              de trabajo, sexo, nacionalidad, fecha de nacimiento, ocupación o profesión, estado
              civil,
              <br />• El Responsable no recabará ni tratará datos personales sensibles.
            </>
          </TextSection>
          <TextSection textAlign="justify" sx={{ color: "#5B524D" }} variant="h5" mt={2} mb={1}>
            3. Finalidades del Tratamiento de los Datos Personales.
          </TextSection>
          <TextSection textAlign="justify" sx={{ color: "#5B524D" }} variant="body2">
            <>
              El Responsable tratará sus Datos Personales única y exclusivamente conforme a los
              términos del presente Aviso de Privacidad. Los Datos Personales que nos ha
              proporcionado serán utilizados para las siguientes finalidades necesarias y que dan
              origen a la relación contractual entre el Responsable y usted como Titular de los
              datos personales.
              <br />
              • Proveer los servicios y productos requeridos por usted;
              <br />• Informar sobre cambios de productos o servicios que estén relacionados con el
              contratado o adquirido por el cliente; Cumplir con nuestras obligaciones
              profesionales;
              <br />• Cumplir eficaz y profesionalmente con los compromisos adquiridos de nuestros
              servicios solicitados y la calidad de nuestros productos adquiridos.
              <br />
              • Evaluar la calidad del servicio y los productos ofertados.
              <br />• Realizar estudios internos sobre hábitos de consumo.
            </>
          </TextSection>
          <TextSection textAlign="justify" sx={{ color: "#5B524D" }} variant="h5" mt={2} mb={1}>
            4. Transferencia de Datos Personales.
          </TextSection>
          <TextSection textAlign="justify" sx={{ color: "#5B524D" }} variant="body2">
            El Responsable requiere transferir sus Datos Personales en la medida que sea necesario
            para la prestación de los Servicios y productos ofertados dentro e incluso fuera de la
            República Mexicana. El Responsable se compromete a velar porque se cumplan los
            principios legales de protección en torno a la transferencia de datos personales. De
            igual forma, manifiesta su compromiso para que se respete en todo momento, por nosotros
            y por cualquiera de las sociedades que forman parte del grupo corporativo del
            Responsable, el presente Aviso de Privacidad. Nos comprometemos a no transferir su
            información personal a terceros sin su consentimiento, salvo las excepciones previstas
            en el artículo 37 de la Ley Federal de Protección de Datos Personales en Posesión de
            Particulares, así como a realizar esta transferencia en los términos que fija esa ley.
          </TextSection>
          <TextSection textAlign="justify" sx={{ color: "#5B524D" }} variant="h5" mt={2} mb={1}>
            5. Limitación de Uso o Divulgación de los Datos Personales.
          </TextSection>
          <TextSection textAlign="justify" sx={{ color: "#5B524D" }} variant="body2">
            Usted puede limitar el uso o divulgación de sus datos para dejar de recibir promociones,
            mensajes, ofertas y publicidad respecto de los productos y servicios del Responsable
            llamando al teléfono de la Unidad Especializada de Atención.
          </TextSection>
          <TextSection textAlign="justify" sx={{ color: "#5B524D" }} variant="h5" mt={2} mb={1}>
            6. Medios para ejercer los Derechos ARCO.
          </TextSection>
          <TextSection textAlign="justify" sx={{ color: "#5B524D" }} variant="body2">
            Conforme a la Ley Federal de Protección de Datos Personales en Posesión de los
            Particulares y su Reglamento, usted o mediante representante legal, tiene el derecho de
            acceder a sus datos personales que poseemos y a los detalles del tratamiento de los
            mismos, así como a rectificarlos en caso de ser inexactos o incompletos, cancelarlos
            cuando resulten ser excesivos o innecesarios para las finalidades que justificaron su
            obtención u oponerse al tratamiento de los mismos para fines específicos. El mecanismo
            que se ha implementado para el ejercicio de dichos derechos es a través de la
            presentación de la Solicitud de Ejercicio de Derechos ARCO (la “Solicitud”), misma que
            ponemos a su disposición al final del presente Aviso de Privacidad, esta deberá ser
            descargada, requisitada y firmada por el Titular o su representante legal y enviarla al
            correo electrónico purp@purp.com.mx con la documentación señalada de ella, así mismo se
            le comunicará la fecha de recepción de la misma vía correo electrónico. Por último, le
            informamos que se le responderá en un plazo máximo de 20 (veinte) días hábiles, contados
            desde la fecha de recepción por parte del Responsable siempre que cumpla con todos los
            requisitos señalados en la Solicitud, a efecto de que, si resulta procedente, se haga
            efectivo el derecho ARCO solicitando dentro de los 15 (quince) días hábiles siguientes a
            la fecha en que se le comunique la respuesta.
          </TextSection>
          <TextSection textAlign="justify" sx={{ color: "#5B524D" }} variant="h5" mt={2} mb={1}>
            7. Medios para la Revocación del Consentimiento.
          </TextSection>
          <TextSection textAlign="justify" sx={{ color: "#5B524D" }} variant="body2">
            En cualquier momento del tratamiento usted podrá revocar el consentimiento que ha
            otorgado para el tratamiento de sus datos, para ello es necesario que envíe un correo
            electrónico al Departamento de Datos Personales solicitando la revocación de su
            consentimiento estando sujeto al procedimiento descrito anteriormente. Le pedimos
            considerar que no podrá revocar el consentimiento si desea que subsista la relación
            contractual con el Responsable.
          </TextSection>
          <TextSection textAlign="justify" sx={{ color: "#5B524D" }} variant="h5" mt={2} mb={1}>
            8. Uso de cookies.
          </TextSection>
          <TextSection textAlign="justify" sx={{ color: "#5B524D" }} variant="body2">
            Los diferentes sitios de internet del Responsable se basan en el manejo de Cookies y/o
            Web Beacons que permiten que el Responsable recabe automáticamente datos personales. Al
            ingresar y continuar con el uso del Sitios de Internet, usted consiente que el
            Responsable recabe y trate sus datos personales. El uso de estas tecnologías es
            necesario por motivos de operación, técnicos y de seguridad.
          </TextSection>
          <TextSection textAlign="justify" sx={{ color: "#5B524D" }} variant="h5" mt={2} mb={1}>
            9. Cambios al Aviso de Privacidad.
          </TextSection>
          <TextSection textAlign="justify" sx={{ color: "#5B524D" }} variant="body2" mb={6}>
            Nos reservamos el derecho de efectuar en cualquier momento modificaciones o
            actualizaciones al presente aviso de privacidad, para la atención de novedades
            legislativas o jurisprudenciales, políticas internas, nuevos requerimientos para la
            prestación u ofrecimiento de nuestros servicios o productos y prácticas del mercado.
            Estas modificaciones serán comunicadas mediante los siguientes medios (i), anuncios
            visibles en nuestras oficinas o centros de trabajo (iii), en nuestra página de Internet
            www.purp.com.mx, (iii) o se la haremos llegar al último correo electrónico que nos haya
            proporcionado.
          </TextSection>
        </Container>
      </Contenedor>
      <Contenedor px={1}>
        <Footer content={footerRoutes} ColorFondo="#494949" />
      </Contenedor>
      <ContenedorBloques bgColor="#FFCC00" ContainerSize={0.5} />
    </Contenedor>
  );
}
export default AvisoPrivacidad;
