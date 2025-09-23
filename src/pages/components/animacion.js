import React from "react";
import Contenedor from "components/Contenedor";

// eslint-disable-next-line react/prop-types
const MyAnimation = ({ children }) => {
  const containerStyle = {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const animationStyle = {
    position: "absolute",
    transform: "translate(-7.5%, 1.8%)",
    // Estilos responsivos
    "@media (max-width: 600px)": {
      transform: "translate(-10%, 3%)",
    },
  };

  const bgCircleStyle = {
    fill: "none",
    stroke: "none",
    strokeWidth: 2,
  };

  const loaderCircleStyle = {
    fill: "none",
    stroke: "#FFF9AA",
    strokeWidth: 2,
    strokeDasharray: 288,
    animation: "line 4s linear infinite, spin 4s linear infinite",
    transformOrigin: "50% 50%",
  };

  return (
    <Contenedor className="container" style={containerStyle}>
      <div className="animation" style={animationStyle}>
        <style>
          {`
          @keyframes line {
            0% {
              stroke-dashoffset: 1152;
            }
            100% {
              stroke-dashoffset: 576;
            }
          }
          @keyframes spin {
            0% {
              transform: rotate(270deg) translate3d(0, 0, 0);
            }
            100% {
              transform: rotate(270deg) translate3d(0, 0, 0);
            }
          }
        `}
        </style>
        <svg width="115%" height="115%" viewBox="0 0 100 100">
          <circle className="bg" cx="50" cy="50" r="46" style={bgCircleStyle} />
          <circle className="loader" cx="50" cy="50" r="46" style={loaderCircleStyle} />
        </svg>
      </div>
      {children}
    </Contenedor>
  );
};

export default MyAnimation;
