import React, { useState } from "react";
import PropTypes from "prop-types"; // Asegúrate de importar PropTypes
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import SendIcon from "@mui/icons-material/Send";
import TextSection from "components/TextSection";
import ReCAPTCHA from "react-google-recaptcha";
import Contenedor from "../../../components/Contenedor";
import Button from "../../../components/Button";
import Input from "../../../components/Input";

// Función para enviar datos al servidor
async function sendDataWebpage(datos) {
  try {
    const resp = await fetch(`https://purpapi.ddns.net/contacto/contactopurp`, {
      method: "POST",
      body: JSON.stringify(datos),
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
    });
    const respuesta = resp.json();
    return respuesta;
  } catch (err) {
    if (err.name === "AbortError") {
      return {
        message: "OK",
        datos: "Tu información no se ha enviado",
      };
    }
    return { message: "ERROR", datos: err };
  }
}

// Tema personalizado para controlar el tamaño de fuente de los encabezados
const theme = createTheme({
  typography: {
    h2: {
      fontSize: "2rem",
      "@media (min-width:600px)": { fontSize: "2rem" },
      "@media (min-width:960px)": { fontSize: "2rem" },
      "@media (min-width:1280px)": { fontSize: "2rem" },
    },
  },
});

// Componente de formulario de contacto
function Contacto({
  titulo,
  nombre,
  asunto,
  telefono,
  correo,
  mensaje,
  enviar,
  phNombre,
  phAsunto,
  phCorreo,
  phTelefono,
  phMensaje,
}) {
  const [formData, setFormData] = useState({
    name: "",
    asunto: "",
    email: "",
    telefono: "",
    mensaje: "",
  });
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      !formData.name ||
      !formData.asunto ||
      !formData.email ||
      !formData.telefono ||
      !formData.mensaje
    ) {
      alert("Por favor, complete todos los campos antes de enviar el formulario.");
      return;
    }

    if (!recaptchaValue) {
      alert("Por favor, complete la verificación reCAPTCHA.");
      return;
    }

    const datos = {
      id: "principal",
      name: formData.name,
      asunto: formData.asunto,
      email: formData.email,
      telefono: formData.telefono,
      mensaje: formData.mensaje,
    };

    const response = await sendDataWebpage(datos);

    if (response.message === "OK") {
      alert("Tu mensaje ha sido enviado correctamente.");
    } else {
      alert(response.datos || "Ocurrió un error al enviar el mensaje");
    }

    setFormData({ name: "", asunto: "", email: "", telefono: "", mensaje: "" });
  };

  return (
    <Contenedor bgColor="white">
      <Grid
        container
        item
        xs={12}
        lg={12}
        justifyContent="center"
        alignItems="center"
        sx={{ mx: "auto" }}
      >
        <ThemeProvider theme={theme}>
          <TextSection
            variant="h2"
            sx={{ color: "#5B524D" }}
            fontWeight="bold"
            textAlign="center"
            mt={10}
            mb={2}
          >
            {titulo}
          </TextSection>
        </ThemeProvider>
      </Grid>
      <Grid item xs={12} sm={12} lg={12}>
        <Contenedor component="form" id="form" p={2} method="post" onSubmit={handleSubmit}>
          <Contenedor pt={2} pb={2} px={{ xs: 6, md: 12, lg: 12 }}>
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={12} sm={12} md={6} lg={5}>
                <Input
                  name="name"
                  label={nombre}
                  placeholder={phNombre}
                  fullWidth
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={5} lg={4}>
                <Input
                  name="asunto"
                  label={asunto}
                  placeholder={phAsunto}
                  fullWidth
                  value={formData.asunto}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={5}>
                <Input
                  name="email"
                  type="email"
                  label={correo}
                  placeholder={phCorreo}
                  fullWidth
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={5} lg={4}>
                <Input
                  name="telefono"
                  label={telefono}
                  placeholder={phTelefono}
                  fullWidth
                  value={formData.telefono}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={11} lg={9}>
                <Input
                  name="mensaje"
                  label={mensaje}
                  placeholder={phMensaje}
                  fullWidth
                  multiline
                  rows={6}
                  value={formData.mensaje}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid
                item
                xs={10}
                md={11}
                lg={9}
                container
                textAlign="right"
                justifyContent={{ xs: "center", lg: "flex-end" }}
              >
                <Contenedor mt={-1.5}>
                  <ReCAPTCHA
                    sitekey="6Lf0uvgfAAAAAPUOjQDU3QdAhUMS-jYKVv01MI9t"
                    onChange={handleRecaptchaChange}
                    style={{ transform: "scale(0.75)" }}
                  />
                </Contenedor>
                <Contenedor>
                  <Button
                    color="light"
                    variant="gradient"
                    endIcon={<SendIcon />}
                    size="medium"
                    type="submit"
                  >
                    {enviar}
                  </Button>
                </Contenedor>
              </Grid>
            </Grid>
          </Contenedor>
        </Contenedor>
      </Grid>
    </Contenedor>
  );
}

// Agrega las validaciones de PropTypes para las props
Contacto.propTypes = {
  titulo: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
  asunto: PropTypes.string.isRequired,
  telefono: PropTypes.string.isRequired,
  correo: PropTypes.string.isRequired,
  mensaje: PropTypes.string.isRequired,
  enviar: PropTypes.string.isRequired,
  phNombre: PropTypes.string,
  phAsunto: PropTypes.string,
  phCorreo: PropTypes.string,
  phTelefono: PropTypes.string,
  phMensaje: PropTypes.string,
};

// Valores predeterminados para las propiedades opcionales
Contacto.defaultProps = {
  phNombre: "",
  phAsunto: "",
  phCorreo: "",
  phTelefono: "",
  phMensaje: "",
};

export default Contacto;
