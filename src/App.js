import { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "assets/theme";

import Principal from "pages/Principal";
import routes from "./routes/routes";

export default function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        // Agregar una condición para verificar si la ruta es "/principal" y si ya estamos en "/principal"
        if (route.route === "/principal" && pathname === "/principal") {
          return null; // No hacer nada
        }

        return (
          <Route
            exact
            path={route.route}
            element={route.component}
            key={route.key || route.route}
          />
          // Asignamos la clave (key) como el valor de la ruta si no se proporciona un valor único.
        );
      }

      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {getRoutes(routes)}
        <Route path="/" element={<Principal />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </ThemeProvider>
  );
}
