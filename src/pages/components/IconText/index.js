import PropTypes from "prop-types";
import Contenedor from "components/Contenedor";
import TextSection from "components/TextSection";

function Icontext({
  variant,
  imagen,
  Texto,
  maxWidth,
  color,
  variante,
  mt,
  pt,
  pb,
  mb,
  pl,
  alignItems,
}) {
  return (
    <Contenedor
      display="flex"
      alignItems={alignItems}
      justifyContent="flex-start"
      variant={variant}
      pt={pt}
      pb={pb}
      mb={mb}
      sx={{
        gap: "8px", // Asegura un espacio uniforme entre el ícono y el texto
      }}
    >
      {/* Ícono */}
      <Contenedor component="img" src={imagen} maxWidth={maxWidth} mt={mt} />

      {/* Texto */}
      <Contenedor pt={pt} pl={pl} lineHeight={1}>
        <TextSection display="block" fontWeight="regular" variant={variante} sx={{ color }}>
          {Texto}
        </TextSection>
      </Contenedor>
    </Contenedor>
  );
}

// ✅ Valores por defecto para evitar errores si no se proporcionan props
Icontext.defaultProps = {
  variant: "contained",
  color: "#5B524D",
  variante: "body1",
  maxWidth: "2rem",
  mt: 0,
  pt: 0,
  pb: 0,
  mb: 0,
  pl: 1,
  alignItems: "center",
};

// ✅ Definición de PropTypes para validación de props
Icontext.propTypes = {
  variant: PropTypes.oneOf(["contained", "gradient"]),
  color: PropTypes.string,
  imagen: PropTypes.string.isRequired,
  Texto: PropTypes.string.isRequired,
  maxWidth: PropTypes.string,
  variante: PropTypes.string,
  mt: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  pt: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  pb: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  mb: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  pl: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  alignItems: PropTypes.string,
};

export default Icontext;
