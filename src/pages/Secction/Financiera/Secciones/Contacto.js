import React, { useState } from "react";
import {
  Grid,
  OutlinedInput,
  InputLabel,
  MenuItem,
  FormControl,
  ListItemText,
  Select,
  Checkbox,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ReCAPTCHA from "react-google-recaptcha";
import Contenedor from "../../../../components/Contenedor";
import TextSection from "../../../../components/TextSection";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 3.5 + ITEM_PADDING_TOP,
    },
  },
};

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

/* eslint-disable react/prop-types */
function Contacto({
  titulo,
  nombre,
  telefono,
  creditos,
  ubicacion,
  enviar,
  phNombre,
  phTelefono,
  phUbicacion,
  avio,
  refaccionario,
  comercial,
}) {
  const [formData, setFormData] = useState({
    name: "",
    telefono: "",
    selectedCreditos: [],
    ubicacion: "",
  });

  const names = [avio, refaccionario, comercial];
  const [recaptchaValue, setRecaptchaValue] = useState(null); // Agrega el estado del reCAPTCHA

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCreditosChange = (event) => {
    setFormData({
      ...formData,
      selectedCreditos: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validar que los campos no estén vacíos
    if (
      !formData.name ||
      !formData.telefono ||
      formData.selectedCreditos.length === 0 ||
      !formData.ubicacion
    ) {
      // eslint-disable-next-line no-alert
      alert("Por favor, complete todos los campos antes de enviar el formulario");
      return;
    }

    if (!recaptchaValue) {
      // eslint-disable-next-line no-alert
      alert("Por favor, complete la verificación reCAPTCHA.");
      return;
    }

    const datos = {
      id: "financiera",
      name: formData.name,
      telefono: formData.telefono,
      selectedCreditos: formData.selectedCreditos,
      ubicacion: formData.ubicacion,
    };

    const response = await sendDataWebpage(datos);

    if (response.message === "OK") {
      // eslint-disable-next-line no-alert
      alert("Tu mensaje ha sido enviado correctamente.");
      window.location.reload();
    } else {
      // eslint-disable-next-line no-alert
      alert(response.datos != null ? response.datos : "Ocurrió un error al enviar el mensaje");
    }

    setFormData({
      name: "",
      telefono: "",
      selectedCreditos: [],
      ubicacion: "",
    });
    setRecaptchaValue(null); // Reinicia el valor de reCAPTCHA
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
        <TextSection variant="h4" sx={{ color: "#5B524D" }} textAlign="center" mt={5} mb={2}>
          {titulo}
        </TextSection>
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Contenedor component="form" id="form" onSubmit={handleSubmit}>
          <Contenedor pt={2} pb={2} px={{ xs: 6, md: 12, lg: 12 }}>
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={12} md={8} lg={5} mb={0}>
                <Input
                  name="name"
                  label={nombre}
                  placeholder={phNombre}
                  fullWidth
                  value={formData.name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={8} lg={4} mb={0}>
                <Input
                  name="telefono"
                  label={telefono}
                  placeholder={phTelefono}
                  fullWidth
                  value={formData.telefono}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={8} lg={5} mb={0}>
                <FormControl fullWidth sx={{ width: "100%" }}>
                  <InputLabel id="multiple-checkbox-label" sx={{ fontSize: "16px" }}>
                    {creditos}
                  </InputLabel>
                  <Select
                    labelId="multiple-checkbox-label"
                    id="multiple-checkbox"
                    height="100%"
                    multiple
                    sx={{ bgcolor: "#A8968B", py: 1.5, fontSize: "16px", width: "100%" }}
                    value={formData.selectedCreditos}
                    onChange={handleCreditosChange}
                    input={<OutlinedInput label={creditos} />}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                  >
                    {names.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                        sx={{
                          color: "#5B524D",
                        }}
                      >
                        <Checkbox checked={formData.selectedCreditos.indexOf(name) > -1} />
                        <ListItemText primary={name} sx={{ fontSize: "14px" }} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={8} lg={4} mb={0}>
                <Input
                  name="ubicacion"
                  label={ubicacion}
                  placeholder={phUbicacion}
                  fullWidth
                  value={formData.ubicacion}
                  onChange={handleChange}
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={8}
                lg={9}
                mb={2}
                sx={{
                  justifyContent: {
                    xs: "center",
                    lg: "flex-end",
                  },
                }}
                textAlign="right"
                container
              >
                <Contenedor mt={-1.5}>
                  <ReCAPTCHA
                    sitekey="6Lf0uvgfAAAAAPUOjQDU3QdAhUMS-jYKVv01MI9t"
                    onChange={(value) => setRecaptchaValue(value)}
                    style={{ transform: "scale(0.75)" }}
                  />
                </Contenedor>
                <Contenedor>
                  <Button
                    color="light"
                    variant="gradient"
                    endIcon={<SendIcon />}
                    size="large"
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

export default Contacto;
