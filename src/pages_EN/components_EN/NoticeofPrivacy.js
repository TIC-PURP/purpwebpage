import Contenedor from "components/Contenedor";
import { Grid, Container } from "@mui/material";
import ContenedorBloques from "pages/components/ContendorBloques";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextSection from "../../components/TextSection";
import footerRoutes from "../../routes_EN/footer.routes";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
// eslint-disable-next-line import/no-cycle
import routes from "../../routes_EN/routes";

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
            1. Data of the Controller
          </TextSection>
          <TextSection textAlign="justify" sx={{ color: "#5B524D" }} variant="body2">
            PURP, S.A. DE C.V., (hereinafter the “Controller”) is responsible for collecting your
            personal data, the use given to it and its protection, with address at Carretera
            Internacional México 15, Km. 148 número 2,856 C.P. 81030, Colonia Zona Industrial,
            Guasave, Sinaloa.
          </TextSection>
          <TextSection textAlign="justify" sx={{ color: "#5B524D" }} variant="h5" mt={2} mb={1}>
            How to contact us:
          </TextSection>
          <TextSection textAlign="justify" sx={{ color: "#5B524D" }} variant="body2">
            <>
              • Carretera Internacional México 15, Km. 148 número 2,856 C.P. 81030, Colonia Zona
              Industrial, Guasave, Sinaloa.
              <br />
              • Email: purp@purp.com.mx
              <br />• Telephone: (687) 872 4548
            </>
          </TextSection>
          <TextSection textAlign="justify" sx={{ color: "#5B524D" }} variant="h5" mt={2} mb={1}>
            2. Personal data
          </TextSection>
          <TextSection textAlign="justify" sx={{ color: "#5B524D" }} variant="body2">
            <>
              The Controller will collect from you the personal data (“Personal Data”) that is
              necessary for the adequate offer of its products (“Products”) and provision of its
              services (“Services”) either (i) directly, This is through electronic, optical, sound,
              visual means, or any other technology such as postal mail, internet or telephone (ii)
              indirectly, through other sources that are permitted by law, this through a source
              publicly accessible or a transfer; or (iii) personally through your agents or
              promoters when you provide it yourself with the physical presence of both. Such
              Personal Data may include all or some of the following:
              <br />
              • Identification data: full name, address, home, cell phone and/or work telephone
              number, sex, nationality, date of birth, occupation or profession, marital status.
              <br />• The Controller will not collect or process sensitive personal data.
            </>
          </TextSection>
          <TextSection textAlign="justify" sx={{ color: "#5B524D" }} variant="h5" mt={2} mb={1}>
            3. Purposes of the Processing of Personal Data.
          </TextSection>
          <TextSection textAlign="justify" sx={{ color: "#5B524D" }} variant="body2">
            <>
              The Controller will process your Personal Data solely and exclusively in accordance
              with the terms of this Privacy Notice. The Personal Data that you have provided to us
              will be used for the following necessary purposes and that give rise to the
              contractual relationship between the Controller and you as the Owner of the personal
              data.
              <br />
              • Provide the services and products required by you;
              <br />• Inform about changes in products or services that are related to those
              contracted or acquired by the client; Meet our professional obligations;
              <br />• Comply effectively and professionally with the acquired commitments of our
              requested services and the quality of our purchased products.
              <br />
              • Evaluate the quality of the service and products offered.
              <br />• Conduct internal research on consumer habits.
            </>
          </TextSection>
          <TextSection textAlign="justify" sx={{ color: "#5B524D" }} variant="h5" mt={2} mb={1}>
            4. Transfer of Personal Data.
          </TextSection>
          <TextSection textAlign="justify" sx={{ color: "#5B524D" }} variant="body2">
            The Controller requires the transfer of your Personal Data to the extent necessary for
            the provision of the Services and products offered within and even outside the Mexican
            Republic. The Controller undertakes to ensure that the legal protection principles
            regarding the transfer of personal data are complied with. Likewise, you express your
            commitment to ensure that this Privacy Notice is respected at all times, by us and by
            any of the companies that are part of the Responsible Party´s corporate group. We
            undertake not to transfer your personal information to third parties without your
            consent, except for the exceptions provided for in article 37 of the Federal Law on
            Protection of Personal Data Held by Private Parties, as well as to carry out this
            transfer under the terms established by that law.
          </TextSection>
          <TextSection textAlign="justify" sx={{ color: "#5B524D" }} variant="h5" mt={2} mb={1}>
            5. Limitation of Use or Disclosure of Personal Data.
          </TextSection>
          <TextSection textAlign="justify" sx={{ color: "#5B524D" }} variant="body2">
            You can limit the use or disclosure of your data to stop receiving promotions, messages,
            offers and advertising regarding the Controller´s products and services by calling the
            Specialized Care Unit telephone number.
          </TextSection>
          <TextSection textAlign="justify" sx={{ color: "#5B524D" }} variant="h5" mt={2} mb={1}>
            6. Means to exercise ARCO Rights.
          </TextSection>
          <TextSection textAlign="justify" sx={{ color: "#5B524D" }} variant="body2">
            In accordance with the Federal Law on Protection of Personal Data Held by Private
            Parties and its Regulations, you or through a legal representative, have the right to
            access your personal data that we possess and the details of their processing, as well
            as to rectify them in If they are inaccurate or incomplete, cancel them when they turn
            out to be excessive or unnecessary for the purposes that justified their obtaining or
            oppose their processing for specific purposes. The mechanism that has been implemented
            for the exercise of said rights is through the presentation of the Request for Exercise
            of ARCO Rights (the “Request”), which we make available to you at the end of this
            Privacy Notice, this must be downloaded, requested and signed by the Owner or his legal
            representative and send it to the email purp@purp.com.mx with the documentation
            indicated for it, likewise the date of receipt of the same will be communicated via
            email. Finally, we inform you that you will be responded to within a maximum period of
            20 (twenty) business days, counted from the date of receipt by the Controller, provided
            that you comply with all the requirements indicated in the Request, so that, if it is
            appropriate, the ARCO right is made effective by requesting it within 15 (fifteen)
            business days following the date on which the response is communicated.
          </TextSection>
          <TextSection textAlign="justify" sx={{ color: "#5B524D" }} variant="h5" mt={2} mb={1}>
            7. Means for Revocation of Consent.
          </TextSection>
          <TextSection textAlign="justify" sx={{ color: "#5B524D" }} variant="body2">
            At any time during the processing, you may revoke the consent you have given for the
            processing of your data. To do so, you must send an email to the Personal Data
            Department requesting the revocation of your consent, subject to the procedure described
            above. We ask you to consider that you will not be able to revoke consent if you want
            the contractual relationship with the Controller to subsist.
          </TextSection>
          <TextSection textAlign="justify" sx={{ color: "#5B524D" }} variant="h5" mt={2} mb={1}>
            8. Use of cookies.
          </TextSection>
          <TextSection textAlign="justify" sx={{ color: "#5B524D" }} variant="body2">
            The different Internet sites of the Controller are based on the management of Cookies
            and/or Web Beacons that allow the Controller to automatically collect personal data. By
            entering and continuing to use the Internet Sites, you consent to the Controller
            collecting and processing your personal data. The use of these technologies is necessary
            for operational, technical and security reasons.
          </TextSection>
          <TextSection textAlign="justify" sx={{ color: "#5B524D" }} variant="h5" mt={2} mb={1}>
            9. Changes to the Privacy Notice.
          </TextSection>
          <TextSection textAlign="justify" sx={{ color: "#5B524D" }} variant="body2" mb={6}>
            We reserve the right to make modifications or updates to this privacy notice at any
            time, to address legislative or jurisprudential developments, internal policies, new
            requirements for the provision or offering of our services or products and market
            practices. These modifications will be communicated through the following means (i),
            visible announcements in our offices or work centers (iii), on our website
            www.purp.com.mx, (iii) or we will send them to you by email. that you have provided to
            us.
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
