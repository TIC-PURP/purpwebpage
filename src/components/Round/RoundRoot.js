import Round from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";

export default styled(Round)(({ theme, ownerState }) => {
  const { palette, functions, typography, boxShadows } = theme;
  const { shadow, bgColor, size } = ownerState;

  const { gradients, transparent, white } = palette;
  const { pxToRem, linearGradient } = functions;
  const { size: fontSize, fontWeightRegular } = typography;

  // backgroundImage value
  const backgroundValue =
    bgColor === "transparent"
      ? transparent.main
      : linearGradient(gradients[bgColor].main, gradients[bgColor].state);

  // size value
  let sizeValue;

  switch (size) {
    case "xs":
      sizeValue = {
        width: pxToRem(24),
        height: pxToRem(24),
        fontSize: fontSize.xs,
      };
      break;
    case "sm":
      sizeValue = {
        width: pxToRem(36),
        height: pxToRem(36),
        fontSize: fontSize.sm,
      };
      break;
    case "lg":
      sizeValue = {
        width: pxToRem(105),
        height: pxToRem(105),
        fontSize: fontSize.sm,
      };
      break;
    case "xl":
      sizeValue = {
        width: pxToRem(120),
        height: pxToRem(120),
        fontSize: fontSize.md,
      };
      break;
    case "xxl":
      sizeValue = {
        width: pxToRem(180),
        height: pxToRem(180),
        fontSize: fontSize.md,
      };
      break;
    default: {
      sizeValue = {
        width: pxToRem(48),
        height: pxToRem(48),
        fontSize: fontSize.md,
      };
    }
  }

  return {
    background: backgroundValue,
    color: white.main,
    fontWeight: fontWeightRegular,
    boxShadow: boxShadows[shadow],
    ...sizeValue,
    [theme.breakpoints.down("lg")]: {
      // Estilos para dispositivos pequeños (ancho <= 600px)
      width: pxToRem(60),
      height: pxToRem(60),
      fontSize: fontSize.xs,
    },
  };
});
